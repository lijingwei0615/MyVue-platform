<template>
  <div>
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

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      total: null,-->
<!--      tableData: [{-->
<!--        id: '1',-->
<!--        resourceId: '1',-->
<!--        bandwidth: null,-->
<!--        memory: null,-->
<!--        resourceLevel:null,-->
<!--        userId:null,-->
<!--        resourceName:'test',-->
<!--        resourceManager:'16301148',-->
<!--        resourceOwner:'16301148',-->
<!--        cpu:null,-->
<!--        ram:null,-->
<!--        os:null-->

<!--      }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  // methods: {-->
<!--  //   page(currentPage){-->
<!--  //     const _this = this-->
<!--  //     this.axios.get('http://8.140.100.205:8090/resource/updateResource'+currentPage+'/6',{-->
<!--  //       params: {-->
<!--  //         userId: 16301148,-->
<!--  //       }}).then( (res)=> {-->
<!--  //       _this.tableData = res.data.content-->
<!--  //       _this.total = res.data.totalElements-->
<!--  //     })-->
<!--  //   },-->
<!--  //   edit(row) {-->
<!--  //     this.$router.push({-->
<!--  //       path: '/update',-->
<!--  //       query:{-->
<!--  //         id: row.id-->
<!--  //       }-->
<!--  //     })-->
<!--  //   },-->
<!--  //   deletebook(row){-->
<!--  //     const _this = this-->
<!--  //     this.axios.delete('http://localhost:8181/book/deleteById/'+row.id).then( (res)=> {-->
<!--  //       _this.$alert('《'+row.name+'》删除成功！', '消息', {-->
<!--  //         confirmButtonText: '确定',-->
<!--  //         callback: action => {-->
<!--  //           window.location.reload()  //页面刷新-->
<!--  //         }-->
<!--  //       })-->
<!--  //     })-->
<!--  //   }-->
<!--  // },-->
<!--  created() {-->
<!--    this.$axios.get('http://8.140.100.205:8090/resource/showResource', {-->
<!--      params: {-->
<!--        userId: 16301148,-->
<!--      }}).then(function(response){-->
<!--      console.log(response.data.data);-->
<!--      this.tableData=response.data.data;-->
<!--    })-->
<!--        .catch(function(error){-->
<!--          console.log(error);-->
<!--        })-->
<!--  },-->

<!--}-->
<!--</script>-->
