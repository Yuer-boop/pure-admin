<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from "vue";
import { ElMessage, ElNotification } from "element-plus";

defineOptions({
  name: "CherryMarukoTimer"
});

// 倒计时状态
const isRunning = ref(false);
const isPaused = ref(false);
const currentTime = ref(0); // 当前时间（秒）
const initialTime = ref(1800); // 初始时间（30分钟）
const countDirection = ref<"up" | "down">("down"); // 计时方向
const timerMode = ref<"cute" | "serious" | "kawaii" | "minimalist">("cute"); // 计时器模式
const soundEnabled = ref(false); // 声音提示开关 - 默认关闭，只在结束时播放
const customMinutes = ref(5); // 自定义分钟数
const customSeconds = ref(0); // 自定义秒数
const showOnlyTime = ref(false); // 只显示时间模式
const backgroundOpacity = ref(0.3); // 背景透明度
const showVideoModal = ref(false); // 显示视频弹窗
const videoPlayMode = ref<"sound" | "video">("sound"); // 播放模式：声音或视频
const finishCount = ref(0); // 计时结束次数
const currentSubtitle = ref(""); // 当前显示的字幕
const subtitleVisible = ref(false); // 字幕是否可见

// 定时器引用
let timerInterval: NodeJS.Timeout | null = null;

// 时间格式化
const formatTime = computed(() => {
  const minutes = Math.floor(currentTime.value / 60);
  const seconds = currentTime.value % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});

// 进度百分比
const progress = computed(() => {
  if (countDirection.value === "down") {
    return ((initialTime.value - currentTime.value) / initialTime.value) * 100;
  } else {
    return (currentTime.value / initialTime.value) * 100;
  }
});

// 樱桃小丸子风格的状态表情
const getMoodEmoji = computed(() => {
  const percentage = progress.value;
  if (timerMode.value === "maruko") {
    if (percentage < 20) return "🍒";
    if (percentage < 40) return "😊";
    if (percentage < 60) return "📚";
    if (percentage < 80) return "💪";
    if (percentage < 95) return "🌸";
    return "🎉";
  } else if (timerMode.value === "cute") {
    if (percentage < 25) return "😴";
    if (percentage < 50) return "😊";
    if (percentage < 75) return "🤔";
    if (percentage < 90) return "😤";
    return "🔥";
  } else if (timerMode.value === "kawaii") {
    if (percentage < 25) return "(´｡• ᵕ •｡`) ♡";
    if (percentage < 50) return "(◕‿◕)♡";
    if (percentage < 75) return "(๑•̀ㅂ•́)و✧";
    if (percentage < 90) return "(ง •̀_•́)ง";
    return "٩(◕‿◕)۶";
  } else if (timerMode.value === "serious") {
    if (percentage < 25) return "⏰";
    if (percentage < 50) return "📚";
    if (percentage < 75) return "✍️";
    if (percentage < 90) return "⚡";
    return "🎯";
  } else {
    return "⏱️";
  }
});

// 樱桃小丸子风格的鼓励话语
const getMarukoMessage = computed(() => {
  const percentage = progress.value;
  if (timerMode.value === "maruko") {
    if (percentage < 20) return "小丸子准备开始啦~🍒";
    if (percentage < 40) return "加油加油！小丸子很棒哦~";
    if (percentage < 60) return "已经过了一半啦，继续努力！";
    if (percentage < 80) return "马上就要完成了，坚持住~";
    if (percentage < 95) return "最后一点点啦，小丸子加油！";
    return "太棒了！小丸子完成啦~🎉";
  }
  return "";
});

// 播放声音
const playSound = (type: "start" | "pause" | "finish" | "warning") => {
  // 只在结束时播放声音，其他时候根据开关决定
  if (type !== "finish" && !soundEnabled.value) return;

  // 创建音频上下文
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  let frequency = 440;
  let duration = 0.2;

  switch (type) {
    case "start":
      frequency = 523; // C5
      duration = 0.3;
      break;
    case "pause":
      frequency = 392; // G4
      duration = 0.2;
      break;
    case "warning":
      frequency = 880; // A5
      duration = 0.1;
      break;
    case "finish":
      // 结束时播放特殊的小丸子风格音效
      // 播放一个更长的小丸子风格结束音效序列
      const notes = [
        { freq: 523, time: 0 }, // C5
        { freq: 659, time: 0.3 }, // E5
        { freq: 784, time: 0.6 }, // G5
        { freq: 1047, time: 0.9 }, // C6
        { freq: 784, time: 1.2 }, // G5
        { freq: 659, time: 1.5 }, // E5
        { freq: 523, time: 1.8 } // C5
      ];

      notes.forEach((note, index) => {
        setTimeout(() => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);

          osc.frequency.setValueAtTime(note.freq, audioContext.currentTime);
          osc.type = "sine";

          gain.gain.setValueAtTime(0.4, audioContext.currentTime);
          gain.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + 0.25
          );

          osc.start(audioContext.currentTime);
          osc.stop(audioContext.currentTime + 0.25);
        }, note.time * 1000);
      });

      return; // 结束时不执行下面的默认音效逻辑
  }

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.type = "sine";

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + duration
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

