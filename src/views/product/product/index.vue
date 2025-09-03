<script lang="ts" setup>
import PageLayout from "@/layout/pageLayout.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, reactive } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import html2canvas from "html2canvas-pro";

defineOptions({
  name: "WeChatMockup"
});

interface ChatMessage {
  id: string;
  type: "text" | "file";
  content: string;
  sender: "self" | "other";
  time: string;
  date: string;
  avatar?: string;
  fileName?: string;
  fileSize?: string;
}

interface PhoneStatus {
  time: string;
  battery: number;
  signal: number;
  network: "5G" | "4G" | "3G" | "WiFi";
}

// 响应式数据
const chatMessages = ref<ChatMessage[]>([
  // {
  //   id: "1",
  //   type: "file",
  //   content: "",
  //   sender: "other",
  //   time: "18:42",
  //   date: "昨天",
  //   fileName: "合同.docx",
  //   fileSize: "19KB"
  // },
  // {
  //   id: "2",
  //   type: "text",
  //   content: "起来没呢",
  //   sender: "self",
  //   time: "09:09",
  //   date: "今天"
  // },
  // {
  //   id: "3",
  //   type: "text",
  //   content: "快把我枕头洗了哈哈哈",
  //   sender: "self",
  //   time: "09:09",
  //   date: "今天"
  // }
]);

const phoneStatus = reactive<PhoneStatus>({
  time: "13:34",
  battery: 82,
  signal: 4,
  network: "5G"
});

const chatTitle = ref("小朋友");

// 编辑相关
const editingMessage = ref<ChatMessage | null>(null);
const editForm = reactive({
  type: "text" as "text" | "file",
  content: "",
  sender: "self" as "self" | "other",
  time: "",
  date: "",
  fileName: "",
  fileSize: ""
});

const showAddDialog = ref(false);
const showEditDialog = ref(false);

// 自己和对方头像
const selfAvatar = ref<string>("/src/assets/user.jpg"); // 默认自己头像
const otherAvatar = ref<string>("/src/assets/user.jpg"); // 默认对方头像

// 格式化当前时间
const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 5);
};

const getCurrentDate = () => {
  const now = new Date();
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (now.toDateString() === today.toDateString()) {
    return "今天";
  } else if (now.toDateString() === yesterday.toDateString()) {
    return "昨天";
  } else {
    return `${now.getMonth() + 1}月${now.getDate()}日`;
  }
};

// 添加新消息
const addMessage = () => {
  resetEditForm();
  editForm.time = getCurrentTime();
  editForm.date = getCurrentDate();
  showAddDialog.value = true;
};

// 编辑消息
const editMessage = (message: ChatMessage) => {
  editingMessage.value = message;
  Object.assign(editForm, {
    type: message.type,
    content: message.content,
    sender: message.sender,
    time: message.time,
    date: message.date,
    fileName: message.fileName || "",
    fileSize: message.fileSize || ""
  });
  showEditDialog.value = true;
};

// 删除消息
const deleteMessage = (id: string) => {
  const index = chatMessages.value.findIndex(msg => msg.id === id);
  if (index > -1) {
    chatMessages.value.splice(index, 1);
    ElMessage.success("消息已删除");
  }
};

// 头像上传处理
function handleAvatarChange(e: Event, type: "self" | "other") {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev: ProgressEvent<FileReader>) => {
    const result = ev.target?.result as string;
    if (type === "self") selfAvatar.value = result;
    else otherAvatar.value = result;
  };
  reader.readAsDataURL(file);
}

