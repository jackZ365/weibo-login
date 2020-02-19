<template>
  <div class="Foot">
    <!-- <h1>Foot</h1> -->
    <router-link to='/Home'><i class="iconfont">&#xe607;</i>首页</router-link>
    <router-link to=''><i class="iconfont">&#xe605;</i>视频</router-link>
    <router-link to='/'><i class="iconfont">&#xe601;</i>发现</router-link>
    <router-link to=''><i class="iconfont">&#xe622;</i>消息</router-link>
    <router-link to='/Mya'><i class="iconfont">&#xe6c7;</i>我</router-link>

  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
	.Foot{
		font-size:0.13rem;
		background:white;
		position:fixed;
		bottom:0;
		height:50px;width:100%;
		justify-content: space-around;
    display: flex;align-items: center;
    border-top: 1px solid #eee;
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
	}
  .Foot a{
    display: flex;flex-direction: column;align-items: center;position: relative;
  }
  em{
    position: absolute;top:0;right: 0;color: red;
  }

  i{
    display: inline-block;width: 26px;height: 20px;
    text-align: center;font-size: 20px;margin-bottom: 2px;
  }

</style>
