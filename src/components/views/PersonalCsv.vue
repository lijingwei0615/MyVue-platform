
<template>
<div>
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
      tableData: [
        {
        csvId: null,
        csvName: 'test123',
        csvDir:'/fxq/ftpfile',
        csvLevel:'2',
        userId:'16301148',
        editor:null,
        creator:'fxq',
        powerLevel:'1'
        },
        {
        csvId: null,
        csvName: 'test123',
        csvDir:'/fxq/ftpfile',
        csvLevel:'2',
        userId:'16301148',
        editor:null,
        creator:'fxq',
        powerLevel:'1'
        }
      ]
    }
  },
  created() {
    let that=this;
    this.$axios.get('http://8.140.100.205:8090/CsvData/getPersonalCsv', {
    params: {
        userId: 16301148,
    }}).then(function(response){
      that.$set(that.tableData,0,response.data.data);
      // that.tableData=response.data.data;
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>