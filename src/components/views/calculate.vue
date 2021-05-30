<template>
  <div style="padding: 5px 20px;">
    <br>
    <el-form :inline="true" :model="listQuery" class="demo-form-inline">
      <el-form-item label="计算资源查询">
        <el-input v-model="listQuery.unit_name" placeholder="用户ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitSelect" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="TJCollectionForm" icon="el-icon-edit">添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格-->
    <el-table :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="用户ID" prop="resourceName" width="50" type="index">
      </el-table-column>
      <el-table-column label="用户等级" prop="resourceLevel">
      </el-table-column>
      <el-table-column label="CPU" prop="CPU">
      </el-table-column>
      <el-table-column label="Ram" prop="RAM">
      </el-table-column>
      <el-table-column label="内存" prop="memory">
      </el-table-column>
      <el-table-column label="操作系统" prop="OS">
      </el-table-column>
      <el-table-column label="bindwitdh" prop="带宽">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteVisible(scope)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
                   :page-sizes="[10]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"
                   :background="true">
    </el-pagination>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="collectionform" :rules="rules" :model="ruleForm" label-width="120px" label-position="left">
        <el-form-item label="用户ID" prop="id" v-if="dialogStatus=='create'">
          <el-input placeholder="用户ID" v-model="ruleForm.resourceName"></el-input>
        </el-form-item>
        <el-form-item label="用户等级" prop="level" v-if="dialogStatus=='create'">
          <el-input placeholder="用户等级" v-model="ruleForm.resourceLevel"></el-input>
        </el-form-item>
        <el-form-item label="CPU" prop="cpu">
          <el-input placeholder="CPU" v-model="ruleForm.CPU"></el-input>
        </el-form-item>
        <el-form-item label="RAM" prop="ram">
          <el-input placeholder="RAM" v-model="ruleForm.RAM"></el-input>
        </el-form-item>
        <el-form-item label="内存" prop="memory">
          <el-input placeholder="内存" v-model="ruleForm.memory"></el-input>
        </el-form-item>
        <el-form-item label="操作系统" prop="OS">
          <el-input placeholder="操作系统" v-model="ruleForm.OS"></el-input>
        </el-form-item>
        <el-form-item label="带宽" prop="Bindwitdh">
          <el-input placeholder="带宽" v-model="ruleForm.bindwitdh"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" v-if="dialogStatus=='create'" @click="submitCollectionForm('collectionform')">添 加</el-button>
        <el-button type="warning" v-else @click="updateCollectionForm('collectionform')">修 改</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
import {calculate} from "@/api/calculate"
export default {
  name: 'calculate',
  data() {
    return {
      listLoading: true,
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        unit_name: ''
      },
      dialogFormVisible: false,
      dialogStatus: 'create',
      textMap: {
        update: '修改用户计算资源',
        create: '添加用户计算资源'
      },

      ruleForm: {
        resourceName:'',
        resourceLevel:'',
        CPU:'',
        RAM:'',
        memory:'',
        OS:'',
        bindwitdh:'',

      },

      rules: {
        resourceName: [{
          required: true,
          message: '请输入用户ID',
          trigger: 'blur'
        }],
        resourceLevel: [{
          required: true,
          message: '请输入用户等级',
          trigger: 'blur'
        }],
        CPU: [{
          required: true,
          message: '请输入CPU',
          trigger: 'blur'
        }],
        RAM: [{
          required: true,
          message: '请输入RAM',
          trigger: 'blur'
        }],
        memory: [{
          required: true,
          message: '请输入内存',
          trigger: 'blur'
        }],
        OS: [{
          required: true,
          message: '请输入操作系统',
          trigger: 'blur'
        }],
        bindwitdh: [{
          required: true,
          message: '请输入带宽',
          trigger: 'blur'
        }]
      }
    }
  },
  created() {
    this.axiosdata()
  },
  methods: {
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.axiosdata();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.axiosdata();
    },
    onSubmitSelect() {
      this.axiosdata()
    },
    axiosdata() {
      this.listLoading = true;
      this.$axios({
        method: 'post',
        url: '/page/getHs_collection_unit',
        headers: {
          'token': this.$store.getters.token
        },
        data: this.listQuery
      }).then((response) => {
        this.listLoading = false;
        this.list = response.data.result.list;
        this.total = response.data.result.total;
      })
    },

    /* 添加表单*/
    TJCollectionForm() {
      /* 表单重置*/
      Object.assign(this.$data.ruleForm, this.$options.data().ruleForm);

      this.dialogStatus = "create"
      this.dialogFormVisible = true
    },
    /* 添加按钮*/
    submitCollectionForm(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/inserths_collection_unit',
            data: this.ruleForm
          }).then((response) => {
            if (response.data.resStatus.resCode == 0) {
              this.axiosdata();
              this.dialogFormVisible = false;
              this.$message.success('添加数据成功！');
            } else {
              this.$message.error('添加数据失败！');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 修改按钮*/
    updateCollectionForm(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/updatehs_collection_unit',
            data: this.ruleForm
          }).then((response) => {
            if (response.data.resStatus.resCode == 0) {
              this.axiosdata();
              this.dialogFormVisible = false;
              this.$message.success('修改数据成功！');
            } else {
              this.$message.error('修改数据失败！');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 删除按钮*/
    deleteVisible(scope) {
      this.$confirm('确定要删除【' + scope.row.unit_name + '】吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'post',
          url: '/deletehs_collection_unit',
          data: scope.row
        }).then((response) => {
          if (response.data.resStatus.resCode == 0) {
            this.axiosdata();
            this.dialogFormVisible = false;
            this.$message.error('删除完毕')
          } else {
            this.$message.error('删除数据失败！');
          }
        })
      });

    },
  },
}
</script>