// 开始计时
const startTimer = () => {
  if (isRunning.value && !isPaused.value) return;

  isRunning.value = true;
  isPaused.value = false;
  playSound("start");

  if (countDirection.value === "up" && currentTime.value === 0) {
    currentTime.value = 0;
  } else if (countDirection.value === "down" && currentTime.value === 0) {
    currentTime.value = initialTime.value;
  }

  timerInterval = setInterval(() => {
    if (countDirection.value === "down") {
      currentTime.value--;
      // 最后10秒静音警告（不播放声音）
      if (currentTime.value <= 10 && currentTime.value > 0) {
        // 只做视觉提示，不播放声音
      }
      // 倒计时结束
      if (currentTime.value <= 0) {
        finishTimer();
      }
    } else {
      currentTime.value++;
      // 正计时达到目标时间
      if (currentTime.value >= initialTime.value) {
        finishTimer();
      }
    }
  }, 1000);
};

// 暂停计时
const pauseTimer = () => {
  isPaused.value = true;
  playSound("pause");
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

// 重置计时器
const resetTimer = () => {
  isRunning.value = false;
  isPaused.value = false;
  currentTime.value = countDirection.value === "down" ? initialTime.value : 0;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

// 完成计时
const finishTimer = () => {
  isRunning.value = false;
  isPaused.value = false;

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // 增加结束次数
  finishCount.value++;

  // 每二次结束就显示视频弹窗（隐藏福利）
  if (finishCount.value % 2 === 0) {
    videoPlayMode.value = "video";
    showVideoModal.value = true;
    // 不播放声音，只播放视频
  } else {
    videoPlayMode.value = "sound";
    playSound("finish");

    // 樱桃小丸子风格的完成通知
    const messages = [
      "小丸子完成任务啦！🍒 真是太棒了呢~",
      "时间到！小丸子今天也很努力呢~🌸",
      "哇！小丸子真厉害，按时完成了！🎉",
      "小丸子的专注力真是了不起呀~✨"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    ElNotification({
      title: "🍒 小丸子计时完成！",
      message: randomMessage,
      type: "success",
      duration: 5000,
      position: "top-right",
      customClass: "maruko-notification"
    });
  }

  console.log(
    `计时结束次数: ${finishCount.value}, 播放模式: ${videoPlayMode.value}`
  );
};

// 关闭视频弹窗
const closeVideoModal = () => {
  showVideoModal.value = false;

  // 清除字幕
  clearSubtitles();

  // 显示特别的隐藏福利通知
  ElNotification({
    title: "🎉 隐藏福利触发！",
    message: "小丸子的特别福利视频！你真是太棒了~🍒",
    type: "success",
    duration: 6000,
    position: "top-right",
    customClass: "maruko-notification"
  });
};

// 视频播放结束后的处理
const handleVideoEnded = () => {
  // 视频播放结束后自动关闭弹窗
  setTimeout(() => {
    closeVideoModal();
  }, 1000); // 延迟1秒关闭，给用户一个缓冲
};

// 小丸子风格的字幕内容
const subtitles = [
  { time: 0, text: "🍒 小丸子的特别提醒！" },
  { time: 2, text: "学习累了就要休息一下哦~" },
  { time: 5, text: "让我们一起跳个舞放松一下吧！" },
  { time: 8, text: "💃 动起来动起来！" },
  { time: 12, text: "身体和心情都要放松哦~" },
  { time: 16, text: "🌸 这样才能更好地学习呢！" },
  { time: 20, text: "小丸子陪你一起加油！" },
  { time: 24, text: "🎉 休息够了就继续努力吧~" }
];

// 字幕定时器
let subtitleTimer: NodeJS.Timeout | null = null;
let subtitleTimeouts: NodeJS.Timeout[] = [];

// 开始字幕系统
const startSubtitles = () => {
  // 清除之前的定时器
  clearSubtitles();

  subtitles.forEach(subtitle => {
    const timeout = setTimeout(() => {
      currentSubtitle.value = subtitle.text;
      subtitleVisible.value = true;

      // 3秒后隐藏字幕
      setTimeout(() => {
        if (currentSubtitle.value === subtitle.text) {
          subtitleVisible.value = false;
        }
      }, 3000);
    }, subtitle.time * 1000);

    subtitleTimeouts.push(timeout);
  });
};

// 清除字幕定时器
const clearSubtitles = () => {
  subtitleTimeouts.forEach(timeout => clearTimeout(timeout));
  subtitleTimeouts = [];
  subtitleVisible.value = false;
  currentSubtitle.value = "";
};

// 设置视频音量为最大
const setVideoVolume = () => {
  const video = document.querySelector(".maruko-video") as HTMLVideoElement;
  if (video) {
    video.volume = 1.0; // 设置音量为最大
    video.muted = false; // 确保不是静音状态
    console.log("视频音量设置为最大:", video.volume);
  }
};

// 视频开始播放时启动字幕
const handleVideoPlay = () => {
  console.log("视频开始播放，启动字幕系统");
  setVideoVolume(); // 确保视频音量最大
  startSubtitles();
};

// 视频暂停时暂停字幕
const handleVideoPause = () => {
  console.log("视频暂停，暂停字幕");
  clearSubtitles();
};

// 设置时间
const setTime = (minutes: number) => {
  if (isRunning.value) return;

  // 同时更新自定义时间显示
  customMinutes.value = minutes;
  customSeconds.value = 0;

  // 更新计时器时间
  initialTime.value = minutes * 60;
  currentTime.value = countDirection.value === "down" ? initialTime.value : 0;

  ElMessage.success(`小丸子已设置为 ${minutes}分钟啦~🍒`);
};

// 设置自定义时间
const setCustomTime = () => {
  if (isRunning.value) {
    ElMessage.warning("请先停止当前计时器再设置时间哦~");
    return;
  }

  const totalSeconds = customMinutes.value * 60 + customSeconds.value;

  // 验证时间有效性
  if (totalSeconds <= 0) {
    ElMessage.warning("请设置正确的时间！小丸子需要有效的时间哦~");
    return;
  }

  if (totalSeconds > 7200) {
    // 最大2小时
    ElMessage.warning("时间不能超过2小时！小丸子会累的~");
    return;
  }

  // 更新时间设置
  initialTime.value = totalSeconds;
  currentTime.value = countDirection.value === "down" ? initialTime.value : 0;

  // 显示成功消息
  ElMessage.success(
    `小丸子已设置为 ${customMinutes.value}分${customSeconds.value}秒啦~🍒`
  );

  console.log("自定义时间设置成功:", {
    minutes: customMinutes.value,
    seconds: customSeconds.value,
    totalSeconds,
    initialTime: initialTime.value,
    currentTime: currentTime.value
  });
};

// 切换方向
const toggleDirection = () => {
  if (isRunning.value) return;
  countDirection.value = countDirection.value === "down" ? "up" : "down";
  currentTime.value = countDirection.value === "down" ? initialTime.value : 0;
};

// 组件销毁时清理定时器
onBeforeUnmount(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

// 初始化
initialTime.value = customMinutes.value * 60 + customSeconds.value;
currentTime.value = countDirection.value === "down" ? initialTime.value : 0;
timerMode.value = "maruko"; // 默认使用小丸子模式

// 确保初始显示的时间与设置同步
const syncDisplayTime = () => {
  if (!isRunning.value) {
    initialTime.value = customMinutes.value * 60 + customSeconds.value;
    currentTime.value = countDirection.value === "down" ? initialTime.value : 0;
  }
};

// 监听自定义时间变化，实时同步显示
watch([customMinutes, customSeconds], () => {
  syncDisplayTime();
});

// 动态背景透明度样式
const backgroundStyle = computed(() => ({
  "--bg-opacity": backgroundOpacity.value
}));

// 设置面板显示状态
const showSettings = ref(true); // 默认显示设置面板
</script>

<template>
  <div
    class="cute-timer-container"
    :class="{ 'compact-mode': showOnlyTime }"
    :style="backgroundStyle"
  >
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 中间时间显示区 -->
      <div class="timer-center">
        <!-- <img src="@/assets/block/ytheader.png" class="header-img" alt="" /> -->
        <el-card class="timer-card" :class="[`mode-${timerMode}`]">
          <!-- 标题 -->
          <template #header>
            <div class="card-header">
              <h2 class="title">
                <span class="emoji">🍒</span>
                小丸子计时器
                <span class="mood-emoji">{{ getMoodEmoji }}</span>
              </h2>
              <div v-if="timerMode === 'maruko'" class="maruko-message">
                {{ getMarukoMessage }}
              </div>
            </div>
          </template>

          <!-- 计时器主体 -->
          <div class="timer-body">
            <!-- 可爱的飘浮装饰 -->
            <div class="floating-decorations">
              <div class="decoration cherry1">🍒</div>
              <div class="decoration heart1">💕</div>
              <div class="decoration star1">✨</div>
              <div class="decoration cherry2">🍒</div>
              <div class="decoration flower1">🌸</div>
              <div class="decoration heart2">💖</div>
            </div>

            <!-- 时间显示 -->
            <div class="time-display">
              <div class="time-wrapper">
                <div
                  class="time-text"
                  :class="{
                    warning: currentTime <= 10 && countDirection === 'down',
                    running: isRunning && !isPaused
                  }"
                >
                  {{ formatTime }}
                </div>
                <div class="time-label">
                  {{ countDirection === "down" ? "剩余时间" : "已用时间" }}
                </div>
              </div>
            </div>

            <!-- 进度环 -->
            <div
              class="progress-ring"
              :class="{ 'ring-active': isRunning && !isPaused }"
            >
              <!-- 背景装饰光环 -->
              <div class="glow-ring" />

              <svg class="progress-svg" width="200" height="200">
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #ff69b4; stop-opacity: 1"
                    />
                    <stop
                      offset="50%"
                      style="stop-color: #ff1493; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #ff69b4; stop-opacity: 1"
                    />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  class="progress-bg"
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#f0f0f0"
                  stroke-width="8"
                />
                <circle
                  class="progress-fill"
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#progressGradient)"
                  stroke-width="8"
                  stroke-linecap="round"
                  :stroke-dasharray="565.48"
                  :stroke-dashoffset="565.48 - (565.48 * progress) / 100"
                  :class="{
                    warning: currentTime <= 10 && countDirection === 'down',
                    pulsing: isRunning && !isPaused
                  }"
                  filter="url(#glow)"
                />
              </svg>

              <div class="progress-text">
                <!-- 动态百分比显示 -->
                <div
                  class="progress-percentage"
                  :class="{ counting: isRunning && !isPaused }"
                >
                  {{ isNaN(progress) ? 0 : Math.round(progress) }}%
                </div>
                <div class="progress-label">完成度</div>

                <!-- 可爱的状态指示器 -->
                <div
                  class="status-indicator"
                  :class="{
                    running: isRunning && !isPaused,
                    paused: isPaused,
                    warning: currentTime <= 10 && countDirection === 'down'
                  }"
                >
                  <span v-if="!isRunning">😴</span>
                  <span v-else-if="isPaused">⏸️</span>
                  <span
                    v-else-if="currentTime <= 10 && countDirection === 'down'"
                    >😱</span
                  >
                  <span v-else>😊</span>
                </div>
              </div>
            </div>

            <!-- 控制按钮 -->
            <div class="controls">
              <el-button
                v-if="!isRunning || isPaused"
                type="primary"
                size="large"
                class="control-btn start-btn"
                @click="startTimer"
              >
                {{ isPaused ? "继续" : "开始" }}
              </el-button>

              <el-button
                v-if="isRunning && !isPaused"
                type="warning"
                size="large"
                class="control-btn pause-btn"
                @click="pauseTimer"
              >
                暂停
              </el-button>

              <el-button
                type="info"
                size="large"
                class="control-btn reset-btn"
                @click="resetTimer"
              >
                重置
              </el-button>

              <!-- 设置显示/隐藏按钮 -->
              <el-button
                type="success"
                size="large"
                class="control-btn toggle-settings-btn"
                @click="showSettings = !showSettings"
              >
                {{ showSettings ? "隐藏设置" : "显示设置" }}
              </el-button>
            </div>
          </div>
        </el-card>
      </div>

      <!-- 右侧设置面板 -->
      <div
        v-show="showSettings"
        class="settings-panel"
        :class="{ 'settings-hidden': !showSettings }"
      >
        <el-card class="settings-card">
          <template #header>
            <div class="settings-header">
              <h3>🍒 小丸子设置</h3>
              <el-button
                type="text"
                size="small"
                class="close-btn"
                @click="showSettings = false"
              >
                ×
              </el-button>
            </div>
          </template>

          <!-- 设置内容 -->
          <div class="settings-content">
            <!-- 自定义时间设置 -->
            <div class="custom-time-setting">
              <label class="setting-label">自定义时间</label>
              <div class="custom-time-inputs">
                <div class="time-input-group">
                  <el-input-number
                    v-model="customMinutes"
                    :min="0"
                    :max="120"
                    :disabled="isRunning"
                    size="small"
                    class="time-input"
                    controls-position="right"
                  />
                  <span class="time-unit">分钟</span>
                </div>
                <div class="time-input-group">
                  <el-input-number
                    v-model="customSeconds"
                    :min="0"
                    :max="59"
                    :disabled="isRunning"
                    size="small"
                    class="time-input"
                    controls-position="right"
                  />
                  <span class="time-unit">秒</span>
                </div>
                <el-button
                  type="primary"
                  size="small"
                  :disabled="isRunning"
                  class="set-custom-btn"
                  @click="setCustomTime"
                >
                  设置
                </el-button>
              </div>
            </div>

            <!-- 快速时间设置 -->
            <div class="setting-group">
              <label class="setting-label">快速设置时间</label>
              <div class="time-buttons">
                <el-button
                  v-for="time in [5, 15, 30, 45, 60]"
                  :key="time"
                  size="small"
                  :disabled="isRunning"
                  class="time-btn"
                  @click="setTime(time)"
                >
                  {{ time }}分钟
                </el-button>
              </div>
            </div>

            <!-- 计时方向 -->
            <div class="setting-group">
              <label class="setting-label">计时方向</label>
              <el-button
                :disabled="isRunning"
                :type="countDirection === 'down' ? 'danger' : 'success'"
                size="small"
                class="direction-btn"
                @click="toggleDirection"
              >
                {{ countDirection === "down" ? "⏬ 倒计时" : "⏫ 正计时" }}
              </el-button>
            </div>

            <!-- 模式选择 -->
            <div class="setting-group">
              <label class="setting-label">可爱模式</label>
              <el-select v-model="timerMode" size="small" class="mode-select">
                <el-option label="🍒 小丸子模式" value="maruko" />
                <el-option label="🥰 可爱模式" value="cute" />
                <el-option label="📚 严肃模式" value="serious" />
                <el-option label="✨ 卡哇伊" value="kawaii" />
                <el-option label="⚫ 简约模式" value="minimalist" />
              </el-select>
            </div>

            <!-- 声音设置 -->
            <div class="setting-group">
              <label class="setting-label">🔊 过程音效</label>
              <el-switch
                v-model="soundEnabled"
                active-text="开启"
                inactive-text="关闭"
                size="small"
              />
              <div class="mode-tip">
                控制开始/暂停/警告音效，结束音效始终播放
              </div>
            </div>

            <!-- 背景透明度设置 -->
            <div class="setting-group">
              <label class="setting-label">🍒 小丸子背景透明度</label>
              <div class="opacity-control">
                <el-slider
                  v-model="backgroundOpacity"
                  :min="0"
                  :max="1"
                  :step="0.1"
                  :format-tooltip="val => `${Math.round(val * 100)}%`"
                  class="opacity-slider"
                />
                <div class="opacity-value">
                  {{ Math.round(backgroundOpacity * 100) }}%
                </div>
              </div>
              <div class="mode-tip">
                调节小丸子背景图片的透明度，让计时器更可爱~
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>

    <!-- 隐藏福利视频弹窗 -->
    <el-dialog
      v-model="showVideoModal"
      title="🍒 小丸子的特别福利！"
      width="80%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      center
      class="video-modal"
      @close="closeVideoModal"
    >
      <div class="video-container">
        <div class="video-header">
          <h3>🎉 恭喜触发隐藏福利！</h3>
          <p>小丸子为你准备了特别的惊喜视频~ 🍒✨</p>
        </div>

        <video
          ref="videoPlayer"
          class="maruko-video"
          controls
          autoplay
          :volume="1.0"
          @ended="handleVideoEnded"
          @play="handleVideoPlay"
          @pause="handleVideoPause"
          @loadstart="console.log('视频开始加载')"
          @canplay="console.log('视频可以播放')"
          @loadeddata="setVideoVolume"
        >
          <source src="/videos/IMG_0135.MOV" type="video/mp4" />
          <source src="/videos/IMG_0135.MOV" type="video/quicktime" />
          您的浏览器不支持视频播放。
        </video>

        <!-- 字幕显示区域 -->
        <div
          v-if="subtitleVisible"
          class="subtitle-overlay"
          :class="{ 'subtitle-show': subtitleVisible }"
        >
          <div class="subtitle-text">
            <div class="text-content">
              {{ currentSubtitle }}
            </div>
          </div>
        </div>

        <div class="video-footer">
          <p>这是小丸子的隐藏福利，只有坚持学习的你才能看到哦！</p>
          <el-button type="primary" @click="closeVideoModal">
            谢谢小丸子！😊
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
// 樱桃小丸子主题颜色变量
:root {
  --maruko-primary: #ff69b4;
  --maruko-secondary: #ff1493;
  --maruko-accent: #ffb3d9;
  --maruko-light: #fff0f5;
  --maruko-bg: #ffeef8;
  --maruko-shadow: rgba(255, 105, 180, 0.3);
  --maruko-text: #8b008b;
}

// 全局通知样式
:global(.maruko-notification) {
  background: linear-gradient(
    135deg,
    var(--maruko-light) 0%,
    var(--maruko-bg) 100%
  ) !important;
  border: 2px solid var(--maruko-primary) !important;
  border-radius: 15px !important;

  .el-notification__title {
    color: var(--maruko-text) !important;
    font-weight: 700 !important;
  }

  .el-notification__content {
    color: var(--maruko-text) !important;
  }

  .el-notification__icon {
    color: var(--maruko-primary) !important;
  }
}

.main-content {
  width: 100vw;
  // 樱桃小丸子背景图片
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/src/assets/block/yt.png") no-repeat center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: var(--bg-opacity, 0.3);
    pointer-events: none;
    z-index: 0;
  }
}