// 保存消息
const saveMessage = () => {
  if (!editForm.content && editForm.type !== "file") {
    ElMessage.warning("请输入消息内容");
    return;
  }

  if (editForm.type === "file" && !editForm.fileName) {
    ElMessage.warning("请输入文件名");
    return;
  }

  // 根据 sender 赋值头像
  const avatar =
    editForm.sender === "self" ? selfAvatar.value : otherAvatar.value;

  const messageData: ChatMessage = {
    id: editingMessage.value?.id || Date.now().toString(),
    type: editForm.type,
    content: editForm.content,
    sender: editForm.sender,
    time: editForm.time,
    date: editForm.date,
    avatar,
    fileName: editForm.fileName || undefined,
    fileSize: editForm.fileSize || undefined
  };

  if (editingMessage.value) {
    const index = chatMessages.value.findIndex(
      msg => msg.id === editingMessage.value!.id
    );
    if (index > -1) {
      chatMessages.value[index] = messageData;
    }
  } else {
    chatMessages.value.push(messageData);
  }

  closeDialog();
  ElMessage.success(editingMessage.value ? "消息已更新" : "消息已添加");
};

// 关闭对话框
const closeDialog = () => {
  showAddDialog.value = false;
  showEditDialog.value = false;
  editingMessage.value = null;
  resetEditForm();
};

// 重置编辑表单
const resetEditForm = () => {
  Object.assign(editForm, {
    type: "text",
    content: "",
    sender: "self",
    time: "",
    date: "",
    fileName: "",
    fileSize: ""
  });
};

// 导出为图片
const exportAsImage = async () => {
  try {
    // 检查是否有消息
    if (chatMessages.value.length === 0) {
      ElMessage.warning("请先添加一些消息再导出");
      return;
    }
    const element = document.getElementById("wechat-export-area");
    if (!element) {
      ElMessage.error("未找到导出区域");
      return;
    }
    // 直接使用 html2canvas-pro 截图，无需兼容颜色
    const canvas = await html2canvas(element, {
      backgroundColor: "#fff",
      useCORS: true,
      logging: false,
      scrollY: -window.scrollY
    });
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `wechat-chat-${Date.now()}.png`;
    link.click();
    ElMessage.success("图片已导出");
  } catch (error) {
    console.error("导出失败:", error);
    ElMessage.error("导出图片失败，请重试");
  }
};

// 移动消息
const moveMessage = (index: number, direction: "up" | "down") => {
  const newIndex = direction === "up" ? index - 1 : index + 1;
  if (newIndex >= 0 && newIndex < chatMessages.value.length) {
    const temp = chatMessages.value[index];
    chatMessages.value[index] = chatMessages.value[newIndex];
    chatMessages.value[newIndex] = temp;
  }
};
</script>

