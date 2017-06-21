<template>
  <div class="wrap">
    <div class="forms">
      <h3 class="forms-title">点餐信息</h3>
      <div class="usr-con"><input type="text" v-model="formData.username" placeholder="请输入您的大名"></div>
      <div class="dinner-con"><input type="text" v-model="formData.food" placeholder="晚餐想吃什么"></div>
      <div class="dinner-type">
        <h3>口味</h3>
        <ul>
          <li v-for="(types, index) in dinnerTypes">
            <input type="radio" :id="'radio' + index" :checked="!index" name="dinnerType" v-model="formData.action" :value="types">
            <label :for="'radio' + index">{{ types }}</label>
          </li>
        </ul>
      </div>
      <div class="submit-btn" @click="submitData()">提交信息</div>
    </div>
    <v-inputText v-if="showinputText" :show-msg="Msg"></v-inputText>
  </div>
</template>
<script>
import vInputText from './inputText'
export default {
  name: 'forms',
  data () {
    return {
      formData: {username: '',food: '',action: '不辣', logintoken: this.$route.query.log, userid: this.$route.query.uid},
      dinnerTypes: ['不辣', '微辣', '中辣', '重口味'],
      isActive: false,
      Msg: '',
      showinputText: false
    }
  },
  components: {
    'v-inputText':vInputText
  },
  methods: {
    submitData () {
      if (this.formData.username == '') {
        this.Msg = '请输入您的大名'
        this.showinputText = true
        setTimeout(() => {
          this.showinputText = false
          this.Msg = ''
        },3000)
        return
      }
      if (this.formData.food == '') {
        this.Msg = '晚餐想吃什么'
        this.showinputText = true
        setTimeout(() => {
          this.showinputText = false
          this.Msg = ''
        },3000)
        return
      }
      this.$http.get('https://test.didi365.com/Gold/ddOrder/putddorder?callback=0', {params: this.formData})
        .then((res) => {
          if (res.data.status == 1) {
            console.log(res.data, this.formData)
            this.showMsg = res.data.data.info
            this.showinputText = true
            setTimeout(() => {
              this.showinputText = false
            },3000)
            this.formData = {username: '',food: '',action: '不辣', logintoken: this.$route.query.log, userid: this.$route.query.uid}
          } else {

          }
        })
        .catch(function (response) {
          console.log(JSON.stringify(response), 1)
        })
    }
  },
  created () {
    console.log(this.$route.query)
  },
  mounted () {

  }
}
</script>
<style lang="scss" scope>
@import '../assets/style.scss';
  .forms {
    text-align: left;
    padding: 1rem;
    .usr-con {
      padding: 1rem 0;
      @include border-1px (#999, '-bottom', 0);
      padding-left: 0.5rem;
    }
    .dinner-con {
      padding: 1rem 0;
      @include border-1px (#999, '-bottom', 0);
      padding-left: 0.5rem;
    }
    input {
      border: none;
      outline:none;
    }
    .dinner-type {
      margin: 1rem auto;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 30%;
          text-align: center;
          @include border-1px (#fe5e5e, '', 3px);
          padding: 0.6rem 0;
          border-radius: 5px;
          margin: 1rem 0;
          input[type="radio"] {
            display: none;
          }
          input[type="radio"]:checked + label {
            color: #fe5e5e;
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
      }
    }
    .submit-btn {
      width: 80%;
      background-color: #333;
      padding: 1rem;
      font-size: 1.6rem;
      margin: 1rem auto 0;
      text-align: center;
      color: #fff;
    }
    .active {
      color: #fe5e5e;
    }
  }
</style>

