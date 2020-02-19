<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
	components:{},

}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1459840 */
  src: url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.eot');
  src: url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1459840_ngdfsauihm.svg#iconfont') format('svg');
}
  .iconfont{
      font-family:"iconfont" !important;
      font-size:16px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;}
	body{width:100%;height:100%;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#333;height:100%;overflow: hidden;
  background-color: #EEEEEE;
  letter-spacing: 0.6px;
}

 *{  /*清除默认样式*/
        margin: 0; padding: 0; box-sizing: border-box; outline: 0;
    }
    html{  /*防止手机横屏显示网页时 自动改变字体的大小*/
        -webkit-text-size-adjust: 100%;
        width:100%;height:100%;
    }
    input,button{  /*防止按钮或文本框 在苹果手机上显示为圆角的 */
        -webkit-appearance: none; /*清除按钮默认显示的效果*/
        border-radius: 0; /*清除按钮默认的圆角*/
        border:1px solid #aaa;
        background-color: #fff;
    }
    a,img{  /*防止长时间触摸图片 或链接出现 浏览器的菜单*/
        -webkit-touch-callout: none;
    }
    a,button {  /*防止点击链接或按钮时 出现淡蓝色显示层*/
        -webkit-tap-highlight-color: transparent; text-decoration:none;color:#333;
    }
		ul, ol,li { list-style: none; }
		img{border:none;}
		table {border-collapse:collapse;border-spacing:0;}
		em{font-style:normal;}
		strong{font-weight:100;}
    i{font-style: normal;}






</style>