<template>
  <div class="wechat-mockup-container h-full">
    <PageLayout :isHeader="false" pageClass="wechat-mockup-page">
      <template #content>
        <div class="flex h-full gap-4 p-4">
          <!-- 左侧编辑区域 -->
          <div class="flex-1 bg-white rounded-lg shadow-sm p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold text-gray-800">
                猪猪专用🐷-微信聊天记录编辑器
              </h2>
              <div class="flex gap-2">
                <el-button
                  :icon="useRenderIcon('plus')"
                  type="primary"
                  @click="addMessage"
                >
                  添加消息
                </el-button>
                <el-button
                  :icon="useRenderIcon('download')"
                  type="success"
                  @click="exportAsImage"
                >
                  导出图片
                </el-button>
                <el-button
                  :icon="useRenderIcon('download')"
                  type="success"
                  @click="
                    () => {
                      chatMessages = [];
                      ElMessage.success('聊天记录已清空');
                    }
                  "
                >
                  清空记录
                </el-button>
              </div>
            </div>

            <!-- 手机状态设置 -->
            <el-card class="mb-6" header="手机状态设置">
              <div class="grid grid-cols-2 gap-4">
                <el-form-item label="时间">
                  <el-input v-model="phoneStatus.time" placeholder="HH:mm" />
                </el-form-item>
                <el-form-item label="电量">
                  <el-input-number
                    v-model="phoneStatus.battery"
                    :max="100"
                    :min="0"
                  />
                </el-form-item>
                <el-form-item label="信号强度">
                  <el-input-number
                    v-model="phoneStatus.signal"
                    :max="4"
                    :min="0"
                  />
                </el-form-item>
                <el-form-item label="网络类型">
                  <el-select v-model="phoneStatus.network">
                    <el-option label="5G" value="5G" />
                    <el-option label="4G" value="4G" />
                    <el-option label="3G" value="3G" />
                    <el-option label="WiFi" value="WiFi" />
                  </el-select>
                </el-form-item>
              </div>
            </el-card>

            <!-- 聊天标题设置 -->
            <el-form-item class="mb-6" label="聊天对象">
              <el-input v-model="chatTitle" placeholder="请输入聊天对象名称" />
            </el-form-item>

            <!-- 自己和对方头像 -->
            <div class="flex items-center gap-8 mb-6">
              <div class="flex items-center gap-2">
                <span>自己头像：</span>
                <label style="cursor: pointer">
                  <img
                    :src="selfAvatar"
                    alt="自己头像"
                    style="
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      border: 1px solid #eee;
                      border-radius: 4px;
                    "
                  />
                  <input
                    accept="image/*"
                    style="display: none"
                    type="file"
                    @change="e => handleAvatarChange(e, 'self')"
                  />
                </label>
              </div>
              <div class="flex items-center gap-2">
                <span>对方头像：</span>
                <label style="cursor: pointer">
                  <img
                    :src="otherAvatar"
                    alt="对方头像"
                    style="
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      border: 1px solid #eee;
                      border-radius: 4px;
                    "
                  />
                  <input
                    accept="image/*"
                    style="display: none"
                    type="file"
                    @change="e => handleAvatarChange(e, 'other')"
                  />
                </label>
              </div>
            </div>

            <!-- 消息列表 -->
            <div class="space-y-3">
              <!-- 空状态提示 -->
              <div
                v-if="chatMessages.length === 0"
                class="text-center text-gray-500 py-20"
              >
                <div class="mb-4">
                  <svg
                    class="w-16 h-16 mx-auto text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-700 mb-2">
                  开始创建聊天记录
                </h3>
                <p class="text-sm mb-4">
                  点击上方"添加消息"按钮开始创建您的微信聊天记录
                </p>
                <p class="text-xs text-gray-400">支持文本和Word文件消息类型</p>
              </div>

              <!-- 消息列表项 -->
              <div
                v-for="(message, index) in chatMessages"
                :key="message.id"
                class="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <el-tag
                        :type="message.sender === 'self' ? 'success' : 'info'"
                      >
                        {{ message.sender === "self" ? "自己" : "对方" }}
                      </el-tag>
                      <el-tag type="warning">{{ message.type }}</el-tag>
                      <span class="text-sm text-gray-500">
                        {{ message.date }} {{ message.time }}
                      </span>
                    </div>
                    <div class="text-gray-700">
                      <div v-if="message.type === 'text'">
                        {{ message.content }}
                      </div>
                      <div
                        v-else-if="message.type === 'file'"
                        class="text-green-600"
                      >
                        📄 {{ message.fileName }} ({{ message.fileSize }})
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-1 ml-4">
                    <el-button
                      :disabled="index === 0"
                      :icon="useRenderIcon('arrow-up')"
                      size="small"
                      @click="moveMessage(index, 'up')"
                      >上移
                    </el-button>
                    <el-button
                      :disabled="index === chatMessages.length - 1"
                      :icon="useRenderIcon('arrow-down')"
                      size="small"
                      @click="moveMessage(index, 'down')"
                      >下移
                    </el-button>
                    <el-button
                      :icon="useRenderIcon('edit')"
                      size="small"
                      type="primary"
                      @click="editMessage(message)"
                      >编辑
                    </el-button>
                    <el-button
                      :icon="useRenderIcon('delete')"
                      size="small"
                      type="danger"
                      @click="deleteMessage(message.id)"
                      >删除
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧手机模型 -->
          <div id="wechat-export-area" class="wechat-phone-container">
            <div class="wechat-phone">
              <!-- 状态栏 -->
              <div class="status-bar">
                <img alt="" src="./images//未标题-4_02.png" />
              </div>

              <!-- 导航栏 -->
              <div class="nav-bar">
                <img alt="" src="./images//未标题-4_33302_04.png" />
                <div>{{ chatTitle }}</div>
              </div>

              <!-- 聊天内容区域 -->
              <div class="chat-content">
                <div v-if="chatMessages.length === 0" class="empty-chat">
                  <p class="empty-text">还没有聊天记录</p>
                  <p class="empty-hint">点击左侧"添加消息"开始创建</p>
                </div>

                <!-- 聊天消息 -->
                <div
                  v-for="message in chatMessages"
                  :key="message.id"
                  class="message-group"
                >
                  <!-- 时间显示 -->
                  <div class="message-time">
                    {{ message.date === "今天" ? "" : message.date }}
                    {{ message.time }}
                  </div>

                  <!-- 消息内容 -->
                  <div
                    :class="{ 'message-self': message.sender === 'self' }"
                    class="message-wrapper"
                  >
                    <!-- 头像 -->
                    <div class="avatar">
                      <img
                        v-if="message.avatar"
                        :src="message.avatar"
                        alt="头像"
                      />
                      <div v-else class="avatar-placeholder">
                        {{ message.sender === "self" ? "我" : "他" }}
                      </div>
                    </div>

                    <!-- 消息气泡 -->
                    <div class="message-bubble">
                      <!-- 文本消息 -->
                      <div
                        v-if="message.type === 'text'"
                        :class="{ 'text-self': message.sender === 'self' }"
                        class="text-message"
                      >
                        {{ message.content }}
                      </div>

                      <!-- Word文件消息 -->
                      <div
                        v-else-if="message.type === 'file'"
                        :class="{ 'file-self': message.sender === 'self' }"
                        class="file-message"
                      >
                        <div class="file-name">{{ message.fileName }}</div>
                        <div class="file-size">{{ message.fileSize }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 底部输入栏 -->
              <div class="input-bar">
                <img alt="" src="./images//未标题-4_09.png" />
              </div>
            </div>
          </div>
        </div>

        <!-- 添加消息对话框 -->
        <el-dialog
          v-model="showAddDialog"
          title="添加消息"
          width="500px"
          @close="closeDialog"
        >
          <el-form :model="editForm" label-width="80px">
            <el-form-item label="消息类型">
              <el-select v-model="editForm.type">
                <el-option label="文本" value="text" />
                <el-option label="Word文件" value="file" />
              </el-select>
            </el-form-item>
            <el-form-item label="发送者">
              <el-select v-model="editForm.sender">
                <el-option label="自己" value="self" />
                <el-option label="对方" value="other" />
              </el-select>
            </el-form-item>
            <el-form-item label="日期">
              <el-input v-model="editForm.date" placeholder="如：今天、昨天" />
            </el-form-item>
            <el-form-item label="时间">
              <el-input v-model="editForm.time" placeholder="HH:mm" />
            </el-form-item>

            <!-- 文本内容 -->
            <el-form-item v-if="editForm.type === 'text'" label="内容">
              <el-input v-model="editForm.content" :rows="3" type="textarea" />
            </el-form-item>

            <!-- 文件信息 -->
            <template v-if="editForm.type === 'file'">
              <el-form-item label="文件名">
                <el-input
                  v-model="editForm.fileName"
                  placeholder="如：合同.docx"
                />
              </el-form-item>
              <el-form-item label="文件大小">
                <el-input v-model="editForm.fileSize" placeholder="如：19KB" />
              </el-form-item>
            </template>
          </el-form>

          <template #footer>
            <el-button @click="closeDialog">取消</el-button>
            <el-button type="primary" @click="saveMessage">保存</el-button>
          </template>
        </el-dialog>

        <!-- 编辑消息对话框 -->
        <el-dialog
          v-model="showEditDialog"
          title="编辑消息"
          width="500px"
          @close="closeDialog"
        >
          <el-form :model="editForm" label-width="80px">
            <el-form-item label="消息类型">
              <el-select v-model="editForm.type">
                <el-option label="文本" value="text" />
                <el-option label="Word文件" value="file" />
              </el-select>
            </el-form-item>
            <el-form-item label="发送者">
              <el-select v-model="editForm.sender">
                <el-option label="自己" value="self" />
                <el-option label="对方" value="other" />
              </el-select>
            </el-form-item>
            <el-form-item label="日期">
              <el-input v-model="editForm.date" placeholder="如：今天、昨天" />
            </el-form-item>
            <el-form-item label="时间">
              <el-input v-model="editForm.time" placeholder="HH:mm" />
            </el-form-item>

            <!-- 文本内容 -->
            <el-form-item v-if="editForm.type === 'text'" label="内容">
              <el-input v-model="editForm.content" :rows="3" type="textarea" />
            </el-form-item>

            <!-- 文件信息 -->
            <template v-if="editForm.type === 'file'">
              <el-form-item label="文件名">
                <el-input
                  v-model="editForm.fileName"
                  placeholder="如：合同.docx"
                />
              </el-form-item>
              <el-form-item label="文件大小">
                <el-input v-model="editForm.fileSize" placeholder="如：19KB" />
              </el-form-item>
            </template>
          </el-form>

          <template #footer>
            <el-button @click="closeDialog">取消</el-button>
            <el-button type="primary" @click="saveMessage">保存</el-button>
          </template>
        </el-dialog>
      </template>
    </PageLayout>
  </div>
</template>

<style lang="scss" scoped>
/* 响应式设计 */
@media (width <= 1200px) {
  .wechat-phone-container {
    width: 320px;
  }

  .wechat-phone {
    width: 320px;
    height: 693px;
    transform: scale(0.85);
  }
}

@media (width <= 768px) {
  .flex {
    flex-direction: column;
  }

  .wechat-phone-container {
    width: 100%;
    max-width: 350px;
  }
}

.wechat-mockup-container {
  font-family:
    -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti,
    "Microsoft Yahei", Tahoma, Simsun, sans-serif;
}

.wechat-mockup-page {
  background-color: #ededed;
}

/* 微信手机容器 */
.wechat-phone-container {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 760px;
}

.wechat-phone {
  position: relative;
  width: 350px;
  height: 760px;
  overflow: hidden;
}

/* 状态栏 */
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 41px;
}

