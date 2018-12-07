<template>
    <div class="box">
            <div class="h36"></div>
            <div class="Return"><a href="javascript:history.go(-1);"><img src="../assets/img/return.png"></a></div>
            <div class="column">完善信息</div>
            <div class="h36"></div>
            <div class="box-content">
                <form  @submit.prevent="submit">
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">学员姓名</div>
                        <div class="form-data fl w442"><input type="text" name="" v-model="StudentName" placeholder="请输入学员姓名"></div>
                    </div>
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">性别</div>
                        <div class="form-data fl w442">
                            <select name="" v-model="sexDefault">
                                <select-a v-for="(itme,key) in sex" :value="itme.value" :key="key" :content="itme.content"></select-a>
                            </select>
                        </div>
                    </div>
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">出生日期</div>
                        <div class="form-data fl w442">                            
                            <div class="csrq" @click="show = true;" :class="{ color999 : isActive }">{{value}}</div>
                        </div>
                    </div>
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">学校区域</div>
                        <div class="form-data fl w442">
                            <select name="" v-model="schoolAreaDefault">
                                <select-a v-for="(itme,key) in schoolArea" :key="key" :value="itme.value" :content="itme.content"></select-a>
                            </select>
                        </div>
                    </div>
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">学校名称</div>
                        <div class="form-data fl w442">
                            <select name="" v-model="SchoolNameDefault">
                                <select-a v-for="(itme,key) in SchoolName" :key="key" :value="itme.value" :content="itme.content"></select-a>
                            </select>
                        </div>
                    </div>
                    <div class="form-content clearfix">
                        <div class="form-text fl w130 h40 mr54">年级</div>
                        <div class="form-data fl w442">                            
                            <select name="" v-model="gradeDefault">
                            <select-a v-for="(itme,key) in grade" :key="key" :value="itme.value" :content="itme.content"></select-a>
                            </select>
                        </div>
                    </div>
                    <div class="h50"></div>
                    <div class="input-bnt"><button type="submit">提交</button></div>
                </form>
            </div>
            <van-popup v-model="show" position="bottom" :overlay="true">
                <van-datetime-picker  v-model="currentDate" @confirm="confirm" @cancel="cancel"  type="date"  :min-date="minDate"  :max-date="maxDate"/>
            </van-popup>
            
        </div>
      
       
</template>
<script>
import Vue from 'vue';
import { Toast , DatetimePicker , Popup } from 'vant';
Vue.use(Toast).use(DatetimePicker).use(Popup);
import selectA from './select'

export default {
    components:{
        selectA
    },
   data() {
    return {
        StudentName:"",
        schoolAreaDefault:"0",
        schoolArea:[
            { value: 0, content: '请选择学校区域' },
            { value: 1, content: '海淀区' },
            { value: 2, content: '朝阳区' }
        ],
        SchoolNameDefault:"0",
        SchoolName:[
            { value: 0, content: '请选择学校名称' },
            { value: 1, content: '海淀校区' },
            { value: 2, content: '花家地校区' }
        ],
        gradeDefault:"0",
        grade:[
            { value: 0, content: '请选择所在年级' },
            { value: 1, content: '一年级' },
            { value: 2, content: '二年级' }
        ],
        sexDefault:"0",
        sex:[
            { value: 0, content: '请选择您的性别' },
            { value: 1, content: '男' },
            { value: 2, content: '女' }
        ],
        minDate: new Date(1990, 1, 1),
        maxDate: new Date(),
        currentDate: new Date(),
        show: false,
        value:'请选择出生日期',
        isActive: true,
        //sex:"请选择您的性别",
    };
  }, 
  
    methods:{  
      
    confirm(value){                    
        let d = new Date(value);
        this.value=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.show=!this.show;
        this.isActive=!this.isActive;
    },
    cancel(){
        this.show=!this.show;
    },
    submit(){
        if(!this.StudentName){
            Toast('请输入学员姓名')
            return false
        }
        if(this.sexDefault==0){
            Toast('请选择您的性别')
            return false
        }
        if(this.schoolAreaDefault==0){
            Toast('请选择学校区域')
            return false
        }
        if(this.SchoolNameDefault==0){
            Toast('请选择学校名称')
            return false
        }
        if(this.gradeDefault==0){
            Toast('请选择所在年级')
            return false
        }
    }


    }
}
</script>