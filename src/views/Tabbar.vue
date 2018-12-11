<template>
	<div class="tabberWarp">
        <div class="item" v-for="(item, index) in tabList" :key="index" @click="changeTab(item, index)">
            <img :src="selected == index ? item.img : item.imgActive" alt="">
            <p :class="selected == index ? 'active' : 'normal'">{{item.text}}</p>
        </div>
	</div>
</template>
<script type="text/javascript">
export default {
	data: function() {
		return {
            selected: 0,
            selectArr: [0, 1, 2, 3],
			cache: "data",
			tabList: [
				{
					text: "首页",
					page: "/index",
					img: require("../assets/img/home.png"),
					imgActive: require("../assets/img/home_.png")
				},
				{
					text: "搜索",
					page: "/SearchLessons",
					img: require("../assets/img/search.png"),
					imgActive: require("../assets/img/search_.png")
				},
				{
					text: "信息",
					page: "/News",
					img: require("../assets/img/msg.png"),
					imgActive: require("../assets/img/msg_.png")
				},
				{
					text: "我的",
					page: "/mine",
					img: require("../assets/img/mine.png"),
					imgActive: require("../assets/img/mine_.png")
				}
			]
		}
	},
	created() {
		let index = sessionStorage.getItem(this.cache);
		switch (index) {
			case '0':
				this.selected = 0;
				break;
			case '1':
				this.selected = 1;
				break;
			case '2':
				this.selected = 2;
				break;
			case '3':
				this.selected = 3;
				break;
		}
    },
	methods: {
		changeTab(...arg) {
			let path = arg[0].page;
			this.selected = arg[1];
            this.$router.push(path);
            sessionStorage.setItem(this.cache, arg[1]);	
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
    padding: .3rem 0 .25rem 0;
    .item{
        width: 1.6rem;
        p{
            font-size: .55rem;
            text-align: center;
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