.status-left {
  display: flex;
  gap: 6px;
  align-items: center;
}

.time {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.crescent-moon {
  width: 14px;
  height: 14px;
  color: #000;
}

.status-right {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 15px;
}

/* 信号强度 */
.signal-bars {
  display: flex;
  gap: 2px;
  align-items: end;
  margin-right: 2px;
}

.signal-bar {
  width: 3px;
  background: #000;
  border-radius: 1px;
  opacity: 0.3;

  &:nth-child(1) {
    height: 3px;
  }

  &:nth-child(2) {
    height: 5px;
  }

  &:nth-child(3) {
    height: 7px;
  }

  &:nth-child(4) {
    height: 9px;
  }

  &.active {
    opacity: 1;
  }
}

.network-type {
  margin-left: 2px;
  font-size: 15px;
  font-weight: 600;
}

/* 电池 */
.battery {
  position: relative;
  width: 27px;
  height: 13px;
  margin-left: 4px;
  border: 1px solid #000;
  border-radius: 2px;

  &::after {
    position: absolute;
    top: 4px;
    right: -3px;
    width: 2px;
    height: 5px;
    content: "";
    background: #000;
    border-radius: 0 1px 1px 0;
  }
}

.battery-level {
  height: 100%;
  background: #000;
  border-radius: 1px;
  transition: width 0.3s ease;
}

.battery-text {
  position: absolute;
  top: -1px;
  right: 30px;
  font-size: 15px;
  font-weight: 600;
}

/* 导航栏 */
.nav-bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    transform: translate(-50%, -50%);
  }

  img {
    position: relative;
  }
}

