<template>
  <el-col :span="16">
    <div class="grid-content bg-purple">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户资料修改</span>
        </div>
        <div>
          <el-form label-width="80px" v-model="dataFrom" size="small" label-position="right">
            <el-form-item label="用户名" prop="username">
              <el-input  auto-complete="off" v-model="dataForm.username"></el-input>
            </el-form-item>
            <el-form-item label="用户Id" prop="userId">
              <el-input auto-complete="off" v-model="dataForm.userId"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-input  maxlength="18" v-model="dataForm.sex"></el-input>
            </el-form-item>
            <el-form-item label="职业" prop="post">
              <el-input auto-complete="off" v-model="dataForm.post"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input auto-complete="off" v-model="dataForm.age"></el-input>
            </el-form-item>
            <el-form-item label="公司名称" prop="companyName">
              <el-input auto-complete="off" v-model="dataForm.companyName"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary">提交</el-button>
            <el-button size="mini" type="warning" >关闭</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </el-col>
</template>


<script>

import {changeinfo} from "@/api/changeinfo";

export default {
  data(){
    return{
      dataForm:{
        username: 'mic',
        userId: '123',
        sex:'男',
        post:'123',
        age:'18',
        companyName:'555',
      }
    }
  }
}
</script>