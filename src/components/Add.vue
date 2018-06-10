<template>
  <div class="add">
  <Alert v-if="alert" :message="alert"></Alert>
    <h1>添加用户</h1>
    <form v-on:submit="addCustomer">
      <h4>用户信息</h4>
      <div>
        <label>姓名</label>
        <input type="text" v-model="customer.name">
      </div>
      <div>
        <label>电话</label>
        <input type="text" v-model="customer.phone">
      </div>
      <div>
        <label>邮箱</label>
        <input type="text" v-model="customer.emai">
      </div>
      <div><button type="submit">添加</button></div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer: {},
      alert:""
    }
  },
  components:{Alert},
  methods: {
    addCustomer (e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.emai) {
        this.alert="存在空值"
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          emai: this.customer.emai
        }
        this.$http.post('http://localhost:3000/users', newCustomer)
          .then(function (response) {
            console.log(response)
            this.$router.push({path: '/'})
          })
      }
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
