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
        <a class="removeEvent" @click="openMessageboxDelete"><img  src="./../assets/close.svg"/></a>
        <el-form ref="form" :model="form" label-width="100%" label-position="top" class="text-left">
          <el-row :gutter="10">
            <el-col :sm="11" :xs="24">
              <el-form-item label="Тема" >
                <el-input v-model="form.topic" ></el-input>
              </el-form-item>

            </el-col>
            <el-col :sm="{span:11, offset:2}" :xs="24">
              <el-row >
                <el-col :sm="12" :xs="24">
                  <el-form-item label="Дата">
                    <el-date-picker
                      v-model="form.currentDate"
                      type="date"
                      format="d MMMM, yyyy"
                      placeholder="">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :sm="{span:5 , offset:1}" :xs="11">
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
                <el-col  :sm="{span:5 , offset:1}" :xs="{span:11, offset:2}">
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
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :sm="11"  :xs="24">
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
            <el-col :span="2">
              <span></span>
            </el-col>
            <el-col  :sm="{span:11, offset:2}"  :xs="24">
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
          </el-row>
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
      let content = <div class="createMessage">
        <h2>Встреча создана <br/>14 декабря, 15:00—17:00<br/>Готем · 4 этаж</h2>
      </div>
      this.$alert(content, '', {
        confirmButtonText: 'Хорошо',
        center: true,
        callback: action => {
          this.$message({
            type: 'info',
            message: `action:${action}`
          })
        },
        showClose: false
      })
    },
    openMessageboxDelete () {
      // let title=<img  src="./../assets/edit.svg"/>
      let content = <div class="deleteMessage">
        <h2>Встреча будет <br/> удалена безвозвратно</h2>
      </div>

      this.$confirm(content, '', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
        center: true,
        showClose: false
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
    padding: 16px;
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

  .recommendations {
    width: 100%;
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

 .el-date-editor .el-input,.el-date-editor .el-input__inner {
    width: 180px;
  }

  .el-date-editor--time-select .el-input,.el-date-editor--time-select .el-input__inner {
    width: 72px;
  }

  .el-button+.el-button {
    margin: 5px 0;
  }

  .el-input--prefix .el-input__inner,
  .el-input--suffix .el-input__inner
  {
    padding: 0 10px;
  }

  .el-icon-time, .el-icon-date{
    display:none;
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

  .deleteMessage {
    padding-top: 60px;
    min-height: 40px;
    background: url("../assets/emoji1.svg") no-repeat center center;
  }

   .createMessage {
    padding-top: 100px;
    min-height: 40px;
    background: url("../assets/emoji2.svg") no-repeat center center;
  }

  @media (max-width: 767px) {
    .participant {
      position: relative;
      min-width: 100%;
      min-height: 32px;
    }
    .participantImg {
      width: 32px;
      height: 32px;
    }

    .participanttext {
       line-height: 32px;
    }

    .deleteParticipantBtn{
      position: absolute;
      right: 0;
      display: inline-block;
      line-height: 32px;
      padding: 0 10px;
      background: #e9ecef;
      border-radius: 12px;
      text-align: center;
    }
  }

</style>
