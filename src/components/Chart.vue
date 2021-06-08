<template>
  <div class="">
    <canvas id="income-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import dailyChartData from "../chartjs/LineCharts";

export default {
  name: "Chart",
  data() {
    return {
     dailyChartData:dailyChartData
    };
  },
  methods:{
    generateRandomArray(length, max){
      return [...new Array(length)].map(() => Math.round(Math.random() * max));
    },
  },
   mounted() {
    const ctx = document.getElementById('income-chart');
    new Chart(ctx, this.dailyChartData);
  }
}
</script>

