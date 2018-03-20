<template>
  <div>
  	<div class="vip_content disflex border_bottom_ddd">
	<div class="left_head disflex width100 disflex_star">
		<div class="left_head_logo ">
			<img src="../assets/wx (2).jpg" >
		</div>		
		<div class="left_head_cusname ">
			<h2 class="username">Caffrey</h2> 
			<p>加入迈迅第 <b>1000</b> 天</p> 
		</div>
	</div>
	<div class="right_head disflex width100 disflex_align_center">
		<div class="vip_time width30">
			<p>2018-12-25 10:15:59</p>
			<p>到期时间</p>
		</div>
		<div class="vip_left_time width30">
			<p style='color:red;'>15天</p>
			<p>剩余天数</p>
		</div>
		<div class="vip_charge width40">
			续费会员
		</div>
	</div>
</div>
<div class="nav_tab width100 disflex">
	<a class="my_coloection">我的收藏</a>
	<a class="my_space">我的空间</a>
	<a class="my_list">帖子</a>
	<a class="my_setting">设置</a>
	<a class="newest">最新精华</a>
	<a class="newest_record">最新回复</a>
</div>
  </div>
  
</template>

<script>
import { Group, Cell, dateFormat  } from 'vux'
import Qs from 'qs'
export default {
  components: {
    Group,
    Cell
  },
  data() {
	return {
		cusdata: '5555555555'
	}
  },
  create () {
  },
  computed: {
  },
  watch: {

  },
  mounted: function () {
            	this.$vux.loading.show()
  	var nowdate = new Date().getTime()
  	var senddata = {'userId': '234', 'userName': 'admin', 'timestamp': nowdate, 'sign': '1232'}
  	this.$http.post('/api/auth/token', Qs.stringify(senddata), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
          		if (response.status === 200) {
          			console.log(response)
          		}
          	})
  },
  methods: {
  },
    beforeDestroy: function () {
  },
  destroyed: function () {
  }
}
</script>
<style scoped>
	@import '../assets/vip_remote.scss'
</style>