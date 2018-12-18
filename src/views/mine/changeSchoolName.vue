<template>
    <div class="schoolName">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span class="title">修改学校名称</span>
            <span class="btn">保存</span>
        </div>
        <div class="content">
            <ul>
                <li class="title">1</li>
                <li class="item" v-for="(item, index1) in list1" @click="addClass1(index1)" :class="{selected: current1 == index1}">
                    {{item.title}}
                    <img src="../../assets/img/hook.png" v-show="index1 == current1">
                </li>
            </ul>
            <ul>
                <li class="title">2</li>
                <li class="item" v-for="(item, index2) in list2" @click="addClass2(index2)" :class="{selected: current2 == index2}">
                    {{item.title}}
                    <img src="../../assets/img/hook.png" v-show="index2 == current2">
                </li>
            </ul>
            <ul>
                <li class="title">B</li>
                <li class="item" v-for="(item, indexB) in listB" @click="addClassB(indexB)" :class="{selected: currentB == indexB}">
                    {{item.title}}
                    <img src="../../assets/img/hook.png" v-show="indexB == currentB">
                </li>
            </ul>
        </div>
        <p class="nav">1<br>2<br>B<br>C<br>D<br>E<br>G<br>H<br>J<br>K<br>L<br>M<br>N<br>Q<br>R<br>S<br>T<br>W<br>X<br>Y<br>Z</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current1: 0,
            current2: 0,
            currentB: 0,
            list1: [
                { title: '101中学' },
                { title: '105中学' }
            ],
            list2: [
                {title: '21世纪实验学校'}
            ],
            listB: [
                {title: '北大附中'},
                {title: '北大资源中学'},
                {title: '北航附中'},
                {title: '北师大三附中'},
                {title: '北外附中'},
                {title: '北医附中'}
            ]
        }
    },
    methods: {
        addClass1(index1){
            this.current1 = index1;
        },
        addClass2(index2){
            this.current2 = index2;
        },
        addClassB(indexB){
            this.currentB = indexB;
        }
    }
};
</script>

<style>
@import "../../assets/css/mine/changeSchoolName.css";
</style>

