<template>
  <div class="gridEvent"  width=100% height=100% >
      <svg width="100%" minHeight="100%" viewBox="0 0 1000 50">
        <rect x="0" y="10" width="1000" height="30" fill="#ffffff"></rect>
        <g v-for="event in listDrawEvents" :key="event.eventId" >
          <rect class="event" :x="event.xbegintime" y="10" :width="event.lengthevent" height="30"></rect>
        </g>
        <g v-for="item in listLine" :key="item.key">
          <line :x1="item.x" :x2="item.x" y1="0" y2="55" fill="red" stroke=rgba(19,100,205,0.1)></line>
        </g>
        <line :x1="lineCurTime" y1="0" :x2="lineCurTime" y2="55" stroke="#007DFF" ></line>
      </svg>
  </div>
</template>
<script>
export default {
  name: 'RowChart',
  props: {
    listDrawEvents: {
      eventId: Number,
      xbegintime: Number,
      lengthevent: Number
    }
  },
  data () {
    return {

    }
  },
  computed: {
    listLine: function () {
      let list = []
      for (let h = 8; h <= 23; h++) {
        list.push({
          key: h,
          x: (40 + (h - 8) * 60)
        })
      }
      return list
    },
    lineCurTime: function () {
      let curDate = new Date()
      return (40 + (curDate.getHours() - 8) * 60 + curDate.getMinutes())
    }
  }
}
</script>
<style scoped>
  .gridEvent {
    position: relative;
  }

  .event {
    fill:#D5DFE9;
  }

  .event:hover {
    fill: #98A9B9;
  }

  .event:active {
    fill: #98A9B9;
  }
</style>
