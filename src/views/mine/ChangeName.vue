<template>
	<div class="ChangeName">
		<div class="top">
			<i
			 class="iconfont icon-fanhui"
			 @click="$router.go(-1)"
			></i>
			<p>修改学员信息</p>
		</div>
		<div class="main">
			<p class="top_tip">为了让老师更好的了解你，请输入真是姓名</p>
			<div class="input">
				<input type="text" placeholder="请输入学员姓名" v-model="student_input">
			</div>
			<p class="btn" :class="student == true ? 'active' : 'normal'">提交</p>
			<p>注意：学员姓名一个月只可修改一次</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			student_input: "",
			student: false
		};
	},
	methods: {
		
    },
    watch: {
        student_input() {
            if(this.student_input != '') {
                this.student = true;
            }else{
                this.student = false;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.ChangeName {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: @common_bg_color;
	.top {
		position: relative;
		padding: 0.65rem 0 0.6rem;
		border-bottom: 1px solid #f4f4f4;
		background-color: #ffffff;
		.icon-fanhui {
			position: absolute;
			top: 0.65rem;
			left: 1%;
			font-size: 1.1rem;
			color: #333333;
		}
		p {
			font-size: 0.8rem;
			color: #333333;
			text-align: center;
		}
	}
	.main {
		p {
			color: #666666;
			font-size: 0.6rem;
			text-align: center;
		}
		.top_tip {
			margin: 0.8rem 0 0.7rem 0;
		}
		.input {
			input {
				padding: 0.725rem 0 0.625rem 0;
                width: 100%;
                font-size: .7rem;
                text-indent: .5rem;
                color: #000000;
			}
			input::-webkit-input-placeholder {
				color: #999999;
				font-size: 0.7rem;
			}
		}
		.btn {
			width: 15.6rem;
			height: 2rem;
			border-radius: 1rem;
			color: #ffffff;
			font-size: 0.8rem;
			margin: 1.35rem auto 0.6rem auto;
			line-height: 2rem;
			text-align: center;
        }
        .active {
            background-color: #2fb3f1;
        }
        .normal {
            background-color: #EBEBEB;
        }
	}
}
</style>


