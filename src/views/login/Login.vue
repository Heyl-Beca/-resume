<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="rules" label-width="80px" size="medium">
      <el-form-item label="用户名" prop="username">
        <el-input @keyup.enter.native="login" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" id="primary" type="primary">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $ from 'jquery'
// import db from 'utils/db'
// import db from '@/interface/db'
export default {
  created () {
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '用户名长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    async login () {
      try {
        console.log(this.$refs.loginForm.validate())
        await this.$refs.loginForm.validate()
        // db.Login()
        // 校验成功  发送ajax
        // const res = await this.$axios.post('login', this.form)
        // console.log(res)
        // const { meta: { status, msg }, data } = res
        // if (status === 200) {
        //   this.$message({
        //     type: 'success',
        //     message: '登录成功',
        //     duration: 1000
        //   })
        //   // 把token存储起来
        //   localStorage.setItem('token', data.token)
        //   // 编程式导航
        //   this.$router.push({ name: 'index' })
        // } else {
        //   this.$message({
        //     type: 'error',
        //     message: msg,
        //     duration: 1500
        //   })
        // }
      } catch (e) {
        console.log(e)
      }
    },
    resetForm () {
      this.$refs.loginForm.resetField()
    }
  },
  mounted () {
    $('#primary')
    console.log()
  }
}
</script>

<style lang="less" scoped>
// $bgColor: #2d434c;
.login {
  width: 100%;
  height: 100%;

  display: flex;
  display: -webkit-flex; /* Safari */

  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  // background-color: #cccccc;
  overflow: hidden;
  .el-form {
    width: 400px;
  }
  .el-button {
    margin-left: 80px;
  }
}

</style>
