<template>
  <div class="customer">
    <h1>用户管理系统</h1>
    <input  type="text" placeholder="搜索" v-model="filterInput"/>
    <br>
    <table>
      <thead>
        <th>用户</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </thead>
    </table>
    <tbody>
      <tr v-for="(customer, index) in filterBy(customers,filterInput)" :key="index">
      <td>{{customer.name}}</td>
      <td>{{customer.phone}}</td>
      <td>{{customer.emai}}</td>
      <td>{{customer.id}}</td>
      <td><router-link :to="'/customer/'+customer.id">详情</router-link></td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: 'customer',
  data () {
    return {
      customers: [],
      filterInput:""
    }
  },
  methods: {
    fetchCustomers () {
      this.$http.get("http://localhost:3000/users")
        .then(function (response) {
          this.customers = response.body
        })
    },
    filterBy(customers ,value){
      return customers.filter(function(customer){
        return customer.name.match(value);
      })
    }
  },
  created () {
    this.fetchCustomers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
