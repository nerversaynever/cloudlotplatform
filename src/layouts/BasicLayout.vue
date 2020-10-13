<template>
	<a-layout id="components-layout-demo-fixed">
		<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',paddingLeft:0 }">
			<div class="logo" style="width: 200px;float: left;text-align: center;" >
				<img src="@/assets/logo.png" alt="logo" style="width: 46px;height: 46px;" /> 
			</div>
			<ul  class="headMenu" :style="{ lineHeight: '64px' }">
				<li class="active">Home</li>
				<li>About</li>
				<!-- <li>
					<router-link to="/">Home</router-link>
					<router-link to="/About">测试</router-link>
				</li> -->
			</ul>
			<!-- <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']" :style="{ lineHeight: '64px' }">						
				<a-menu-item key="1">
					<router-link to="/">Home</router-link>
				</a-menu-item>
				<a-menu-item key="2">
					<router-link to="/about">About</router-link>
				</a-menu-item>
			</a-menu> -->
		</a-layout-header>
		<div class="iframebox">
			<!-- <div v-for="(item,index) in visitedViews" :key="item.path" v-show="activeView == item.path">
			</div> -->
			<a-layout class="layout flex">
				<div style="position: relative; height: 100%;" class="flex-1">
					<a-layout class="main">
						<a-layout-sider v-model="collapsed" collapsible>
							<a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
								<a-menu-item key="1">
									<a-icon type="pie-chart" />
									<span>Option 1</span>
								</a-menu-item>
								<a-menu-item key="2">
									<a-icon type="desktop" />
									<span>Option 2</span>
								</a-menu-item>
								<a-sub-menu key="sub1">
									<span slot="title">
										<a-icon type="user" /><span>User</span></span>
									<a-menu-item key="3">
										Tom
									</a-menu-item>
									<a-menu-item key="4">
										Bill
									</a-menu-item>
									<a-menu-item key="5">
										Alex
									</a-menu-item>
								</a-sub-menu>
								<a-sub-menu key="sub2">
									<span slot="title">
										<a-icon type="team" /><span>Team</span></span>
									<a-menu-item key="6">
										Team 1
									</a-menu-item>
									<a-menu-item key="8">
										Team 2
									</a-menu-item>
								</a-sub-menu>
								<a-menu-item key="9">
									<a-icon type="file" />
									<span>File</span>
								</a-menu-item>
							</a-menu>
						</a-layout-sider>
						<a-layout>
							<!-- <a-layout-header style="background: #fff; padding: 0" /> -->
							<a-layout-content style="margin: 0 16px">
								<a-breadcrumb style="margin: 16px 0">
									<a-breadcrumb-item>User</a-breadcrumb-item>
									<a-breadcrumb-item>Bill</a-breadcrumb-item>
								</a-breadcrumb>
								<div :style="{ padding: '24px', background: '#fff' }">
									<transition name="page-transition">
										<route-view />
									</transition>
								</div>
							</a-layout-content>
							<!-- <a-layout-footer style="text-align: center">
								Ant Design ©2018 Created by Ant UED
							</a-layout-footer> -->
						</a-layout>
						<!-- <iframe :src="item.path+'?menuId='+item.id+(item.routerpath||'')" class="iframe" frameborder="0" scrolling="none"
						 :id="'iframe'+item.permission" :ref="'iframe'+item.permission">
					
						</iframe> -->
					</a-layout>
				</div>

			</a-layout>

		</div>
	</a-layout>
</template>
<script>
	import RouteView from './RouteView'
	export default {
		components: {
			RouteView
		},
		data() {
			return {
				collapsed: false,
			}
		}
	}
</script>
<style lang="less">
	//@import url('../components/global.less');

	/*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */
	.iframebox {
		position: absolute;
		top: 64px;
		left: 0;
		right: 0;
		bottom: 0;
		box-sizing: border-box;
	}

	.iframebox>div {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.iframebox>div iframe {
		border: none;
		height: 100%;
		width: 100%;
		overflow: auto;
	}
	.layout {
		position: fixed;
		/*top: 54px; */
		top: 64px;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.headMenu{
		float: left;
		padding-left: 0;
		li{
			list-style: none;
			float: left;
			color: #fff;
			padding: 0 10px;
			cursor: pointer;
			
		}
		li.active{
			color:#00aaff;
		}
	}
	.ant-layout {
		// height: 100%;
		/* width: 100%;
		background: #f0f2f5;
		position: relative; */
	
		.header {
			height: 34px;
			line-height: 34px;
			padding: 0 12px 0 0;
			background: #fff;
			box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 999;
	
			.logo {
				// background: #001529;
				width: 160px;
				text-align: left;
				color: #2c3e50;
	
				img {
					width: 30px;
				}
	
				span {
					visibility: visible;
					color: #fff;
				}
			}
	
			.action {
				.avatar {
					margin-right: 5px;
					// margin: 10px 8px 10px 0;
					color: #1890ff;
					background: hsla(0, 0%, 100%, 0.85);
					vertical-align: middle;
				}
	
				.user-name {
					color: #fff;
				}
			}
		}
	
		.main {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			height: auto;
			text-align: left;
			overflow: auto;
			.ant-layout-sider{
				position: relative;
				overflow: hidden;
				height: 100%;
				.ant-layout-sider-children{
					width: 100%;
					    top: 0;
					    bottom: 0;
						padding-bottom: 48px;
					    margin-top: -0.1px;
					    padding-top: 0.1px;
					    position: absolute;
					    overflow: auto;
				}
				.ant-layout-sider-trigger{
					width: 200px;
					position: absolute;
					bottom: 0;
					z-index: 1;
					height: 48px;
					color: #fff;
					line-height: 48px;
					text-align: center;
					background: #002140;
					cursor: pointer;
					transition: all 0.2s;
				}
			}
		}
	}
	
	.ant-layout .trigger {
		font-size: 20px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		-webkit-transition: color 0.3s;
		transition: color 0.3s;
	}

	.page-transition-enter {
		opacity: 0;
	}

	.page-transition-leave-active {
		opacity: 0;
	}

	.page-transition-enter .page-transition-container,
	.page-transition-leave-active .page-transition-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
