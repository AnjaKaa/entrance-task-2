<template>
  <div class="grid"  width=100% height=100% >
    <svg class="svg" width="100%" minHeight="100%" viewBox="0 0 1000 50">
     <g v-for="item in listLine" :key="item.key">
      <line :x1="item.x" :x2="item.x" y1="0" y2="55" fill="red" stroke=rgba(19,100,205,0.1)></line>
     </g>
     <line :x1="lineCurTime" y1="0" :x2="lineCurTime" y2="55" stroke="#007DFF" ></line>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'GridHours',
  data () {
    return {
      curDate: new Date()
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
      return (40 + (this.curDate.getHours() - 8) * 60 + this.curDate.getMinutes())
    }
  },
  mounted: function () {
    setInterval(() => {
      this.curDate = new Date()
    }, 1000)
  }
}
</script>
<style scoped>

  .grid {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    min-width: 1000px;
  }

  .svg {
    display:block;
    padding:0;
  }
</style>
