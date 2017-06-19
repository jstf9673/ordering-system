<template>
  <div>
    <ul class="recordList">
      <li v-for="items in datalist">
        <div class="usr-con">
          <p class="usrname">{{items.username}}</p>
          <p class="food">{{items.food}}</p>
          <p class="types">{{items.translate}}</p>
        </div>
        <div class="add_time">{{items.add_time}}</div>
      </li>
    </ul>
    <vue-loading v-if="loading" class="loads" type="spiningDubbles" color="#d9544e" :size="{ width: '5rem', height: '5rem' }"></vue-loading>
  </div>
</template>
<script>
import vueLoading from 'vue-loading-template'
export default {
  name: 'record',
  data () {
    return {
      datalist: [],
      loading: true
    }
  },
  components: {
    vueLoading
  },
  methods: {
    getData () {
      this.$http.get('https://test.didi365.com/Gold/ddOrder/record?callback=0')
        .then((res) => {
          if (res.data.status == 1) {
            setTimeout(() => {
              this.datalist = res.data.data
              this.loading = false
            }, 1500)
          }
        })
        .catch(function (response) {
          console.log(JSON.stringify(response), 1)
        })
    }
  },
  created () {
    this.getData()
  },
  mounted () {

  }
}
</script>
<style lang="scss" scope>
@import '../assets/style.scss';
  .recordList{
    text-align: left;
    li {
      padding: 1rem;
      overflow: hidden;
      @include border-1px (#999, '-bottom', 0);
      .usr-con {
        float: left;

      }
      .add_time {
        float: right;
      }
    }
  }
  .loads {
    margin-top: 2rem!important;
  }
</style>
