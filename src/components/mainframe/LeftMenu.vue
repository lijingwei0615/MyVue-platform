import '../components/css/LeftMenu.css'
<template>
  <div>
    <el-menu
        @close="handleClose"
        @open="handleOpen"
        active-text-color="#ffd04b"
        background-color="rgb(72,89,209)"
        class="el-menu-vertical-demo"
        text-color="#FBFBFB"
        width="200px"
        router

>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/userinfo"><i class="el-icon-s-custom"></i>查看用户资料</el-menu-item>
        <el-menu-item index="/changeinfo"><i class="el-icon-menu"></i>修改用户信息</el-menu-item>
        <el-menu-item index="/changePassword"><i class="el-icon-menu"></i>修改密码</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item index="/components/views/userinfo">资源文件管理</el-menu-item>
        <el-menu-item index="/personalCsv"><i class="el-icon-menu"></i>郭源-接口8</el-menu-item>
        <el-menu-item index="/othersCsv"><i class="el-icon-menu"></i>郭源-接口9</el-menu-item>
        <el-menu-item index="3-2"><i class="el-icon-menu"></i>用户数据管理</el-menu-item>
        <el-menu-item index="3-2"><i class="el-icon-menu"></i>用户数据管理</el-menu-item>
        <el-menu-item index="3-3"><i class="el-icon-s-check"></i>参数数据管理</el-menu-item>
        <el-menu-item index="3-4"><i class="el-icon-s-claim"></i>系统日志管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>计算资源管理</span>
        </template>
        <el-menu-item index="/calculate"><i class="el-icon-s-custom"></i>接口12,10</el-menu-item>
        <el-menu-item index="/update"><i class="el-icon-menu"></i>接口11</el-menu-item>
        <el-menu-item index="/add"><i class="el-icon-s-check"></i>接口13</el-menu-item>
        <el-menu-item index="4-4"><i class="el-icon-s-claim"></i>系统日志管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>工作流引擎模块</span>
        </template>
        <el-menu-item index="5-1"><i class="el-icon-s-custom"></i>流程定义</el-menu-item>
        <el-menu-item index="5-2"><i class="el-icon-menu"></i>任务调度</el-menu-item>
        <el-menu-item index="5-3"><i class="el-icon-s-check"></i>参数定义</el-menu-item>
        <el-menu-item index="5-4"><i class="el-icon-s-claim"></i>数据绑定</el-menu-item>
        <el-menu-item index="5-5"><i class="el-icon-s-claim"></i>交互角色定义</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>业务流程管理</span>
        </template>
        <el-menu-item index="6-1"><i class="el-icon-s-custom"></i>平台接入申请</el-menu-item>
        <el-menu-item index="6-2"><i class="el-icon-menu"></i>平台接入审批</el-menu-item>
        <el-menu-item index="6-3"><i class="el-icon-s-check"></i>数据使用申请</el-menu-item>
        <el-menu-item index="6-4"><i class="el-icon-s-claim"></i>数据使用审批</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "TEMPLATE",
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
/deep/ .el-submenu__title {
  width: 200px;
}

/deep/ .el-menu-item-group__title {
  width: 200px;
}
</style>
