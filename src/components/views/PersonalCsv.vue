
<template>
<div>
  <div class="title">
    获取个人为创建者的数据列表
  </div>
  <el-input v-model="searchkey" style="width: 130px;margin-right: 15px" placeholder="请输入内容"></el-input>
  <el-button type="primary">搜索</el-button>
  <el-table
      :data="this.tableData"
      style="width: 100%">

    <el-table-column
        prop="csvId"
        label="csvId"
        width="180">
    </el-table-column>
    <el-table-column
        prop="csvName"
        label="csv名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="csvDir"
        label="csvDir"
        width="180">
    </el-table-column>
    <el-table-column
        prop="userId"
        label="用户Id"
        width="180">
    </el-table-column>
    <el-table-column
        prop="editor"
        label="编辑者"
        width="180">
    </el-table-column>
    <el-table-column
        prop="creator"
        label="创建者"
        width="180">
    </el-table-column>
    <el-table-column
        prop="powerLevel"
        label="等级"
        width="150">
    </el-table-column>
  </el-table>
</div>
</template>


<script>

export default {

  data() {
    return {
      searchkey:'',
      tableData: [
        {
          csvId: null,
          csvName: 'test123',
          csvDir:'/fxq/ftpfile',
          csvLevel:'2',
          userId:'16301148',
          editor:null,
          creator:'fxq',
          powerLevel:'2'
        }


      ]
    }
  },
  created() {
    let that=this;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true,

    this.$axios.get('http://8.140.100.205:8090/api/CsvData/getPersonalCsv', {
    params: {
        userId: 16301148,
    },
      // 前端开关：浏览器是否读写cookie

    }).then(function(response){
      that.$set(that.tableData,0,response.data.data);
      // that.tableData=response.data.data;
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>
<style>
.title{
  text-align:center;
  font-size: 40px;
}
</style>
