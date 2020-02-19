<template>
  <div class="Home">
    <div class="login">
      <img src="../img/load.gif" />
      <span>登录中...</span>
    </div>

  </div>
</template>

<script>
  import Login from "@/components/Login";
  export default {
    name: 'Home',
    components:{Login},
    data () {
      return {

      }
    }

  }
</script>


<style scoped>
.Home{
  height: 100%;overflow: auto;font-size: 16px;
}
.login{
  text-align: center;padding: 15px;
  width: 100px;margin: auto;background: #fff;
  display: flex;flex-direction: column;justify-content: center;align-content: center;
  box-shadow: 0 0 15px #aaa;border-radius: 10px;
  position: absolute;z-index: 99;
  top:50%;left: 50%;transform: translate(-50%,-50%);
}
.login img{width: 100%;height: auto;margin-bottom: 5px;}

</style>
