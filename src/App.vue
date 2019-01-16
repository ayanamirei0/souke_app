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
@import "./assets/css/common/goole.css";
@import "./assets/css/common/css.css";
</style>
