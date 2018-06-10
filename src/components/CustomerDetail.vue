<template>
  <div class="customerdetail">
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple"> 
        <router-link to="/">返回主页</router-link>
         <router-link :to="'/edit/'+customer.id">编辑</router-link>
         <button @click="deleteCustomer(customer.id)">删除</button>
      </div>
    </el-col>
    <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>  
  </el-row>
    <li>{{customer.name}}</li>
    <li>{{customer.phone}}</li>
     <li>{{customer.emai}}</li>
  </div>
</template>

<script>
export default {
  name: 'customerdetail',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
    fetchCustomer (id) {
      this.$http.get('http://localhost:3000/users/' + id)
        .then(function (response) {
          console.log(response)
          this.customer = response.body
        })
    },
    deleteCustomer(id){
      this.$http.delete('http://localhost:3000/users/' + id)
        .then(function(response){
           this.$router.push({path:"/",query:{alert:"用户删除成功"}})
      })
      
    }
  },
  created () {
    this.fetchCustomer(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
