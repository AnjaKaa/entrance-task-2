<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0;
  }

 .el-container {
      min-height: 100vh;
  }

  .el-header {
      color: #333;
      min-height: 71px;
      border-bottom: 1px solid #cccccc;
    }

  .el-main {
    padding: 0;
      color: #333;
      text-align: center;
  }

  .el-footer {
      border-top: 1px solid #cccccc;
  }

  .grid-content {
      min-height: 71px;
      vertical-align: middle;
    }
  .el-button {
    font-size: 16px;
    margin: 18px 0;
    padding: 10px 16px;
  }
  .el-button--primary {
    color: #fff;
    background-color: #007DFF;
    border-color: #007DFF;

  }

  .el-button--primary:hover {
    background-color: #0059FF;
    border-color:  #0059FF;
  }

  .el-button--primary:active {
    background-color: rgba(11,0,255,0.8);
    border-color:  rgba(11,0,255,0.8);
  }

  .logo{
    margin: 21px 0;
  }

  .text-right{
    text-align: right;
  }
  .text-left {
    text-align: left;
  }

  .el-input--prefix .el-input__inner,
  .el-input--suffix .el-input__inner
  {
    padding: 0 10px;
  }

  .el-icon-time, .el-icon-date{
    display:none;
  }

  .el-radio-button .el-radio-button__inner,
  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    display: block;
    min-width: 100%;
    margin-bottom: 5px;
    text-align: left;
    color:#000;
    background-color: #E9ECEF;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: none;
  }

  .el-radio-button.is-focus .el-radio-button__inner{
    color: #fff;
    background-color: #007DFF;
  }

  .el-message-box__content {
    padding: 0;
  }
</style>
