<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="ID"
        label="ID"
        width="100">
    </el-table-column>
    <el-table-column
        prop="csvID"
        label="文件ID"
        width="150">
    </el-table-column>
    <el-table-column
        prop="csvName"
        label="文件名"
        width="200">
    </el-table-column>
    <el-table-column
        prop="csvDir"
        label="所在文件夹"
        width="200">
    </el-table-column>
    <el-table-column
        prop="csvColumnNum"
        label="数据列数"
        width="200">
    </el-table-column>

    <el-table-column
        prop="csvRowNum"
        label="数据行数"
        width="200">
    </el-table-column>

    <el-table-column
        prop="csvLevel"
        label="文件开放等级"
        width="200">
    </el-table-column>
    <el-table-column
        prop="userID"
        label="用户ID"
        width="200">
    </el-table-column>
    <el-table-column
        prop="updateTime"
        label="更新时间"
        width="200">
    </el-table-column>
    <el-table-column
        prop="createTime"
        label="创建时间"
        width="200">
    </el-table-column>
    <el-table-column
        prop="editor"
        label="编辑器"
        width="200">
    </el-table-column>
    <el-table-column
        prop="creator"
        label="作者"
        width="200">
    </el-table-column>
    <el-table-column
        prop="powerLevel"
        label="用户拥有权限"
        width="200">
    </el-table-column>
  </el-table>


</template>

<script>



export default {

  data() {
    return {
      tableData: [{
        ID: '',
        csvID: '',
        csvName:'',
        csvDir:'',
        csvColumnNum:'',
        csvRowNum:'',
        userID:'',
        updateTime:'',
        createTime:'',
        editor:'',
        creator:'',
        powerLevel:'',

      }]
    }
  }
}
</script>

