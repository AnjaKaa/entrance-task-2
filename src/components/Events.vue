<template>
  <el-container>
    <el-header >
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <div class="grid-content text-left">
            <img class="logo" src="./../assets/logo.svg"/>
            </div>
          </el-col>
        <el-col :span="12">
          <div class="grid-content text-right">
            <a href="./#/add_event">
              <el-button type="primary">
                Создать встречу
              </el-button>
            </a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <Chart/>
    </el-main>
  </el-container>
</template>
<script>
import Chart from './Chart.vue'
export default {
  name: 'Events',
  data () {
    return {
    }
  },
  components: {
    Chart
  }
}
</script>
<style>
 .el-container {
    max-width: 1440px;
    margin: auto;
 }
</style>
