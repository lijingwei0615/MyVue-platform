<template>
  <div class="login-register">

    <div class="contain">
      <div class="big-box" :class="{active:isLogin}">
        <div class="big-contain" v-if="!isLogin">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="email" placeholder="用户ID" v-model="form.useremail">
            <span class="errTips" v-if="emailError">* 用户ID填写错误 *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd">
            <span class="errTips" v-if="emailError">* 密码填写错误 *</span>
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>
        <div class="big-contain" v-else>
          <div class="btitle">创建账户</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.username">
            <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd">
            <input type="email" placeholder="公司名称" v-model="form.companyName">
            <input type="email" placeholder="性别" v-model="form.sex">
            <input type="email" placeholder="职业" v-model="form.post">
            <input type="email" placeholder="年龄" v-model="form.age">
            <input type="email" placeholder="用户类型" v-model="form.userType">
          </div>
          <button class="bbutton" @click="register">注册</button>
        </div>
      </div>
      <div class="small-box" :class="{active:isLogin}">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">你好，朋友!</div>
          <p class="scontent">开始注册，和我们一起旅行</p>
          <button class="sbutton" @click="changeType">登录</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">欢迎回来!</div>
          <p class="scontent">与我们保持联系，请登录你的账户</p>
          <button class="sbutton" @click="changeType">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'login-register',
  data(){
    return {
      isLogin:false,
      emailError: false,
      passwordError: false,
      existed: false,
      form:{
        username:'',
        userpwd:'',
        companyName:'',
        sex:'',
        post:'',
        age:'',
        userType:''
      }
    }
  },
  methods:{
    changeType() {
      this.isLogin = !this.isLogin
      this.form.username = ''
      this.form.useremail = ''
      this.form.userpwd = ''
    },

    login() {
      const self = this;
      if (self.form.useremail != "" && self.form.userpwd != "") {
        var jsonStr1={
          "userId": self.form.useremail,
          "password": self.form.userpwd
        }
        self.$axios({
          //async: false,
          url: 'http://8.140.100.205:8090/api/user/login',
          method: 'POST',


          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          },

          //dataType: 'json',
          params : jsonStr1,}).then(function(response){

              if((response.data).stateCode==3000){
                alert("登录成功！");
                self.$router.push('/layout');
              }
              else if((response.data).stateCode==4002){
                alert("该用户不存在");
              }
              else if((response.data).stateCode==4000){
                alert("密码错误，请重新输入！");
              }
            });
      } else{
        alert("填写不能为空！");
      }
    },
    register(){
      const self = this;
      if(self.form.username != ""  && self.form.userpwd != ""){
        self.$axios({
          method:'post',
          url: 'http://8.140.100.205:8090/api/user/register',
          data: {
            username: self.form.username,
            password: self.form.userpwd,
            companyName: self.form.companyName,
            sex: self.form.sex,
            post: self.form.post,
            age: self.form.age,
            userType: self.form.userType
          }
        })
            .then(function(response){

              if((response.data).stateCode==3000){
                alert("注册成功！");
                self.$router.push('/login');
              }
              else if((response.data).stateCode==4002){
                alert("该用户已存在");
              }
              else if((response.data).stateCode==4000){
                alert("注册失败");
              }
            });

      } else {
        alert("填写不能为空！");
      }
    }
  }
}
</script>



<style scoped="scoped">
.login-register{
  width: 100vw;
  height: 100vh;
  background: url("../../../src/images/LoginBackground.jpeg");
  box-sizing: border-box;
}
.contain{
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0,
  0 0 6px #f0f0f0;
}
.big-box{
  width: 70%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.big-contain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btitle{
  margin-top: 50px;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(255,255,255);
}
.bform{
  width: 100%;
  height: 80%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips{
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input{
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.bbutton{
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(72,89,209);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.small-box{
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg,rgb(72,89,209),rgb(56,183,145));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.stitle{
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent{
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton{
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active{
  left: 0;
  transition: all 0.5s;
}
.small-box.active{
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
