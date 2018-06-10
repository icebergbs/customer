<template>
  <div class="update">
    <h1>编辑用户</h1>
    <form v-on:submit="updateCustomer">
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
      <div><button type="submit">修改</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'update',
  data () {
    return {
      customer: {}
    }
  },
   methods: {
    updateCustomer (e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.emai) {
        console.log('存在空值')
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          emai: this.customer.emai
        }
        console.log(this.$route.params.id)
        this.$http.put('http://localhost:3000/users/'+this.$route.params.id, updateCustomer)
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
