<template>
  <div class="wrap-table">
    <div class="listTableRow">
      <div class="tableRow tableTitleRow">
        <div class="tableRowTitle">
          <current-date :currentDate="currentDate"/>
          <div class="calendar">
            <el-date-picker
              v-model="currentDate"
              format="d MMMM, yyyy"
              type="date"
              placeholder="выберите дату">
            </el-date-picker>
            <el-button type="primary" v-on:click="hiddenCalendar">OK</el-button>
          </div>
        </div>
        <div class="tableTitleRowContent">
          <grid-hours-title/>
        </div>
      </div>
      <a href="./#/add_event" class="rowAddButton">
        <el-button type="primary" >+</el-button>
      </a>
      <div v-for="floor in listFloorWithRooms()" :key="floor">
        <div class="tableRow">
          <div class="tableRowTitle titleFloor">
            <b>{{floor}} этаж</b>
            </div>
          <div class="tableRowContent">
            <grid-hours/>
        </div>
        </div>
        <div class="tableRow" v-for="room in getListRoomsForFloor(floor)" :key="room.roomId">
          <div class="tableRowTitle titleRoom">
            <b>{{room.roomTitle}}</b> <br/>
            <span>{{room.capacity}}</span>
          </div>
          <div class="tableRowContent">
            <row-chart :listDrawEvents="drawEventList(floor,room.roomId)" :roomTitle="room.roomTitle"/>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>
