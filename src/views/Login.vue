<template>
  <!-- 登录容器 -->
  <div class="login_container">
    <!-- 登录区域 -->
    <div class="login_box">
      <!-- 头像 -->
      <div class="avator_box">
        <img src="../assets/img/3.png" />
      </div>
      <!-- 表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
        class="login_Form"
      >
        <el-form-item prop="userId">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.userId"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>

        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
          <el-button type="primary" @click="registerForm('registerForm')"
          >注册</el-button
          >
          <el-button type="primary" @click="modifyForm('modifyForm')"
          >修改密码</el-button
          >

<!--          <el-button @click="resetForm('loginForm')">注册</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userId: '',
        password: '',
        //verifyCode: "",
      },

      loginRules: {
        userId: [
          {
            required: true,
            message: "Please enter your userId",
            trigger: "blur",
          },
          {
            min: 3,
            max: 9,
            message: "长度在 3 到 9 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter the password",
            trigger: "blur",
          },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        // verifyCode: [
        //   {
        //     required: true,
        //     message: "Please enter the verifyCode",
        //     trigger: "blur",
        //   },
        // ],
      },
    };
  },
  methods: {
    submitForm(formId) {
      let _this = this;
      this.$refs[formId].validate((valid) => {
        if (valid) {
          login(this.loginForm).then(function(response){

             if((response.data).stateCode==3000){
               alert("登录成功！");
               _this.$router.push('/main');
             }
             else if((response.data).stateCode==4002){
               alert("该用户不存在");
             }
             else if((response.data).stateCode==4000){
               alert("密码错误，请重新输入！");
             }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerForm(formId) {
      let _this = this;
      //this.$refs[formId].resetFields();
      _this.$router.push('/register');
    },
    modifyForm(formId) {
      let _this = this;
      //this.$refs[formId].resetFields();
      _this.$router.push('/modify');
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: aquamarine;
}
.login_box {
  width: 450px;
  height: 380px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avator_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: -65px auto;
    background-color: #ffffff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
  .login_Form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;

    .login_btn {
      display: flex;
      justify-content: center;
    }

    .verifyCode_box {
      display: flex;
      .verifyCode {
        width: 70%;
        justify-content: left;
      }

      .verifyCode_img {
        width: 30%;
        height: 45px;
        justify-content: flex-end;
      }
    }
  }
}
</style>
