<script setup lang="ts">
import PageLayout from "@/layout/pageLayout.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { useTable } from "plus-pro-components";
import type { PlusColumn } from "plus-pro-components";

defineOptions({
  name: ""
});

interface TableRow {
  id: number;
  name: string;
  status: string;
  tag: string;
  time: Date;
}

const TestServe = {
  getList: async () => {
    const data = Array.from({ length: 3 }).map((item, index) => {
      return {
        id: index,
        name: index === 0 ? index + "name".repeat(100) : index + "name",
        status: String(index % 3),
        tag:
          index === 1
            ? "success"
            : index === 2
              ? "warning"
              : index === 3
                ? "info"
                : "danger",
        time: new Date()
      };
    });
    return {
      data: data as TableRow[]
    };
  }
};

const { tableData } = useTable<TableRow[]>();

const tableConfig: PlusColumn[] = [
  {
    label: "名称",
    prop: "name",
    disabledHeaderFilter: true,
    tooltip: "名称",
    tableColumnProps: {
      align: "center",
      showOverflowTooltip: true
    }
  },
  {
    label: "状态",
    prop: "status",
    valueType: "select",
    options: [
      {
        label: "未解决",
        value: "0",
        color: "red"
      },
      {
        label: "已解决",
        value: "1",
        color: "blue"
      },
      {
        label: "解决中",
        value: "2",
        color: "yellow"
      },
      {
        label: "失败",
        value: "3",
        color: "red"
      }
    ]
  },
  {
    label: "标签",
    prop: "tag",
    valueType: "tag",
    fieldProps: (value: string) => {
      return { type: value };
    }
  },
  {
    label: "时间",
    prop: "time",
    valueType: "date-picker",
    tableColumnProps: {
      align: "center",
      sortable: true
    }
  }
];

const getList = async () => {
  try {
    const { data } = await TestServe.getList();
    tableData.value = data;
  } catch (error) {}
};
getList();
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
          <PlusTable :columns="tableConfig" :table-data="tableData" />
        </div>
      </template>
    </PageLayout>
  </div>
</template>

<style lang="scss" scoped></style>