.cute-timer-container {
  padding: 20px;
  background: linear-gradient(135deg, #ffeef8 0%, #f0f8ff 100%);
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  // 原有的樱桃图案装饰
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="20">🍒</text></svg>')
      repeat;
    background-size: 60px 60px;
    opacity: 0.03;
    animation: float 20s infinite linear;
    pointer-events: none;
    z-index: 1;
  }

  // 确保内容在背景上方
  > * {
    position: relative;
    z-index: 2;
  }

  &.compact-mode {
    min-height: auto;
    max-height: 100vh;
    padding: 10px;
    background: linear-gradient(135deg, #fff0f5 0%, #ffeef8 100%);
    overflow: auto;

    &::before {
      background-size: 40px 40px;
    }
  }
}

.timer-card {
  max-width: 500px;
  width: 100%;
  max-height: calc(100vh - 40px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &.compact-card {
    max-width: 300px;
    max-height: calc(100vh - 20px);
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &.mode-maruko {
    background: linear-gradient(
      135deg,
      #ffb3d9 0%,
      #ffd1dc 25%,
      #ffe4e1 50%,
      #fff0f5 75%,
      #ffeef8 100%
    );
    border: 3px solid #ff69b4;
    box-shadow:
      0 15px 35px rgba(255, 105, 180, 0.3),
      inset 0 2px 10px rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;

    &::before {
      content: "🍒";
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 30px;
      animation:
        bounce 2s infinite,
        rotate 4s infinite linear;
      opacity: 0.3;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -50px;
      right: -50px;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, #ffb3d9 0%, transparent 70%);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }
  }

  &.mode-cute {
    background: linear-gradient(135deg, #ffe4e6 0%, #fce7f3 100%);
    border: 2px solid #fbb6ce;
  }

  &.mode-serious {
    background: linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%);
    border: 2px solid #94a3b8;
  }

  &.mode-kawaii {
    background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
    border: 2px solid #fbbf24;
  }

  &.mode-minimalist {
    background: #ffffff;
    border: 1px solid #e5e7eb;
  }

  :deep(.el-card__header) {
    background: transparent;
    border: none;
    padding: 20px 20px 10px;
    flex-shrink: 0;
  }

  :deep(.el-card__body) {
    padding: 0 20px 20px;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.maruko-message {
  background: linear-gradient(135deg, #ffb3d9 0%, #ffd1dc 100%);
  color: #8b008b;
  padding: 12px 20px;
  border-radius: 20px;
  margin: 15px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border: 2px solid #ff69b4;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
  position: relative;
  animation: gentle-pulse 3s ease-in-out infinite;

  &::before {
    content: "🍒";
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background: white;
    padding: 2px;
    border-radius: 50%;
    border: 2px solid #ff69b4;
  }

  &::after {
    content: "🌸";
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background: white;
    padding: 2px;
    border-radius: 50%;
    border: 2px solid #ff69b4;
  }
}

.card-header {
  text-align: center;

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .emoji {
      font-size: 28px;
      animation: bounce 2s infinite;
    }

    .mood-emoji {
      font-size: 24px;
      transition: all 0.3s ease;
    }
  }
}

.timer-body {
  text-align: center;

  &.compact-body {
    padding: 10px;
  }
}

.time-display {
  margin: 30px 0;

  &.compact-time {
    margin: 15px 0;
  }

  .time-wrapper {
    display: inline-block;
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &.compact-wrapper {
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      background: linear-gradient(135deg, #fff0f5 0%, #ffeef8 100%);
      border: 2px solid #ffb3d9;
    }

    .time-text {
      font-size: 48px;
      font-weight: 700;
      color: #2d3748;
      font-family: "Monaco", "Menlo", monospace;
      transition: all 0.3s ease;

      &.compact-text {
        font-size: 32px;
      }

      &.warning {
        color: #e53e3e;
        animation:
          pulse 1s infinite,
          maruko-glow 2s infinite;
        text-shadow: 0 0 10px rgba(255, 105, 180, 0.6);
      }
    }

    .time-label {
      font-size: 14px;
      color: #718096;
      margin-top: 5px;
    }

    .compact-label {
      font-size: 12px;
      color: #718096;
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      .mood-compact {
        font-size: 16px;
      }
    }
  }
}

.progress-ring {
  position: relative;
  display: inline-block;
  margin: 20px 0;

  .progress-svg {
    transform: rotate(-90deg);

    .progress-fill {
      transition: stroke-dashoffset 0.3s ease;

      &.warning {
        stroke: #ff1493;
        animation:
          pulse-stroke 1s infinite,
          maruko-glow 2s infinite;
        filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.6));
      }
    }
  }

  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .progress-percentage {
      font-size: 24px;
      font-weight: 600;
      color: #2d3748;
    }

    .progress-label {
      font-size: 12px;
      color: #718096;
    }
  }
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;

  &.compact-controls {
    margin: 20px 0;
    gap: 10px;
  }

  .control-btn {
    border-radius: 25px;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;

    &.start-btn {
      background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
      border: none;
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;

      &::before {
        content: "🍒";
        position: absolute;
        left: -30px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);

        &::before {
          left: 8px;
        }
      }
    }

    &.pause-btn {
      background: linear-gradient(135deg, #ffa500 0%, #ff8c00 100%);
      border: none;
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      position: relative;

      &::before {
        content: "⏸️";
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.7;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 165, 0, 0.5);
      }
    }

    &.reset-btn {
      background: linear-gradient(135deg, #9370db 0%, #8a2be2 100%);
      border: none;
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      position: relative;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(147, 112, 219, 0.5);
      }
    }

    &.toggle-btn {
      background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
      border: none;
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
      }
    }
  }
}

.settings {
  background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
  border-radius: 20px;
  padding: 25px;
  margin-top: 20px;
  max-height: calc(50vh - 100px);
  overflow-y: auto;
  border: 2px solid #ffb3d9;
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.15);
  position: relative;

  &::before {
    content: "🌸";
    position: absolute;
    top: -15px;
    left: 20px;
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: white;
    padding: 8px 12px;
    border-radius: 15px;
    font-size: 14px;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  }

  .custom-time-setting {
    text-align: center;
    margin-bottom: 25px;
    padding: 25px;
    background: linear-gradient(135deg, #fff0f5 0%, #ffeef8 100%);
    border-radius: 18px;
    border: 3px dashed #ff69b4;
    transition: all 0.3s ease;
    position: relative;

    &::before {
      content: "🍒 设置时间 🍒";
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #ff69b4, #ff1493);
      color: white;
      padding: 6px 15px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
    }

    &:hover {
      border-color: #ff1493;
      background: linear-gradient(135deg, #fff0f5 0%, #ffb3d9 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 105, 180, 0.2);
    }

    .setting-label {
      display: block;
      font-size: 16px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 15px;
      text-align: center;
    }

    .custom-time-inputs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;

      .time-input-group {
        display: flex;
        align-items: center;
        gap: 8px;

        .time-input {
          width: 80px;

          :deep(.el-input__inner) {
            text-align: center;
            font-weight: 600;
            border-radius: 8px;
          }
        }

        .time-unit {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          min-width: 30px;
        }
      }

      .set-custom-btn {
        border-radius: 20px;
        padding: 8px 20px;
        font-weight: 600;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        &:disabled {
          opacity: 0.6;
          transform: none;
          box-shadow: none;
        }
      }
    }
  }

  .setting-group {
    text-align: left;

    .setting-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #4a5568;
      margin-bottom: 10px;
    }
  }

  .time-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .time-btn {
      border-radius: 20px;
      font-size: 12px;
      padding: 5px 12px;
    }
  }

  .direction-btn {
    border-radius: 20px;
    font-weight: 600;
  }

  .mode-select {
    width: 100%;
  }

  .mode-switch {
    margin-top: 5px;
  }

  .mode-tip {
    font-size: 12px;
    color: #9ca3af;
    margin-top: 8px;
    text-align: center;
    font-style: italic;
  }
}

