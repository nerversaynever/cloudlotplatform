<template>
	<!-- <a-locale-provider :locale="locale"> -->
	<div id="app">
		<router-view />
	</div>
	<!-- </a-locale-provider> -->
	<!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>
<script>
	/* import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN' */
	export default {
		data() {
			return {
				//locale: zhCN
			}
		},
		mounted() {

		}
	}
</script>
<style>
	#app {
		height: 100%;
	}
	/*flex 布局*/
	
	.flex {
		display: -webkit-box !important;
		display: -webkit-flex !important;
		display: -ms-flexbox !important;
		display: flex !important;
	}
	
	
	/*垂直显示*/
	
	.flex-v {
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	
	.flex-1 {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow: hidden
	}
	
	.flex-2 {
		-webkit-box-flex: 2;
		-webkit-flex: 2;
		-ms-flex: 2;
		flex: 2;
		overflow: hidden
	}
	
	
	/*垂直对其方式*/
	
	.flex-align-center {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	
	/*左右居中*/
	
	.flex-pack-center {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	
	/*两端对齐*/
	
	.flex-pack-justify {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
</style>
