
<template>
  <el-table
      :data="tableData"
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

</template>


<script>

export default {

  data() {
    return {
      tableData: [{
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
    this.$axios.get('http://8.140.100.205:8090/CsvData/getOtherCsv', {
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