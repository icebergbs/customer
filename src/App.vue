<template>
  <div id="app">
    <img src="./assets/logo.png">
    <product-one ></product-one>
    <product-two ></product-two>



    <li><router-link to="/">主页</router-link></li><br>
    <li><router-link to="/about">about</router-link></li><br>
    <li><router-link to="/add">添加用户</router-link></li><br>
    <router-view></router-view>
    
    
  </div>
</template>

<script>
import Productone from './components/product-one'
import Producttwo from './components/product-two'
export default {
  name: 'App',
  data(){
    return{
     
    }  
  },
  components:{
      'product-one':Productone,
      'product-two':Producttwo
    }
  

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
