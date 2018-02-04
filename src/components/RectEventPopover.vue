<template>
    <el-popover
      placement="bottom"
      :title="event.evetTitle"
      width="300"
      trigger="hover">
      <div :style="styleObject()"
        slot="reference"
      ></div>
      <a href="./#/edit_event" class="editEvent"><img  src="./../assets/edit.svg"/></a>
      <div class="eventSettings">
            {{contentDate}}, {{contentTimeStart}} &mdash; {{contentTimeEnd}} &middot; {{event.roomTitle}}
      </div>
      <div class="participants">
        <div class="participantImg">
          <img src="http://lorempixel.com/200/200/people"  width="100%" height="100%" >
        </div>
        {{event.firstUser.login}} и {{event.countUsers-1}} участников
      </div>
    </el-popover>
</template>

<script>
import moment from 'moment'
export default {
  name: 'RectEventPopover',
  props: ['event'],

  data () {
    return {
      coeff: 1
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
    getCoeff: function () {
      // console.log(document.querySelector('body').offsetWidth - 250)
      let RowContent = document.querySelector('.gridEvent')
      let widthRowContent = 1000
      if (RowContent) widthRowContent = RowContent.offsetWidth
      this.coeff = widthRowContent / 1000
      return widthRowContent / 1000
    },
    styleObject: function () {
      return {
        position: 'absolute',
        left: (this.event.xbegintime * this.getCoeff()) + 'px',
        top: '5px',
        width: (this.event.lengthevent * this.getCoeff()) + 'px',
        height: '30px',
        zIndex: 3,
        color: 'red'
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
