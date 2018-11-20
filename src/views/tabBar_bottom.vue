<template>
    <div class="home">
        <ul class="bottom">
            <li v-for="(item, index) in list" :key="index" @click="switchNav(index)">
                <span>{{item}}</span>
                <!-- v-for 渲染，没啥可说的，key一般都要声明，基本上都是数据的id，你可以看看我那些文件里的vue文件 -->
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "bottom-nav",
  props: {
    // 这个props主要用来声明被传入的值的类型和名称
    list: {
      // 名称
      type: Array, // 类型
      default() {
        // 默认值
        return [];
      }
    },
    str: {
      // 同理
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    //   方法都写这里面
    switchNav(data) {
      // data 是传入的值 就是数组的下标 0,1,2,3 一共就4个
      //  往外值，下面把这个index带出去  记住 sendMessage这个和外面父组件要保持一样,不然找不到
      this.$emit("sendMessage", data);
    }
  },
  components: {},
  watch: {
    list(v) {
      console.log(v); // 这个是监听属性，主要监听异步数据
    }
  },
  computed: {},
  created() {
    //   console.log(this.list) 本地数据初始化钩子就能打印出来
  },
  beforeDestroy() {}
};
</script>
