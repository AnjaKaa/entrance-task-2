<template>
  <div class="grid"  width=100% height=100% >
    <svg width="100%" minHeight="100%" viewBox="0 0 1000 50">
      <g v-for="item in listHours"  :key="item.key">
        <text :x="item.x" y=20 v-bind:class="{ past: item.past }">{{item.hour}}</text>
      </g>
      <rect :x="currentTime.xrect" y=7 width=40 height=20 fill="#007DFF" rx=10 ry=10></rect>
      <line :x1="currentTime.xline" y1="20" :x2="currentTime.xline" y2="55" stroke="#007DFF" ></line>
      <text :x="currentTime.x" y=20 class="currentTime">{{currentTime.time}}</text>

    </svg>
  </div>
</template>
<script>
export default {
  name: 'GridHours',
  data () {
    return {
    }
  },
  computed: {
    listHours: function () {
      let list = []
      let curDate = new Date()
      for (let h = 8; h <= 23; h++) {
        list.push({
          key: h,
          hour: h === 8 ? '8:00' : String(h),
          x: (35 + (h - 8) * 60),
          past: curDate.getHours() >= h
        })
      }
      return list
    },
    currentTime: function () {
      let curDate = new Date()
      let options = {
        hour: 'numeric',
        minute: 'numeric'
      }
      let x = (25 + (curDate.getHours() - 8) * 60 + curDate.getMinutes())
      return {
        time: curDate.toLocaleString('ru', options),
        x: x,
        xrect: x - 7,
        xline: x + 15
      }
    }
  }
}
</script>
<style scoped>

  .grid {
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  text {
    position:relative;
    text-align: center;
    min-width: 20px;
    font-size: 11px;
    fill: #000000;
    letter-spacing: 0.4px;
  }

  .past {
    fill: #858E98;
  }

  .currentTime {
    fill: #007DFF;
    fill: #FFFFFF;
  }
</style>
