<template>
  <div class="Myd">
    <!-- <h1>Foot</h1> -->
    <img src="../img/my.jpg" />

    <div class="head">
      <div class="h-info">
        <div class="h-i-image"><img src="../img/q3.jpg" /></div>
        <div class="h-i-txt">
          <p>只有神知道的同人世界</p>  <span>简介：为什么是5张图？当然是为了逼死强迫症啊。</span>
        </div>
        <div class="h-i-ri">
          <i></i> <span>会员> </span>
        </div>
      </div>
      <div class="h-num">
        <div class="h-n-le"><span>168</span><em>微博</em></div>
        <div class="h-n-ce"><span>65</span><em>关注</em></div>
        <div class="h-n-ri"><span>102685</span><em>粉丝</em></div>
      </div>
    </div>
    <Foot/>
  </div>
</template>

<script>
import Foot from "@/components/Foot";
export default {
  name: 'Myd',
  components:{Foot},
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>
	.Myd{
    width: 100%;height: 100%;overflow: hidden;
		font-size:0.13rem;
		background:white;position: relative;
		
	}
  img{
    width: 100%;height: 100%;
  }
  .head{
    width: 100%;position: absolute;top: 49px;left: 0;
    background: white;
  }
  .h-info{
    display: flex;justify-content: space-between;align-items: center;
    border-bottom: 1px solid #eee;padding: 12px 15px;
  }
  .h-i-image{width: 55px;height: 55px;}
  .h-i-image img{width: 100%;min-height: 60px;border-radius: 50%;}
  .h-i-txt{width: 60%;}
  .h-i-txt p{font-size: 16px;margin-bottom: 3px;}
  .h-i-txt span{font-size: 12px;color:#999;      
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;}
  .h-i-ri{color:#F46200;}
  .h-i-ri i{
    display: inline-block;
    width: 20px;height: 20px;vertical-align: -3px;
    background: white url(../img/sss.svg) no-repeat -8px -529px/40px;
  }
  .h-num{
    display: flex;justify-content: space-between;align-items: center;
    padding: 12px 30px;
  }
  .h-num div{
    display: flex;flex-direction: column;align-items: center;justify-content: center;
  }
  .h-num em{color: #999;margin-top: 3px;}

</style>
