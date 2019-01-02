<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive> 
    <Tabbar v-if="$route.meta.tabShow"></Tabbar>  
  </div>
</template>

<script>
import Vue from 'vue';
import Tabbar from "./views/tabbar";
import { head } from './assets/js/head.js';
import 'vant/lib/index.css';
export default {
  name: 'App',
  data(){
    return{testvaleu: ''}
  },
  methods:{
  diyfun(){
    head();
  }
  },
  components: {
    Tabbar
  }

}
</script>

<style>
@import "./assets/css/common/goole.css";
@import "./assets/css/common/css.css";
</style>
