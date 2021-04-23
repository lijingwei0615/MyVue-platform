
<template>
  <el-container style="height:100%;width:100%;position:fixed;">
    <el-header style="padding:0;">
      <TopMenu></TopMenu>
    </el-header>
    <el-container style="height:calc(100% - 60px)">
      <el-aside style="background: rgb(72,89,209);"  width="200px">
        <LeftMenu></LeftMenu>
      </el-aside>
    <el-main style="background-color: #eeeeee;">
        <userinfo></userinfo>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>

import LeftMenu from "@/components/mainframe/LeftMenu";
import TopMenu from "@/components/mainframe/TopMenu";
import userinfo from "@/components/views/userinfo";

export default {
  name: "TEMPLATE",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    userinfo,
    LeftMenu,
    TopMenu
  }
}
</script>

<style scoped>

</style>
