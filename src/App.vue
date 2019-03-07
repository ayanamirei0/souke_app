<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import Vue from "vue";
import Tabbar from "./views/tabbar";
import { head } from "./assets/js/head.js";
import "vant/lib/index.css";
export default {
	name: "App",
	data() {
		return { testvaleu: "" };
	},
	methods: {
		diyfun() {
			head();
		}
	}
};
</script>

<style>

/* 
	@author: lihongliang
	@date: 2019年3月7日 16:06:33 
	@Description: 这个项目由我开始，却不能由我来亲手将它结束，真的是非常的遗憾。毕竟这个项目给与我好多不同的意义，这大概是我最后一次在巨人教育维护这个项目了，希望这个项目可以有人可以接手把它接着完成，				  谢谢完成的那个人。

 */
@import "./assets/css/common/goole.css";
@import "./assets/css/common/css.css";
</style>
