<template>
  <el-col :span="16">
    <div class="grid-content bg-purple">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户密码修改</span>
        </div>
        <div>
          <el-form label-width="80px" v-model="dataForm" size="small" label-position="right">
            <el-form-item label="用户id" prop="userId">
              <el-input  auto-complete="off" v-model="dataForm.userId"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
              <el-input auto-complete="off" v-model="dataForm.newPassword"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" @click="onchange">提交</el-button>
            <el-button size="mini" type="warning" @click="back" >关闭</el-button>
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
        userId: '',
        newPassword:'',
      }
    }
  },
  methods:{
    onchange() {
      const self = this;
      self.$axios({
        method: 'post',
        url: 'http://8.140.100.205:8090/api/user/modifyPassword',
        data: {
          userId: self.dataForm.userId,
          newPassword: self.dataForm.newPassword
        }
      })
      alert("修改成功！");
      self.$router.push('/userinfo');
    },
    back(){const self = this;
      self.$router.push('/userinfo');
    }
  }
}
</script>
