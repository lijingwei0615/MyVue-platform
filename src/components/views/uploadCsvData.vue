<template>
  <el-form>



    <el-form-item>
      <el-upload ref="up_file"
                 style="display: inline"
                 :auto-upload="false"
                 :on-change="handleChange"
                 :file-list="fileList"
                 action="#">
        <el-button  type="success">选择文件</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button  type="success" @click="upload">点击上传</el-button>
    </el-form-item>
  </el-form>

</template>

<script>

export default {
  name:'upload',
  data(){
    return{
      name:'',
      fileList:[]
    }
  },
  methods:{
    //通过onchanne触发方法获得文件列表
    handleChange(file, fileList) {
      this.fileList = fileList;
      console.log(fileList)
    },
    upload(){

      let fd = new FormData();
      fd.append("name",this.name);
      this.fileList.forEach(item=>{
        //文件信息中raw才是真的文件
        fd.append("files",item.raw);
        //console.log(item.raw)
      })
      this.$axios.post('/uploadUi',fd).then(res=>{
        if (res.data.code === 200) {
          //console.log(res);
          this.$message('上传成功')
        }else{
          this.$message('失败')
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
