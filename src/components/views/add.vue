<template>
  <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="用户ID" prop="resourceName">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="用户等级" prop="resourceLevel">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>

    <el-form-item label="CPU" prop="CPU">
      <el-input v-model="ruleForm.CPU"></el-input>
    </el-form-item>

    <el-form-item label="RAM" prop="Ram">
      <el-input v-model="ruleForm.RAM"></el-input>
    </el-form-item>

    <el-form-item label="内存" prop="memory">
      <el-input v-model="ruleForm.memory"></el-input>
    </el-form-item>

    <el-form-item label="操作系统" prop="OS">
      <el-input v-model="ruleForm.OS"></el-input>
    </el-form-item>

    <el-form-item label="带宽" prop="bindwitdh">
      <el-input v-model="ruleForm.bindwitdh"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        author: ''
      },
      rules: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        author:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        CPU:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        RAM:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        memory:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        OS:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        bindwitdh:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        // if (valid) {
        //   axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
        //     if(resp.data == 'success'){
        //       _this.$alert('《'+_this.ruleForm.name+'》添加成功！', '消息', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //           _this.$router.push('/BookManage')
        //         }
        //       })
        //     }
        //   })
        // } else {
        //   return false;
        // }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