.nav-left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.back-arrow {
  width: 20px;
  height: 20px;
  color: #576b95;
}

.chat-title {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  letter-spacing: 0;
}

.nav-right {
  display: flex;
  align-items: center;
}

.more-dots {
  width: 20px;
  height: 20px;
  color: #576b95;
}

/* 聊天内容区域 */
.chat-content {
  height: calc(100% - 100px - 70px); // 减去状态栏+导航栏+输入栏
  padding: 10px;
  overflow-y: auto;
  background: #ededed;
}

.empty-chat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
}

.empty-text {
  margin-bottom: 8px;
  font-size: 16px;
}

.empty-hint {
  font-size: 14px;
  opacity: 0.7;
}

/* 消息组 */
.message-group {
  margin-bottom: 20px;
}

.message-time {
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 16px;
  color: #b2b2b2;
  text-align: center;
}

/* 消息容器 */
.message-wrapper {
  display: flex;
  gap: 8px;
  align-items: flex-start;

  &.message-self {
    flex-direction: row-reverse;
  }
}

/* 头像 */
.avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #ccc;
}

/* 消息气泡 */
.message-bubble {
  position: relative;
  max-width: 240px;
}

/* 文本消息 */
.text-message {
  position: relative;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 22px;
  word-break: break-all;
  word-wrap: break-word;
  border-radius: 4px;

  &:not(.text-self) {
    color: #000;
    background: #fff;

    &::before {
      position: absolute;
      top: 12px;
      left: -6px;
      width: 0;
      height: 0;
      content: "";
      border-top: 6px solid transparent;
      border-right: 6px solid #fff;
      border-bottom: 6px solid transparent;
    }
  }

  &.text-self {
    color: #000;
    background: #95ec69;

    &::before {
      position: absolute;
      top: 12px;
      right: -5px;
      width: 0;
      height: 0;
      content: "";
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #95ec69;
    }
  }
}

