<template>
    <div>
       <el-form ref="loginRules" :model="loginRules" :rules="rules" class="login">
           <h3>登录网易云账号</h3>
           <el-form-item prop="phone">
               <el-input v-model="loginRules.phone" placeholder="请输入手机号码"></el-input>
           </el-form-item>
           <el-form-item prop="password">
               <el-input type="password" v-model="loginRules.password" placeholder="请输入密码"></el-input>
           </el-form-item>
             <el-checkbox v-model="checked">记住我</el-checkbox>
               <el-button type="primary" class="login-go" @click="submitlogin">登录</el-button>
       </el-form>
    </div>
</template>

<script>
export default {
    name:"loginmu",
    data(){
        return{
            loginRules:{
                phone:'',
                password:''
            },
            checked:true,
            rules:{
                phone:[
                    {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'}
                    ]
            }
        }
    },
    methods:{
       submitlogin(){
           this.$refs.loginRules.validate((valid)=>{
               if(valid){
                  this.postRequest('/api/login/cellphone',{
                      phone:this.loginRules.phone,
                      password:this.loginRules.password
                      }).then(resp=>{
                      if(resp){
                          const tokenStr = 'Bearer' + resp.data.token;
                          window.sessionStorage.setItem('tokenStr', tokenStr);
                          this.$router.replace('/message');
                        // console.log(resp.data.profile.nickname);
                      }
                  })
               }else{
                   this.$message.error('这是错误信息');
                   return false;
               }
           })
       }
    }
  
 
}
</script>

<style src="../assets/css/loginblog.css" scoped>

</style>