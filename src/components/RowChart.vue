<template>
  <div class="gridEvent"  >
    <svg width="100%" height="100%" viewBox="0 0 1000 50">
      <rect  x="0" y="5" width="1000" height="28" fill="#ffffff"></rect>
      <rect v-on:click="visibleAddButton" :id="roomId" :x="lineCurTime()"  y="5" :width="1000-lineCurTime()" height="28" fill="#ffffff" ></rect>
      <g v-for="event in listDrawEvents" :key="event.eventId" >
        <rect class="event"
              :data-title="event.evetTitle"
              :x="event.xbegintime" y="5" :width="event.lengthevent" height="28">
        </rect>
      </g>
      <g v-for="item in listLine" :key="item.key">
        <line :x1="item.x" :x2="item.x" y1="0" y2="55" fill="red" stroke=rgba(19,100,205,0.1)></line>
      </g>
        <line v-on:click="visibleAddButton" :x1="lineCurTime()" y1="0" :x2="lineCurTime()" y2="55" stroke="#007DFF" ></line>
    </svg>
     <div v-for="event in listDrawEvents" :key="event.eventId">
          <rect-event-popover :event="event" :coeff="coeff" class="popover" />
    </div>
  </div>
</template>
<script>
import RectEventPopover from './RectEventPopover'
export default {
  name: 'RowChart',
  props: {
    listDrawEvents: {
      eventId: Number,
      eventTitle: String,

      xbegintime: Number,
      lengthevent: Number
    },
    roomTitle: String,
    roomId: Number
  },
  data () {
    return {
      curDate: new Date(),
      currentWidth: 1000,
      coeff: 1,
      xLineTime: 0
    }
  },
  components: {
    RectEventPopover
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
    }
  },
  methods: {
    lineCurTime: function () {
      return (40 + (this.curDate.getHours() - 8) * 60 + this.curDate.getMinutes())
    },
    coordsXLineCurTime: function () {
      let table = document.querySelector('.listTableRow')
      let scrollLeft = 0
      if (table) scrollLeft = table.scrollLeft
      return 225 + (this.lineCurTime()) * this.coeff - scrollLeft
    },

    visibleAddButton: function (ev) {
      let top = ev.target.getBoundingClientRect().top - document.querySelector('.listTableRow').getBoundingClientRect().top
      let left = this.xLineTime + 30
      document.querySelector('.rowAddButton').setAttribute('style', `display:block; left:${left}px; top:${top}px;`)
    }
  },
  mounted: function () {
    setInterval(() => {
      this.curDate = new Date()
      let grid = document.querySelector('.grid')

      if (grid) {
        this.currentWidth = grid.clientWidth
        this.coeff = grid.clientWidth / 1000
      }
      this.xLineTime = this.coordsXLineCurTime()
    }, 1000)
  }
}
</script>
<style scoped>
  svg {
    z-index: 5;
    min-height: 50px;
  }
  .gridEvent {
    position: relative;
    min-width: 1000px;
  }

  .event {
    fill:#D5DFE9;
  }

  .popover {
    position: absolute;
    top:0;
    left:0;
    z-index: 0;
  }

</style>