// 透明度控制样式
.opacity-control {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;

  .opacity-slider {
    flex: 1;

    :deep(.el-slider__runway) {
      background: linear-gradient(90deg, #ffb3d9 0%, #ff69b4 100%);
      height: 8px;
      border-radius: 4px;
    }

    :deep(.el-slider__bar) {
      background: linear-gradient(90deg, #ff1493 0%, #ff69b4 100%);
      border-radius: 4px;
    }

    :deep(.el-slider__button) {
      border: 3px solid #ff69b4;
      background: white;
      width: 20px;
      height: 20px;
      box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);

      &:hover {
        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.5);
        transform: scale(1.1);
      }
    }
  }

  .opacity-value {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    min-width: 50px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);
  }
}

// 透明度控制样式
.opacity-control {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;

  .opacity-slider {
    flex: 1;

    :deep(.el-slider__runway) {
      background: linear-gradient(90deg, #ffb3d9 0%, #ff69b4 100%);
      height: 8px;
      border-radius: 4px;
    }

    :deep(.el-slider__bar) {
      background: linear-gradient(90deg, #ff1493 0%, #ff69b4 100%);
      border-radius: 4px;
    }

    :deep(.el-slider__button) {
      border: 3px solid #ff69b4;
      background: white;
      width: 20px;
      height: 20px;
      box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);

      &:hover {
        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.5);
        transform: scale(1.1);
      }
    }
  }

  .opacity-value {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    min-width: 50px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);
  }
}

