
<template>
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

</template>


<script>
import {userinfo} from "@/api/userinfo";

export default {

  data() {
    return {
      tableData: [{
        username: '',
        userId: '',
        sex:'',
        post:'',
        age:'',
        companyName:'',

      }]
    }
  }
}
</script>