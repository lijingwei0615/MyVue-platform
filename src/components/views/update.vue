<template>

  <el-form style="width: 100%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div class="title">
      修改数据列表接口
    </div>
    <el-form-item label="Id" prop="id">
      <el-input v-model="ruleForm.id"></el-input>
    </el-form-item>

    <el-form-item label="Name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: '',
        name: '',
        //author: ''
      },
      rules: {
        id: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        // author:[
        //   { required: true, message: '作者不能为空', trigger: 'blur' }
        // ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        // if (valid) {
        //   axios.put('http://localhost:8181/book/update',this.ruleForm).then(function(resp){
        //     if(resp.data == 'success'){
        //       _this.$alert('《'+_this.ruleForm.name+'》修改成功！', '消息', {
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
  },
  // created() {
  //   const _this = this
  //   //axios.get('http://localhost:8181/book/findById/'+this.$route.query.id).then( (res)=> {
  //     //_this.ruleForm = res.data
  //   //}
  //   )
  // }
}
</script>

<style scoped>

.title{
  text-align:center;
  font-size: 40px;
}
</style>
