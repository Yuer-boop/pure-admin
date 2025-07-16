<script setup lang="ts">
import PageLayout from "@/layout/pageLayout.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
defineOptions({
  name: ""
});
</script>

<template>
  <div class="product_stacks_out h-[100%]">
    <PageLayout pageClass="product_stacks_page" :isHeader="false">
      <template #content>
        <div
          ref="curdWrRef"
          class="tab-wr p-[10px] flex flex-1 overflow-hidden box-border"
        >
          test
          <el-button :icon="useRenderIcon('IF-icon-fske')">11</el-button>
        </div>
      </template>
    </PageLayout>
  </div>
</template>

<style lang="scss" scoped></style>
