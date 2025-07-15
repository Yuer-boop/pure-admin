<!--
 * @Author: jason
 * @Date: 2024-07-22 09:57:18
 * @LastEditTime: 2024-11-27 10:41:27
 * @LastEditors: jason
 * @Description:
 * @FilePath: \lonsdor-center-backend\src\layout\pageLayout.vue
 *
-->
<script setup lang="ts">
defineOptions({
  name: "layoutPage"
});

interface Propstype {
  pageClass?: string;
  isHeader?: boolean;
  pageStyle?: any;
}

const props = withDefaults(defineProps<Propstype>(), {
  pageClass: "",
  isHeader: true,
  pageStyle() {
    return {
      minWidth: "800px"
    };
  }
});
</script>

<template>
  <div
    :class="[props.pageClass]"
    class="page-layout-page flex flex-col h-[100%]"
    style="background: var(--el-bg-color)"
    :style="[props.pageStyle]"
  >
    <div
      v-if="props.isHeader"
      class="header-wrapper h-[60px] flex items-center"
    >
      <slot name="header" />
    </div>
    <div class="content-wrapper flex flex-1 overflow-hidden flex-col h-[100%]">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.page-layout-page {
  overflow: hidden;

  .header-wrapper {
    .head-item {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
  }
}
</style>
