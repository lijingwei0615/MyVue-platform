<template>
  <div>
    <div class="title">
      获取数据列表接口
    </div>
    <div>
      <div class="search">
        <input v-model="keyword" type="text" class="searchInput"
               placeholder="搜索ID ">
        <el-button >搜索</el-button>
      </div>
    </div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          fixed
          prop="id"
          label="编号"
          width="150">
      </el-table-column>
      <el-table-column
          prop="resourceId"
          label="id"
          width="120">
      </el-table-column>
      <el-table-column
          prop="bandwidth"
          label="bandwidth"
          width="120">
      </el-table-column>
      <el-table-column
          prop="memory"
          label="memory"
          width="120">
      </el-table-column>
      <el-table-column
          prop="resourceLevel"
          label="resourceLevel"
          width="120">
      </el-table-column>
      <el-table-column
          prop="userId"
          label="userId"
          width="120">
      </el-table-column>
      <el-table-column
          prop="resourceName"
          label="resourceName"
          width="120">
      </el-table-column>
      <el-table-column
          prop="resourceManager"
          label="resourceManager"
          width="120">
      </el-table-column>
      <el-table-column
          prop="resourceOwner"
          label="resourceOwner"
          width="120">
      </el-table-column>
      <el-table-column
          prop="cpu"
          label="cpu"
          width="120">
      </el-table-column>
      <el-table-column
        prop="ram"
        label="ram"
        width="120">
    </el-table-column>
      <el-table-column
          prop="os"
          label="os"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deletebook(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        background
        layout="prev, pager, next"
        page-size="6"
        :total="total"
        @current-change="page"> <!--点击哪一页显示哪一页数据 通过@current-change来绑定-->
    </el-pagination>

  </div>
</template>

<script>
export default {
  data() {
    return {
      total: null,
      tableData: [{
        id: null,
        resourceId: null,
        bandwidth: null,
        memory: null,
        resourceLevel: null,
        userId: null,
        resourceName: 'test',
        resourceManager: '16301148',
        resourceOwner: '16301148',
        cpu: null,
        ram: null,
        os: null

      }
      ]
    }
  },

  created() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true,

    this.$axios.get('http://8.140.100.205:8090/api/resource/showResource', {
      params: {
        userId: 16301148,
      }}).then(function(response){
      console.log(response.data.data);
      this.$set(this.tableData,0,response.data.data);
    })
        .catch(function(error){
          console.log(error);
        })
  },

}
</script>

<style>
.title{
  text-align:center;
  font-size: 40px;
}

.search{
  width:50%;
  height :4rem;
  background: white;

}

.searchInput{
  width:70%;
  margin-top:.5rem;
  margin-left: 4%;
  line-height: 2rem;
  /*border: #ccc 1px solid;*/
  text-align: center;
  font-size: 18px;
}



</style>
