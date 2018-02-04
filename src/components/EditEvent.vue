<template>
  <el-container>
    <el-header >
      <el-col :span="24">
          <div class="grid-content text-left">
            <img class="logo" src="./../assets/logo.svg"/>
            </div>
          </el-col>
    </el-header>
    <el-main>
      <el-row class='rowContainer'>
        <h2 class="text-left">Редактирование встречи</h2>
        <el-form ref="form" :model="form" label-width="100%" label-position="top" class="text-left">
          <el-col span="10">
            <el-form-item label="Тема" >
              <el-input v-model="form.topic" ></el-input>
            </el-form-item>
            <el-form-item label="Участники" >
              <el-input v-model="form.participants" placeholder="Например, Тор Одинович" ></el-input>
            </el-form-item>
          <span class="participant">
            <div class="participantImg">
              <img src='http://lorempixel.com/200/200/people' width="100%" height="100%" alt="user1">
            </div>
            <span class="participanttext">user1</span>
            <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
          </span>
          <span class="participant">
            <div class="participantImg">
              <img src='http://lorempixel.com/250/250/people' width="100%" height="100%"  alt="user2">
            </div>
            <span class="participanttext">user2</span>
            <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
          </span>
          <span class="participant">
            <div class="participantImg">
              <img src='http://lorempixel.com/300/300/people' width="100%" height="100%"  alt="user3">
            </div>
            <span class="participanttext">user3</span>
            <a class="deleteParticipantBtn"><img  src="./../assets/close.svg"/></a>
          </span>
           </el-col>
          <el-col span="10" offset="2">
            <el-row >
              <el-col span="12" >
                <el-form-item label="Дата">
                  <el-date-picker
                    v-model="form.currentDate"
                    type="date"
                    placeholder="">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col span="6">
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
              <el-col span="6">
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
              <el-button class='recommendations' type="info" plain>Вариант1</el-button>
              <el-button class='recommendations' type="info" plain>Вариант2</el-button>
              <el-button class='recommendations' type="info" plain>Вариант3</el-button>
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
      <a href="./">
        <el-button type="primary">
          Создать встречу
        </el-button>
      </a>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'EditEvent',
  data () {
    return {
      form: {
        topic: '',
        participants: '',
        currentDate: '',
        timeSart: '',
        timeEnd: ''
      }
    }
  }
}
</script>
<style>
  .rowContainer {
    max-width: 900px;
    margin:auto;
  }

  .participant {
    display: inline-block;
    margin-right: 10px;
    max-height: 24px;
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
</style>
