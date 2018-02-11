<template>
    <el-popover
      placement="bottom"
      :title="event.evetTitle"
      width="300"
      trigger="hover">
      <div :style="styleObject()"
            v-on:mouseover="rectMouseOver"
            v-on:mouseout="rectMouseOut"
            slot="reference"
      ></div>
      <a href="./#/edit_event" class="editEvent"><img  src="./../assets/edit.svg"/></a>
      <div class="eventSettings">
            {{contentDate}}, {{contentTimeStart}} &mdash; {{contentTimeEnd}} &middot; {{event.roomTitle}}
      </div>
      <div class="participants">
        <div class="participantImg">
          <img src='./../assets/avatar.jpg'  width="100%" height="100%" >
        </div>
        {{event.firstUser.login}} и {{event.countUsers-1}} участников
      </div>
    </el-popover>
</template>

<script>
import moment from 'moment'
export default {
  name: 'RectEventPopover',
  props: ['event', 'coeff'],

  data () {
    return {
    }
  },
  computed: {
    contentDate: function () {
      return moment(this.event.eventDateStart).locale('ru').format('D MMMM YYYY')
    },
    contentTimeStart: function () {
      return moment(this.event.eventDateStart).utcOffset(0).locale('ru').format('hh:mm')
    },
    contentTimeEnd: function () {
      return moment(this.event.eventDateEnd).utcOffset(0).locale('ru').format('hh:mm')
    }
  },
  methods: {
    rectMouseOver: function (ev) {
      ev.target.classList.add('event_hover')
    },
    rectMouseOut: function (ev) {
      ev.target.classList.remove('event_hover')
    },
    styleObject: function () {
      return {
        position: 'absolute',
        left: (this.event.xbegintime * this.coeff) + 'px',
        top: '5px',
        width: (this.event.lengthevent * this.coeff) + 'px',
        height: 28 * this.coeff + 'px',
        zIndex: 0
      }
    }
  }
}
</script>

<style>

  .popover {
    position: absolute;
    display: block;
  }
  .participantImg {
    width: 24px;
    height: 24px;
    float: left;
    overflow: hidden;
    border-radius: 50%;
  }

  .el-popover .el-popover__title {
    font-family: 'HelveticaNeue-Bold';
    font-size: 15px;
    color: #000000;
    letter-spacing: 0;
    line-height: 24px;
  }

  .eventSettings {
    margin-bottom: 20px;
  }
  .event_hover {
    background: #98A9B9;
  }

  .participants {
  }

  .editEvent{
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    min-width: 24px;
    max-width: 24px;
    min-height: 24px;
    max-height: 24px;
    background: #e9ecef;
    border-radius: 50%;
    text-align: center;
  }
  .editEvent:hover {
    background: #cccccc;
  }

  .editEvent img {
    width:10px;
    height:10px;
    margin-top: 7px;
  }

</style>