<script>
import GridHours from './GridHours'
import GridHoursTitle from './GridHoursTitle'
import CurrentDate from './CurrentDate'
import RowChart from './RowChart'
export default {
  name: 'Chart',
  data () {
    return {
      currentDate: new Date(),
      allEvents: [
        {'numberFloor': 7,
          'listRooms': [
            {
              'roomId': 1,
              'roomTitle': 'Ржавый джо',
              'capacity': '3-6',
              'listEvents': [
                {
                  'evenId': 1,
                  'eventTitle': 'Event 1',
                  'dateStart': '2018-02-04T08:00:00.165Z',
                  'dateEnd': '2018-02-04T09:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                },
                {
                  'evenId': 2,
                  'eventTitle': 'Event 2',
                  'dateStart': '2018-02-04T13:00:00.165Z',
                  'dateEnd': '2018-02-04T19:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                },
                {
                  'evenId': 11,
                  'eventTitle': 'Event 11',
                  'dateStart': '2018-02-04T19:00:00.165Z',
                  'dateEnd': '2018-02-04T20:59:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            },
            {
              'roomId': 3,
              'roomTitle': 'Прачечная',
              'capacity': '10',
              'listEvents': [
                {
                  'evenId': 4,
                  'eventTitle': 'Event 3',
                  'dateStart': '2018-02-04T09:05:00.165Z',
                  'dateEnd': '2018-02-04T10:18:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {'numberFloor': 6,
          'listRooms': [
            {
              'roomId': 4,
              'roomTitle': 'Джокер',
              'capacity': '3-6',
              'listEvents': [
                {
                  'evenId': 5,
                  'eventTitle': 'Event 4',
                  'dateStart': '2018-02-04T10:00:00.165Z',
                  'dateEnd': '2018-02-04T11:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                },
                {
                  'evenId': 6,
                  'eventTitle': 'Event 5',
                  'dateStart': '2018-02-04T16:15:00.165Z',
                  'dateEnd': '2018-02-04T18:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            },
            {
              'roomId': 3,
              'roomTitle': 'Мариванна',
              'capacity': '10',
              'listEvents': [
                {
                  'evenId': 7,
                  'eventTitle': 'Event 6',
                  'dateStart': '2018-02-04T11:00:00.165Z',
                  'dateEnd': '2018-02-04T11:30:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                },
                {
                  'evenId': 8,
                  'eventTitle': 'Event 7',
                  'dateStart': '2018-02-04T15:00:00.165Z',
                  'dateEnd': '2018-02-04T16:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            },
            {
              'roomId': 5,
              'roomTitle': 'Тонкий боб',
              'capacity': '3-6',
              'listEvents': [
                {
                  'evenId': 9,
                  'eventTitle': 'Event 8',
                  'dateStart': '2018-02-04T11:10:00.165Z',
                  'dateEnd': '2018-02-04T11:45:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                },
                {
                  'evenId': 10,
                  'eventTitle': 'Event 9',
                  'dateStart': '2018-02-04T13:00:00.165Z',
                  'dateEnd': '2018-02-04T19:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            },
            {
              'roomId': 6,
              'roomTitle': 'Белорусский ликер',
              'capacity': '10',
              'listEvents': [
                {
                  'evenId': 11,
                  'eventTitle': 'Event 10',
                  'dateStart': '2018-02-04T09:20:00.165Z',
                  'dateEnd': '2018-02-04T10:00:00.165Z',
                  'participants': [
                    {
                      'id': 1,
                      'login': 'user1',
                      'homeFloor': '10',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 2,
                      'login': 'user2',
                      'homeFloor': '3',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    },
                    {
                      'id': 3,
                      'login': 'user3',
                      'homeFloor': '7',
                      'avatarUrl': 'http://lorempixel/200/200/people'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    GridHours,
    GridHoursTitle,
    CurrentDate,
    RowChart
  },
  computed: {

  },
  methods: {
    listFloorWithRooms: function () {
      return this.allEvents.map((item) => item.numberFloor)
    },
    getListRoomsForFloor: function (numberFloor) {
      return this.allEvents.filter((item) => item.numberFloor === numberFloor)[0].listRooms || []
    },
    getListRoomsAll: function () {
      let res = []
      this.allEvents.forEach((item) => { res = res.concat(item.listRooms) })
      return res
    },
    getTitleRoom: function (id) {
      let list = this.getListRoomsAll()
      return list.find((item) => item.roomId === id).roomTitle
    },
    listEvents: function (floor, roomId) {
      return this.getListRoomsForFloor(floor)
        .filter((room) => room.roomId === roomId)[0].listEvents
    },
    drawEventList: function (floor, roomId) {
      return this.listEvents(floor, roomId).map((event) => {
        let beginDate = new Date(event.dateStart)
        let endDate = new Date(event.dateEnd)
        return {
          eventId: event.eventId,
          evetTitle: event.eventTitle,
          eventDateStart: event.dateStart,
          eventDateEnd: event.dateEnd,
          firstUser: event.participants.length ? event.participants[0] : null,
          countUsers: event.participants.length,
          roomId: roomId,
          roomTitle: this.getTitleRoom(roomId),
          xbegintime: 40 + (beginDate.getHours() - 8 - 3) * 60 + beginDate.getMinutes(),
          lengthevent: (endDate.getHours() - 8 - 3) * 60 + endDate.getMinutes() - (beginDate.getHours() - 8 - 3) * 60 - beginDate.getMinutes()
        }
      })
    },
    hiddenCalendar: function (ev) {
      let calendar = document.querySelector('.calendar')
      calendar.classList.remove('calendarShow')
    }
  },
  mounted: function () {
    setInterval(() => {
      if (document.querySelector('.listTableRow')) {
        let listTitle = document.querySelectorAll('.tableRowTitle b')
        let scroll = document.querySelector('.listTableRow').scrollLeft

        if (scroll > 181) {
          listTitle.forEach((title) => {
            title.classList.add('fixed')
          })
        } else {
          listTitle.forEach((title) => {
            title.classList.remove('fixed')
          })
        }
      }
    }, 1000)
  }
}
</script>
<style scoped>
  .wrap-table {
    position: relative;
  }

  .listTableRow{
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
      overflow-x: auto;
  }

  .tableTitleRow{
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }

  .titleFloor{
    padding-top: 20px;
    font-size: 13px;
    color: #858E98;
  }

  .tableRow {
      display: flex;
      max-height: 46px;
      overflow:hidden;
      min-width: 1225px;
    }

  .tableRowTitle {
    padding-left: 25px;
      min-width: 225px;
      max-width: 225px;
      min-height: 44px;
      text-align: left;
      margin: auto;
  }

  .tableTitleRowContent{
    min-width:700px;
    width:100%;
    background: #ffffff;
  }

  .tableRowContent{
    position: relative;
    width:100%;
    background: #f6f7f9;
  }

  .rowAddButton {
    display: none;
    padding:  0;
    margin: 0;
    font-size: 20px;
    position: absolute;
    z-index: 1000;

  }

  .rowAddButton button{
    max-height: 30px;
    line-height: 30px;
    padding:  0 20px;
    margin: 0;
    font-size: 20px;
  }

  .calendar{
    position: absolute;
    display: none;
    top: 50px;
    left: 20px;
    width: 300px;
    height: 70px;
    z-index: 200;
    background: #ffffff;
    border:5px solif #eee;
    border-radius: 10px;
  }

  .calendarShow{
    display: block;
  }

  @media (max-width: 767px) {
    .tableTitleRow {
      min-height: 88px;
    }
    .tableTitleRow .tableRowTitle {
      position: fixed;
      min-width: 80vw;
      padding: 0 10vw;
      z-index: 200;
    }

   .tableTitleRow .tableTitleRowContent{
     margin-top: 44px;
     padding-left: 181px;
     max-height: 32px;
     border-top: 1px solid #eee;
   }

   .tableRowTitle {
     padding-left: 16px;
     max-width: 165px;
     min-width: 165px;

   }

   .titleRoom b.fixed{
      position: fixed;
      z-index: 200;
      background: #fff;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 3px 3px 10px #ccc;
    }

    .titleFloor b.fixed{
      position: fixed;
      z-index: 200;
    }
  }

</style>
