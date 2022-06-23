<template>
  <div>
    <h2>柱状图</h2>
    <button @click="add">添加</button>
    <div v-show="data.length" id="main"></div>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
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
import axios from "axios";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    axios.get("http://localhost:3008/data").then((res) => {
      this.data = res.data;
    });
  },

  updated() {
    const colors = [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#5470c6",
    ];
    var option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: this.data.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: this.data.map((item) => item.sales),
          itemStyle: {
            color: function (param) {
              return colors[param.dataIndex];
            },
          },
        },
      ],
    };
    // 我们多个函数中想要使用同一个变量，不一定必须定义成 data， 直接 this.xxx 定义即可
    // 或者说在同一个函数中对一个变量进行判断 直接 this.xxx 定义即可
    if (!this.myChart) {
      this.myChart = echarts.init(document.getElementById("main"));
    }

    this.myChart.setOption(option);
  },
  methods: {
    add() {
      this.data.push({
        id: "7",
        name: "外套",
        sales: 15,
      });
    },
  },
};
</script>

<style>
#main {
  width: 600px;
  height: 400px;
}
</style>