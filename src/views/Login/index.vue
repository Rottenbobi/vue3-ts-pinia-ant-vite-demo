<template>
    <div class="max">
        <div class="login-box">
            <div class="left">
                <img src="@/img/login.jpg" alt="" class='img'>
            </div>
            <div class="right">
                <h3>
                    汇客CRM系统
                </h3>
                <!-- 验证 -->

                <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
                    @finishFailed="onFinishFailed">
                    <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
                        <a-input v-model:value="formState.username" placeholder="Basic usage">
                            <template #prefix>
                                <user-outlined type="user" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item name="password"
                        :rules="[{ required: true, message: 'Please input your password!' }]">
                        <a-input-password v-model:value="formState.password" placeholder="input password">
                            <template #prefix>
                                <lock-outlined />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item name="code" :rules="[{ required: true, message: 'Please input your uuid!' }]">
                        <div class="components-input-demo-presuffix">
                            <div class="yanzheng">
                                <a-row>
                                    <a-col :span="12">
                                        <a-input v-model:value="formState.code" size="small" placeholder="small size"
                                            class="yzm">
                                            <template #prefix>
                                                <verified-outlined />
                                            </template>
                                        </a-input>
                                    </a-col>
                                    <a-col :span="12">
                                        <img :src="yzmimg" @click="getyzm">
                                    </a-col>
                                </a-row>
                            </div>
                        </div>

                    </a-form-item>
                    <a-form-item>
                        <a-button  type="primary" html-type="submit" class="login-form-button">
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>
 
<script lang='ts' setup>
import { message } from 'ant-design-vue';
import { ref, reactive, watch } from 'vue'
import { UserOutlined, InfoCircleOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons-vue';
import { LoginStore } from "@/state/Login"
import {useRouter} from 'vue-router'
const Login = LoginStore()
const router = useRouter()
let yzmimg = ref('')

let formState = ref({
    username: 'admin',
    password: '123456',
    uuid: '',
    code:''
})
// 
const onFinish = async(values: any) => {
    // console.log('Success:',values);
    // console.log(formState.value)
    try {
       const res =  await Login.userLogin(formState.value)
    //    console.log(res)
       let a = Date.now(); 
       localStorage.setItem('time',a+'')
       Login.getToken(`${res.data.token}`)
    //    Login.getTime(a)
       router.push('/')
    } catch (error) {
        if(error instanceof Error){
            message.error(error.message)
        }
    }
};

const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
    message.error('输入有误')
};
const getyzm = async () => {
    const res = await Login.getimg()
    console.log(res);
    formState.value.uuid = res.data.uuid
    yzmimg.value = `data:image/gif;base64,${res.data.img}`
}
getyzm()


</script>
 
<style scoped>
.max {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eef7f2;
}

.login-box {
    display: flex;
    background-color: rgb(255, 255, 255);
    width: 886px;
    height: 426px;
    border-radius: 8px;
}

.left {
    width: 533px;
    height: 426px;
}

.img {
    width: 100%;
    height: 100%;
}

.right {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
}

h3 {
    font-weight: normal;
    margin-top: 35px;
    margin-bottom: 40px;
}

.ant-input-affix-wrapper {
    border: 0px;
    border-bottom: 1px solid #ccc;
    width: 300px;
    height: 50px;
    margin: 8px auto;
    margin-left: 18px;
}

.yzm {
    width: 135px;

}
</style>