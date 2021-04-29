//register组件
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="新密码" prop="newPassword">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
<!--    <el-form-item label="密码" prop="password">-->
<!--      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>-->
<!--    </el-form-item>-->
    <el-form-item label="用户ID" prop="userId">
      <el-input v-model.number="ruleForm.userId"></el-input>
    </el-form-item>
<!--    <el-form-item label="公司名称" prop="companyName">-->
<!--      <el-input v-model="ruleForm.companyName"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="性别" prop="sex">-->
<!--      <el-input v-model="ruleForm.sex"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="职业" prop="post">-->
<!--      <el-input v-model="ruleForm.post"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="年龄" prop="age">-->
<!--      <el-input v-model="ruleForm.age"></el-input>-->
<!--    </el-form-item>-->


    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">修改密码</el-button>

      <!--     <el-button @click="resetForm('ruleForm')"></el-button>&ndash;&gt;-->
    </el-form-item>
  </el-form>
</template>




<script>

import {modify} from "@/api/modify";

export default {

  name: "Register",
  data() {
    return {
      activeName: 'second',
      ruleForm: {
        //username: '',
        newPassword: '',
        userId: '',
        // companyName: '',
        // sex: '',
        // post: '',
        // age: '',
      },
      rules: {

        pass: [
          //{ required: true, validator: validatePass, trigger: 'blur' }
        ],
        userId:[
          { required: true, message: '请输入您的ID', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个整数', trigger: 'blur' }
        ],


      }
    };
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.$message({
    //         type: 'success',
    //         message: '注册成功'
    //       });
    //       // this.activeName: 'first',
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
    submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.ruleForm).then(function(response){

            if((response.data).stateCode==3000){
              alert("注册成功！");
              _this.$router.push('/login');
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
  }
}
</script>

