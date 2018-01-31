<template>
<div class="wrapCurrentDate">
  <a class="prevDate"><img  src="./../assets/arrow2.svg"/></a>
  <el-button type="text"><b>{{currentDate}}</b></el-button>
  <a class="nextDate"><img  src="./../assets/arrow.svg"/></a>
</div>
</template>

<script>
export default {
  name: 'CurrentDate',
  data () {
    return {
      date: ''
    }
  },
  computed: {
    currentDate: function () {
      let curDate = new Date()
      let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }

      return this.date ? this.date : curDate.toLocaleString('ru', options)
    }
  }
}
</script>

<style scoped>
.wrapCurrentDate{
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  vertical-align: middle;
  max-width: 100%;
}
.el-button, .el-button-text:hover{
  padding: 0 10px;
  margin: 0;
  color: #000000;
}
.prevDate, .nextDate {
  display: block;
  min-width: 24px;
  max-width: 24px;
  min-height: 24px;
  max-height: 24px;
  background: #e9ecef;
  border-radius: 50%;
  text-align: center;
}
.prevDate:hover, .nextDate:hover {
   background: #cccccc;
}

.prevDate img, .nextDate img{
  width:10px;
  height:10px;
  margin-top: 7px;
}

</style>