// 主内容区域
.main-content {
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
}

// 中间计时器区域
.timer-center {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
}

// 右侧设置面板
.settings-panel {
  flex: 0 0 350px;
  transition: all 0.3s ease;

  &.settings-hidden {
    transform: translateX(100%);
    opacity: 0;
  }
}

.settings-card {
  height: fit-content;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  border-radius: 20px;
  border: 2px solid #ffb3d9;
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.15);

  :deep(.el-card__header) {
    background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
    border-bottom: 2px solid #ffb3d9;
  }

  :deep(.el-card__body) {
    padding: 20px;
    background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
  }
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: #8b008b;
    font-size: 18px;
    font-weight: 600;
  }

  .close-btn {
    color: #ff69b4;
    &:hover {
      color: #ff1493;
      background: rgba(255, 105, 180, 0.1);
    }
  }
}

.settings-content {
  .setting-group {
    margin-bottom: 20px;

    .setting-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #4a5568;
      margin-bottom: 10px;
    }
  }

  .time-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .time-btn {
      border-radius: 20px;
      font-size: 12px;
      padding: 5px 12px;
    }
  }

  .direction-btn {
    border-radius: 20px;
    font-weight: 600;
    width: 100%;
  }

  .mode-select {
    width: 100%;
  }

  .mode-tip {
    font-size: 12px;
    color: #9ca3af;
    margin-top: 8px;
    text-align: center;
    font-style: italic;
  }
}

