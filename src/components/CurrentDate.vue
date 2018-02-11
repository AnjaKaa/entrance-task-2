<template>
<div class="wrapCurrentDate">
  <a class="prevDate"><img  src="./../assets/arrow2.svg"/></a>
  <el-button type="text" v-on:click = "visibleCalendar"><b>{{currentDateFormat}}</b></el-button>
  <a class="nextDate"><img  src="./../assets/arrow.svg"/></a>
</div>
</template>

<script>
export default {
  name: 'CurrentDate',
  props: ['currentDate'],
  data () {
    return {
    }
  },
  computed: {
    currentDateFormat: function () {
      let curDate = this.currentDate
      let today = new Date()
      let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }

      return this.curDate ? curDate.toLocaleString('ru', options) : today.toLocaleString('ru', options)
    }
  },
  methods: {
    visibleCalendar: function (ev) {
      let calendar = document.querySelector('.calendar')
      if (calendar.classList.contains('calendarShow')) {
        calendar.classList.remove('calendarShow')
      } else {
        calendar.classList.add('calendarShow')
      }
    }
  }
}
</script>

<style scoped>
.wrapCurrentDate{
  position: relative;
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
