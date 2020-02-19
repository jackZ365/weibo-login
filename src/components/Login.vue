<template>
  <div class="Login">
    <router-link to="/"><h4 class="head"> ✖ </h4></router-link>
    
    <div class="logo">
      <div class="logo-image"><img src="../img/logo.svg"></div>
      <p class="logo-title">登录微博</p>
      <p class="logo-subhead">分享生活 发现世界</p>
    </div>
    <div class="phone">
      <span>+86 ∨</span>
      <!-- 只能输入纯数字-->
      <input type="number" onkeyup="this.value=this.value.replace(/\D/g,'')"
             onafterpaste="this.value=this.value.replace(/\D/g,'')" placeholder="请输入手机号" />
    </div>
    <div class="btn">
      <button class="btn-code">获取验证码</button>
      <button class="btn-num">用账号密码登录</button>
      <span>手机号已更换</span>
    </div>
    <div class="foot">
      <div class="foot-top"><span>其他登录方式</span><i></i></div>
      <div class="foot-icon">
        <i class="iconfont" style="color:#2DC245 ;">&#xe637;</i>
        <i class="iconfont" style="color:#1988F9 ;">&#xe611;</i>
      </div>
      <div class="foot-bo">登录注册表示同意<span>用户协议、隐私条款</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components:{},
    data () {
      return {

      }
    }

  }
</script>


<style scoped>
.Login{
  position: relative;
  height: 100%;overflow: auto;font-size: 16px;padding: 0 20px;background: white;
}
.head{font-size: 20px;margin-top: 15px;}
.logo{text-align: center;margin-top: 30px;}
.logo-image{}
.logo-image img{width: 80px;}
.logo-title{font-weight: 600;margin-top: 5px;}
.logo-subhead{font-size: 14px;color: #999;margin-top: 5px;}
.phone{margin-top: 50px;border-bottom: 1px solid #eee;}
.phone input{border:none;padding: 10px 0;padding-left: 10px;}
.btn{margin-top: 30px;}
.btn button{width: 100%;height: 35px;line-height: 35px;font-weight: 600;}
.btn-code{background: #fe8100;border: none;color: white;border-radius: 30px;}
.btn-num{background: white;border:1px solid #fe8100;
  border-radius: 30px;margin-top: 15px;color: #fe8100;
}
.btn span{
  float: right;font-size: 13px;color: #4a7aaa;margin-top: 15px;
}
.foot{
  width: 100%;padding: 0 20px;
  position: absolute;bottom: 0;left: 0;
  text-align: center;font-size: 14px;color: #555;
}
.foot-top{position: relative;height: 20px;}
.foot-top span{
  background: white;padding: 0 12px;
  z-index: 1;
  position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);
}
.foot-top i{
  width: 100%;height: 1px;background: #eee;
  display: inline-block;position: absolute;z-index: 0;
  top:50%;left: 50%;transform: translate(-50%,-50%);
 }
 .foot-icon{margin-top: 15px;}
 .foot-icon i:first-child{margin-right: 40px;font-size: 25px;}
 .foot-icon i{font-size: 25px;}
.foot-bo{margin: 30px 0;font-size: 12px;}
.foot-bo span{color: #4A7AAA;}





</style>