// 新增按钮样式
.toggle-settings-btn {
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  border: none;
  color: white;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
  }
}

// 可爱的飘浮装饰
.floating-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  .decoration {
    position: absolute;
    font-size: 20px;
    opacity: 0.6;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    &.cherry1 {
      top: 10%;
      left: 15%;
      animation: float-bounce 8s infinite;
      animation-delay: 0s;
    }

    &.heart1 {
      top: 20%;
      right: 20%;
      animation: float-spin 6s infinite;
      animation-delay: 1s;
    }

    &.star1 {
      top: 60%;
      left: 10%;
      animation: twinkle 4s infinite;
      animation-delay: 2s;
    }

    &.cherry2 {
      bottom: 20%;
      right: 15%;
      animation: float-bounce 7s infinite;
      animation-delay: 3s;
    }

    &.flower1 {
      bottom: 10%;
      left: 20%;
      animation: float-spin 5s infinite;
      animation-delay: 4s;
    }

    &.heart2 {
      top: 70%;
      right: 10%;
      animation: twinkle 3s infinite;
      animation-delay: 5s;
    }
  }
}

// 进度环增强效果
.progress-ring {
  position: relative;
  display: inline-block;
  margin: 20px 0;

  &.ring-active {
    .glow-ring {
      animation: ring-glow 2s ease-in-out infinite;
    }
  }

  .glow-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      rgba(255, 105, 180, 0.1) 0%,
      rgba(255, 105, 180, 0.05) 70%,
      transparent 100%
    );
    z-index: -1;
  }

  .progress-svg {
    transform: rotate(-90deg);
    filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.3));

    .progress-fill {
      transition:
        stroke-dashoffset 0.5s ease,
        filter 0.3s ease;

      &.pulsing {
        animation: progress-pulse 2s ease-in-out infinite;
      }

      &.warning {
        stroke: #ff1493;
        animation: warning-flash 1s infinite;
        filter: drop-shadow(0 0 15px rgba(255, 20, 147, 0.8));
      }
    }
  }

  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .progress-percentage {
      font-size: 24px;
      font-weight: 600;
      color: #2d3748;
      transition: all 0.3s ease;

      &.counting {
        animation: number-bounce 0.8s ease-in-out infinite;
        color: #ff69b4;
        text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
      }
    }

    .progress-label {
      font-size: 12px;
      color: #718096;
      margin-top: 5px;
    }

    .status-indicator {
      margin-top: 10px;
      font-size: 18px;
      transition: all 0.3s ease;

      &.running {
        animation: happy-bounce 1s ease-in-out infinite;
      }

      &.paused {
        opacity: 0.7;
        animation: fade-pulse 2s ease-in-out infinite;
      }

      &.warning {
        animation: panic-shake 0.5s ease-in-out infinite;
      }
    }
  }
}

