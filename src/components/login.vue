<template>
  <div>
    <div class="bodyContent">
      <group>
           <x-input title="用户名：" v-model="username"></x-input>
           <x-input title="密码：" v-model="password"></x-input>
      </group>
      <x-button type="primary"  @click.native="posttojava">登陆</x-button>
    </div>
    <div id="scriptLoad"></div>
  </div>
  
</template>

<script>
import { Group, Cell, dateFormat, XInput,XButton   } from 'vux'
import Qs from 'qs'
import $ from 'expose-loader?$!jquery'
export default {
  components: {
    Group,
    Cell,
    XInput,
    dateFormat,
    XButton 
  },
  data() {
  return {
    cusdata: '5555555555',
    username: '',
    password: ''
  }
  },
  create () {
  },
  computed: {
  },
  watch: {

  },
  mounted: function () {
    console.log($)
  },
  methods: {
    posttojava () {
          var nowdate = new Date().getTime()
          var senddata = {'username': this.username, 'password': this.password}
          this.$http.post('api/auth/login', Qs.stringify(senddata), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
              if (response.status === 200) {
                console.log(response.data)
                $('#scriptLoad').append(response.data)
              }
            })
    }
  },
    beforeDestroy: function () {
  },
  destroyed: function () {
  }
}
</script>
<style scoped>
  /*@import '../assets/vip_remote.scss';*/
</style>