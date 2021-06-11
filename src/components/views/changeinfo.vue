<template>
  <el-col :span="16">
    <div class="grid-content bg-purple">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户资料修改</span>
        </div>
        <div>
          <el-form label-width="80px" v-model="dataForm" size="small" label-position="right">
            <el-form-item label="用户名" prop="username">
              <el-input  auto-complete="off" v-model="dataForm.username"></el-input>
            </el-form-item>
            <el-form-item label="用户Id" prop="userId">
              <el-input auto-complete="off" v-model="dataForm.userId"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-input  maxlength="18" v-model="dataForm.sex"></el-input>
            </el-form-item>
            <el-form-item label="职业" prop="post">
              <el-input auto-complete="off" v-model="dataForm.post"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input auto-complete="off" v-model="dataForm.age"></el-input>
            </el-form-item>
            <el-form-item label="公司名称" prop="companyName">
              <el-input auto-complete="off" v-model="dataForm.companyName"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" @click="onchange">提交</el-button>
            <el-button size="mini" type="warning" @click="back">关闭</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </el-col>
</template>


<script>

export default {
  data(){
    return{
      dataForm:{
        username: '',
        userId: '',
        sex:'',
        post:'',
        age:'',
        companyName:'',
      }
    }
  },
  methods:{
    onchange() {
      const self = this;
      self.$axios({
        method: 'post',
        url: 'http://8.140.100.205:8090/api/user/updateUserInfo',
        data: {
          username: self.dataForm.username,
          userId: self.dataForm.userId,
          sex: self.dataForm.sex,
          post: self.dataForm.post,
          age: self.dataForm.age,
          companyName: self.dataForm.companyName
        }
      })
      alert("修改成功！");
      self.$router.push('/userinfo');
    },
    back(){
      const self = this;
      self.$router.push('/userinfo');
    }

  }
}
</script>