// 时间显示增强
.time-display {
  margin: 30px 0;

  .time-wrapper {
    display: inline-block;
    padding: 20px 30px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 240, 245, 0.9) 100%
    );
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.2);
    border: 2px solid rgba(255, 179, 217, 0.5);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(255, 105, 180, 0.3);
    }

    .time-text {
      font-size: 48px;
      font-weight: 700;
      color: #2d3748;
      font-family: "Monaco", "Menlo", monospace;
      transition: all 0.3s ease;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &.running {
        animation: time-glow 2s ease-in-out infinite;
        color: #ff69b4;
      }

      &.warning {
        color: #ff1493;
        animation: time-warning 0.8s ease-in-out infinite;
        text-shadow: 0 0 20px rgba(255, 20, 147, 0.8);
      }
    }

    .time-label {
      font-size: 14px;
      color: #8b008b;
      margin-top: 5px;
      font-weight: 500;
    }
  }
}

// 按钮增强效果
@keyframes float {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(100vw);
  }
}

@keyframes gentle-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.3);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes maruko-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 105, 180, 0.8);
  }
}

// 原有动画
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse-stroke {
  0% {
    stroke-width: 8;
  }
  50% {
    stroke-width: 12;
  }
  100% {
    stroke-width: 8;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .cute-timer-container {
    padding: 10px;
    max-height: 100vh;
    overflow: auto;

    &.compact-mode {
      padding: 5px;
    }
  }

  .timer-card {
    max-width: 100%;
    max-height: calc(100vh - 20px);

    &.compact-card {
      max-width: 280px;
      max-height: calc(100vh - 10px);
    }
  }

  .time-display .time-wrapper {
    .time-text {
      font-size: 36px;

      &.compact-text {
        font-size: 28px;
      }
    }

    &.compact-wrapper {
      padding: 10px 15px;
    }
  }

  .controls {
    flex-direction: column;
    align-items: center;

    &.compact-controls {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .control-btn {
      width: 200px;

      .compact-controls & {
        width: auto;
        min-width: 60px;
      }
    }
  }

  .settings {
    padding: 15px;
    margin-top: 15px;
    max-height: calc(40vh - 50px);

    .custom-time-setting {
      .custom-time-inputs {
        flex-direction: column;
        gap: 10px;

        .time-input-group {
          justify-content: center;
        }

        .set-custom-btn {
          width: 120px;
        }
      }
    }

    .el-row {
      .el-col {
        margin-bottom: 15px;
      }
    }
  }
}
.header-img {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 400px;
}

// 视频弹窗样式
:global(.video-modal) {
  .el-dialog {
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(135deg, #fef7f0 0%, #fff5f5 50%, #f0f9ff 100%);
    border: 3px solid #ffb3d9;
    box-shadow: 0 20px 50px rgba(255, 105, 180, 0.2);
  }

  .el-dialog__header {
    background: linear-gradient(135deg, #ffb3d9 0%, #ffc0cb 100%);
    color: #8b008b;
    padding: 20px;
    text-align: center;

    .el-dialog__title {
      font-size: 20px;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
    }
  }

  .el-dialog__body {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #fef7f0 0%, #fff5f5 50%, #f0f9ff 100%);
  }
}

.video-container {
  text-align: center;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .video-header {
    margin-bottom: 20px;

    h3 {
      color: #ff69b4;
      font-size: 22px;
      font-weight: 700;
      margin: 0 0 10px 0;
      text-shadow: 0 1px 2px rgba(255, 105, 180, 0.3);
    }

    p {
      color: #8b008b;
      font-size: 16px;
      margin: 0;
      font-weight: 500;
    }
  }

  .maruko-video {
    width: 100%;
    max-width: 700px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border: 3px solid #ffb3d9;
    background: #000;
    display: block;
    margin: 0 auto;
    position: relative;

    &:focus {
      outline: 3px solid #ff69b4;
      outline-offset: 2px;
    }
  }

  .video-footer {
    margin-top: 20px;
    width: 100%;

    p {
      color: #8b008b;
      font-size: 14px;
      margin: 0 0 15px 0;
      font-style: italic;
    }

    .el-button {
      background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
      border: none;
      color: white;
      font-weight: 600;
      padding: 12px 30px;
      border-radius: 25px;
      box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
      }
    }
  }
}

// 视频加载动画
@keyframes video-appear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.video-modal {
  animation: video-appear 0.5s ease-out;
}

// 可爱的动画效果
@keyframes float-bounce {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  50% {
    transform: translateY(-5px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}

@keyframes float-spin {
  0% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  33% {
    transform: translateY(-8px) rotate(120deg) scale(1.1);
  }
  66% {
    transform: translateY(-3px) rotate(240deg) scale(0.9);
  }
  100% {
    transform: translateY(0px) rotate(360deg) scale(1);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

@keyframes ring-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 105, 180, 0.6);
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes progress-pulse {
  0%,
  100% {
    stroke-width: 8;
    opacity: 1;
  }
  50% {
    stroke-width: 10;
    opacity: 0.8;
  }
}

@keyframes warning-flash {
  0%,
  100% {
    stroke-width: 8;
    opacity: 1;
  }
  50% {
    stroke-width: 12;
    opacity: 0.7;
  }
}

@keyframes number-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes happy-bounce {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes fade-pulse {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes panic-shake {
  0%,
  100% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-3px);
  }
  75% {
    transform: translateX(3px);
  }
}

@keyframes time-glow {
  0%,
  100% {
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 0 10px rgba(255, 105, 180, 0.3);
  }
  50% {
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 0 20px rgba(255, 105, 180, 0.6);
  }
}

@keyframes time-warning {
  0%,
  100% {
    transform: scale(1);
    text-shadow: 0 0 20px rgba(255, 20, 147, 0.8);
  }
  50% {
    transform: scale(1.05);
    text-shadow: 0 0 30px rgba(255, 20, 147, 1);
  }
}

@keyframes button-ready {
  0%,
  100% {
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  }
  50% {
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5);
  }
}

@keyframes button-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

// 字幕样式
.subtitle-overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;

  &.subtitle-show {
    opacity: 1;
    animation: subtitle-appear 0.8s ease-out;
  }

  .subtitle-text {
    background: linear-gradient(
      135deg,
      rgba(255, 105, 180, 0.95) 0%,
      rgba(255, 20, 147, 0.95) 100%
    );
    color: white;
    padding: 15px 25px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    animation: subtitle-glow 2s ease-in-out infinite;

    // 樱桃小丸子风格装饰
    &::before {
      content: "🍒";
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      animation: cherry-bounce 1.5s ease-in-out infinite;
    }

    &::after {
      content: "🌸";
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      animation: flower-spin 2s linear infinite;
    }

    // 文字内容区域
    .text-content {
      margin: 0 35px;
      line-height: 1.4;
    }
  }
}

// 字幕动画
@keyframes subtitle-appear {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes subtitle-glow {
  0%,
  100% {
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
  }
  50% {
    box-shadow: 0 12px 35px rgba(255, 105, 180, 0.8);
  }
}

@keyframes cherry-bounce {
  0%,
  100% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-60%) scale(1.2);
  }
}

@keyframes flower-spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>
