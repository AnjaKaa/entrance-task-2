<template>
  <el-container>
    <el-header >
      <el-col :span=24>
          <div class="grid-content text-left">
            <img class="logo" src="./../assets/logo.svg"/>
            </div>
          </el-col>
    </el-header>
    <el-main>
      <el-row class='rowContainer'>
        <h2 class="text-left">Новая встреча</h2>
        <el-form ref="form" :model="form" label-width="100%" label-position="top" class="text-left">
          <el-col :span=11>
            <el-form-item label="Тема" >
              <el-input v-model="form.topic" ></el-input>
            </el-form-item>
            <el-form-item label="Участники" >
              <el-select v-model="form.participants" filterable placeholder="Например, Тор Одинович" >
                <el-option
                  v-for="item in form.optionsSelect"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <div class="participantImg">
                    <img src='./../assets/avatar.jpg' width="100%" height="100%" :alt="item.value">
                  </div>
                  <span style="float: left">{{ item.value }}</span>
                  <span style="float: left; color: #8492a6; font-size: 13px"> &middot; {{ item.floor }} этаж</span>
                </el-option>
              </el-select>
            </el-form-item>
            <span class="participant">
              <div class="participantImg">
                <img src='./../assets/avatar.jpg' width="100%" height="100%" alt="user1">
              </div>
              <span class="participanttext">user1</span>
              <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
            </span>
            <span class="participant">
              <div class="participantImg">
                <img src='./../assets/avatar.jpg' width="100%" height="100%"  alt="user2">
              </div>
              <span class="participanttext">user2asdfg</span>
              <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
            </span>
            <span class="participant">
              <div class="participantImg">
                <img src='./../assets/avatar.jpg' width="100%" height="100%"  alt="user3">
              </div>
              <span class="participanttext">user3qwerty</span>
              <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
            </span>
           </el-col>
          <el-col :span=11 :offset=2>

            <a class="removeEvent" @click="openMessageboxDelete"><img  src="./../assets/close.svg"/></a>
            <el-row >
              <el-col :span=12 >
                <el-form-item label="Дата">
                  <el-date-picker
                    v-model="form.currentDate"
                    type="date"
                    format="d MMMM, yyyy"
                    placeholder="">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span=5 :offset=1>
                <el-form-item label="Начало">
                  <el-time-select
                  v-model="form.timeStart"
                  :picker-options="{
                    start: '08:00',
                    step: '00:05',
                    end: '18:30'
                  }"
                  placeholder="">
                  </el-time-select>
                </el-form-item>
              </el-col>
              <el-col :span=5 :offset=1>
                 <el-form-item label="Конец">
                  <el-time-select
                    v-model="form.timeEnd"
                    :picker-options="{
                      start: '08:05',
                      step: '00:15',
                      end: '18:30'
                    }"
                    placeholder="">
                  </el-time-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="Рекомендованные переговорки">
              <el-radio-group v-model="form.choiceRoom">
                 <el-radio-button
                  v-for="item in form.choiceRoom"
                  :key="item.key"
                  style="width:100%;"
                 >
                 <b>{{item.time}}</b>
                 {{item.label}} &middot; {{item.floor}} этаж
                 </el-radio-button>

              </el-radio-group>
            </el-form-item>
          </el-col>

        </el-form>
      </el-row>
    </el-main>
    <el-footer>
      <a href="./">
        <el-button >
          Отмена
        </el-button>
      </a>
      <el-button type="primary" v-on:click="openMessageboxOk">
        Создать встречу
      </el-button>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'AddEvent',
  data () {
    return {
      form: {
        topic: '',
        participants: '',
        currentDate: '',
        timeSart: '',
        timeEnd: '',
        optionsSelect: [
          {
            value: 'User1',
            label: 'User1',
            floor: '7',
            avatrUrl: './../assets/avatar.jpg'
          }, {
            value: 'User2',
            label: 'User2',
            floor: '3',
            avatrUrl: './../assets/avatar.jpg'
          }, {
            value: 'User3',
            label: 'User3',
            floor: '9',
            avatrUrl: './../assets/avatar.jpg'
          }
        ],
        choiceRoom: [
          {
            key: '1',
            label: 'Готем',
            time: '16:00-16:30',
            floor: '4'
          },
          {
            key: '2',
            label: 'Поле непаханное',
            time: '16:00-16:30',
            floor: '4'
          },
          {
            key: '3',
            label: 'Темная башня',
            time: '16:00-16:30',
            floor: '4'
          }
        ]
      }
    }
  },
  methods: {
    openMessageboxOk () {
      this.$alert('This is a message', 'Title', {
        confirmButtonText: 'Хорошо',
        center: true,
        callback: action => {
          this.$message({
            type: 'info',
            message: `action:${action}`
          })
        }
      })
    },
    openMessageboxDelete () {
      // let title=<img  src="./../assets/edit.svg"/>
      let content = 'Встреча будет удалена безвозвратно'

      this.$confirm(content, '', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>
<style scoped>
  .rowContainer {
    max-width: 800px;
    margin:auto;
  }

  .participant {
    display: inline-block;
    margin: 5px;
    max-height: 24px;
    line-height: 24px;
    background: #e9ecef;
    border-radius: 12px;
  }
  .participantImg {
    width: 24px;
    height: 24px;
    float: left;
    overflow: hidden;
    border-radius: 50%;
  }

  .participanttext {
    padding: 5px;
  }

  .deleteParticipantBtn{
    display: inline-block;
    padding: 0 5px;
    background: #e9ecef;
    border-radius: 12px;
    text-align: center;
  }

  .el-date-editor .el-input,.el-date-editor .el-input__inner {
    width: 180px;
  }

  .el-date-editor--time-select .el-input,.el-date-editor--time-select .el-input__inner {
    width: 72px;
  }

  .recommendations {
    width: 100%;
    margin: 5px 0;
  }

  .el-button+.el-button {
    margin: 5px 0;
  }

  .removeEvent{
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

  .removeEvent:hover {
    background: #cccccc;
  }

  .removeEvent img {
    width:10px;
    height:10px;
    margin-top: 7px;
  }

  .el-select  {
    min-width: 100%;
  }

  .el-icon-time, .el-icon-date{
    display:none;
  }

  .el-input--prefix .el-input__inner{
    padding: 0 10px;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:100%;
  }

  .el-form-item__label {
    font-weight: bold;
  }

  .el-radio-button .el-radio-button__inner,
  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    display: block;
    min-width: 100%;
    margin-bottom: 5px;
    text-align: left;
    color:#000;
    background-color: #E9ECEF;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: none;
  }

  .el-radio-button.is-focus .el-radio-button__inner{
    color: #fff;
    background-color: #007DFF;
  }

  .el-message-box__message p {
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    line-height: 24px;
  }

</style>
