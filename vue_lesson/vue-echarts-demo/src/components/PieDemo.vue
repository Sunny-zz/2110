<template>
  <div>
    <div id="main1"></div>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { PieChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);
export default {
  mounted() {
    var option = {
      title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        // left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "right",
        top: "middle"
      },
      series: [
        {
          name: "薪资待遇",
          type: "pie",
          radius: ["30%", "60%"],
          center: ["40%", "50%"],
          data: [
            { value: 1048, name: "10k-15k" },
            { value: 735, name: "8-10k" },
            { value: 580, name: "15k-20k" },
            { value: 484, name: "6k-8k" },
            { value: 300, name: "20k-30k" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
          },
        },
      ],
    };
    this.myChart = echarts.init(document.getElementById("main1"));
    this.myChart.setOption(option);
  },
};
</script>

<style>
#main1{
  width: 600px;
  height: 400px;
}
</style>