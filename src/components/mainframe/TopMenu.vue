import userinfo from '@/components/views/userinfo';
<template>
  <div style="display:flex;flex-direction: row;justify-content: space-between;background-color: rgb(49,69,166);">
    <div style="height:60px;font-size: 18px;font-weight: bolder;color: gold;line-height: 60px;padding-left: 24px;margin-top:0px;">
      {{systemName}}
    </div>
    <div>
      <el-menu :default-active="$router"
               router
               background-color="rgb(49,69,166)"
               class="el-menu-demo"
               mode="horizontal"
               text-color="#ffffff"
      >
        <el-menu-item>
          <el-dropdown  @command="handleCommand">
            <div style="height:100%;">
              <i class="el-icon-user"></i>
              <span style="color:#fff">管理员</span>
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="userinfo">
                <span style="display:block;">查看用户资料</span>
              </el-dropdown-item>
              <el-dropdown-item command="changeinfo">
                <span style="display:block;">修改用户资料</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      systemName: '联邦学习平台后台管理系统',
    }
  },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style scoped>
</style>
