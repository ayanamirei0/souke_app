<template>
	<div class="tabberWarp">
        <div class="item" v-for="(item, index) in tabList" :key="index" @click="changeTab(item, index)">
            <img :src="selected == item.name ? item.img : item.imgActive" alt="">
            <p :class="selected == item.name ? 'active' : 'normal'">{{item.text}}</p>
        </div>
	</div>
</template>
<script type="text/javascript">
export default {
	data: function() {
		return {
            selected: "Index",
			cache: "data",
			tabList: [
				{
					text: "首页",
					page: "/index",
                    name: "Index",
					img: require("../assets/img/home.png"),
					imgActive: require("../assets/img/home_.png")
				},
				{
					text: "搜课",
					page: "/SearchLessons",
                    name: "SearchLessons",
					img: require("../assets/img/search.png"),
					imgActive: require("../assets/img/search_.png")
				},
				{
					text: "消息",
					page: "/News",
                    name: "News",
					img: require("../assets/img/msg.png"),
					imgActive: require("../assets/img/msg_.png")
				},
				{
					text: "我的",
					page: "/mine",
                    name: "Mine",
					img: require("../assets/img/mine.png"),
					imgActive: require("../assets/img/mine_.png")
				}
			]
		}
    },
	created() {
        //  let index = sessionStorage.getItem(this.cache);
        let index = this.$route.name;
        console.log(index);
		this.selected = this.computedSelected(index);
    },
    // beforeRouteUpdate(to, from, next) {
    //     console.log(to);
    //     this.selected = to.name;
    //     next();
    // },
	methods: {
        computedSelected(index) {
            console.log(index);
            switch(index) {
                case "Index":
                case "SearchLessons":
                case "News":
                case "Mine":
                    return index
                default:
                    return "Index"
            }
        },
		changeTab(...arg) {
			let path = arg[0].page;
            console.log(arg[0].page);
			this.selected = arg[0].name;
            this.$router.push(path);
            //  sessionStorage.setItem(this.cache, arg[0].name);	
		}
    },
    watch: {    //当监听的数据为对象或数组时，newVal跟oldVal是想等的，因为这两个形参指的是同一个数据对象
        selected(newVal, oldVal) {
            console.log(newVal, oldVal);
            this.$router.replace({
                name: this.computedSelected(newVal)
            });
        },
        $route(to, from) {
            console.log(to, from, 'luyou');
            //  sessionStorage.setItem(this.cache, to.name);
            this.selected = to.name;
        }
    }
};
</script>
<style lang="less" scoped>
.tabberWarp{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    padding: .1rem 0 .1rem 0;
    border-top: 2px solid #e5e5e5; 
    .item{
        width: 1.5rem;
        p{
            font-size: .5rem;
            text-align: center;
            margin-top: -.3rem
        }
        .normal{
            color: #666666;
        }
        .active{
            color: #2FB3F1;
        }
    }
}
</style>


