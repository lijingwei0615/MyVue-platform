<template>
  <div class="back">
    <el-button :span="8" type="primary"  class="add-btn" plain>查询</el-button>
    <el-input :auto-complete="off" placeholder="请输入内容"  style="width: 50%">
    </el-input>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="username"
          label="用户名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="userId"
          label="用户id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="100">
      </el-table-column>
      <el-table-column
          prop="post"
          label="职业"
          width="180">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="100">
      </el-table-column>

      <el-table-column
          prop="companyName"
          label="公司名称"
          width="500">
      </el-table-column>


    </el-table>
  </div>


</template>


<script>
import {userinfo} from "@/api/userinfo";

export default {

  data() {
    return {
      tableData: [{
        username: 'Feixiuqing',
        userId: '16301148',
        sex:'female',
        post:'teacher',
        age:'77',
        companyName:'bejing university',

      }]
    }
  },
  created() {

    this.$axios.get('http://8.140.100.205:8090/api/user/getUserInfo', {
      params: {
        userId: 16301148,
      }}).then(function(response){
      console.log(response.data.data);
      this.tableData=response.data.data;
    })
        .catch(function(error){
          console.log(error);
        })
  }

}
</script>
