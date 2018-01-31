<template>
  <div class="wrap-table">
    <div class="listTableRow">
      <div class="tableRow tableTitleRow">
        <div class="tableRowTitle">
          <current-date/>
        </div>
        <div class="tableTitleRowContent">
          <grid-hours-title/>
        </div>
      </div>
      <div v-for="floor in listFloorWithRooms()" :key="floor">
        <div class="tableRow">
          <div class="tableRowTitle">
            <b>{{floor}} этаж</b>
            </div>
          <div class="tableRowContent">
            <grid-hours/>
        </div>
        </div>
        <div class="tableRow" v-for="room in getListRoomsForFloor(floor)" :key="room.roomId">
          <div class="tableRowTitle">
            <b>{{room.roomTitle}}</b> <br/>
            <span>3-6 человек</span>
          </div>
          <div class="tableRowContent">
            <row-chart :listDrawEvents="drawEventList(floor,room.roomId)"/>
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
                  'dataStart': '2018-01-30T08:00:00.165Z',
                  'dataEnd': '2018-01-30T09:00:00.165Z',
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
                  'dataStart': '2018-01-30T13:00:00.165Z',
                  'dataEnd': '2018-01-30T19:00:00.165Z',
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
                  'evenId': 1,
                  'eventTitle': 'Event 3',
                  'dataStart': '2018-01-30T09:05:00.165Z',
                  'dataEnd': '2018-01-30T10:18:00.165Z',
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
                  'evenId': 1,
                  'eventTitle': 'Event 1',
                  'dataStart': '2018-01-30T10:00:00.165Z',
                  'dataEnd': '2018-01-30T11:00:00.165Z',
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
                  'dataStart': '2018-01-30T16:15:00.165Z',
                  'dataEnd': '2018-01-30T18:00:00.165Z',
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
                  'evenId': 1,
                  'eventTitle': 'Event 3',
                  'dataStart': '2018-01-30T11:00:00.165Z',
                  'dataEnd': '2018-01-30T11:30:00.165Z',
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
                  'evenId': 1,
                  'eventTitle': 'Event 1',
                  'dataStart': '2018-01-30T11:10:00.165Z',
                  'dataEnd': '2018-01-30T11:45:00.165Z',
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
                  'dataStart': '2018-01-30T13:00:00.165Z',
                  'dataEnd': '2018-01-30T19:00:00.165Z',
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
                  'evenId': 1,
                  'eventTitle': 'Event 3',
                  'dataStart': '2018-01-30T09:20:00.165Z',
                  'dataEnd': '2018-01-30T10:00:00.165Z',
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
    listEvents: function (floor, roomId) {
      return this.getListRoomsForFloor(floor)
        .filter((room) => room.roomId === roomId)[0].listEvents
    },
    drawEventList: function (floor, roomId) {
      return this.listEvents(floor, roomId).map((event) => {
        let beginDate = new Date(event.dataStart)
        let endDate = new Date(event.dataEnd)
        return {
          eventId: event.eventId,
          xbegintime: 40 + (beginDate.getHours() - 8 - 3) * 60 + beginDate.getMinutes(),
          lengthevent: (endDate.getHours() - 8 - 3) * 60 + endDate.getMinutes() - (beginDate.getHours() - 8 - 3) * 60 - beginDate.getMinutes()
        }
      })
    }
  }
}
</script>
<style scoped>
  .wrap-chart {
    position: relative;
  }

  .listTableRow{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tableTitleRow{
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }

  .tableRow {
      display: flex;
      max-height: 46px;
      overflow:hidden;
    }

  .tableRowTitle {
    padding-left: 25px;
      min-width: 225px;
      max-width: 225px;
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
    min-width:700px;
    width:100%;
    background: #f6f7f9;
  }
</style>