/* 文件消息 */
.file-message {
  position: relative;
  width: 224px;
  height: 80px;
  background: url("./images/111_08.png") no-repeat center;
  background-size: cover;

  /* 默认（别人发送）- 左侧尖角 */
  &::before {
    position: absolute;
    top: 16px;
    left: -6px;
    width: 0;
    height: 0;
    content: "";
    border-top: 6px solid transparent;
    border-right: 6px solid #fff;
    border-bottom: 6px solid transparent;
  }

  /* 自己发送 - 右侧尖角 */
  &.file-self {
    &::before {
      display: none; /* 隐藏左侧尖角 */
    }

    &::after {
      position: absolute;
      top: 16px;
      right: -6px;
      width: 0;
      height: 0;
      content: "";
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #fff;
    }
  }

  .file-name {
    position: absolute;
    top: 14px;
    left: 14px;
    font-size: 14px;
    font-weight: 450;
    color: #000;
  }

  .file-size {
    position: absolute;
    top: 36px;
    left: 14px;
    font-size: 10px;
  }
}

.file-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background: #2b5ce6;
  border-radius: 6px;

  svg {
    width: 28px;
    height: 28px;
  }
}

.file-info {
  margin-bottom: 8px;
}

.file-name {
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
}

.file-size {
  font-size: 13px;
  line-height: 16px;
  color: #888;
}

.wechat-pc-badge {
  display: flex;
  gap: 4px;
  align-items: center;

  svg {
    width: 12px;
    height: 12px;
  }

  span {
    font-size: 12px;
    line-height: 16px;
    color: #10ad00;
  }
}

/* 输入栏 */
.input-bar {
  height: 82px;
}

.input-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  height: 44px;
}

.voice-btn,
.emoji-btn {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #666;
  background: #fff;
  border-radius: 4px;
}

.voice-btn svg {
  width: 18px;
  height: 18px;
}

.emoji-btn {
  font-size: 20px;
}

.message-input {
  display: flex;
  flex: 1;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  font-size: 16px;
  color: #999;
  background: #fff;
  border-radius: 4px;
}

.plus-btn {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background: #07c160;
  border-radius: 4px;
}

/* iPhone底部指示条 */
.home-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;

  &::after {
    width: 134px;
    height: 5px;
    content: "";
    background: #000;
    border-radius: 3px;
    opacity: 0.4;
  }
}

/* 滚动条样式 */
.chat-content::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
