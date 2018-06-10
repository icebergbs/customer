<template>
  <div id="product-two">
     <h2>Product two</h2>
     <ul>
       <li v-for="product in products">
         <span> {{product.name}} </span>
         <span> {{product.price}}</span>      
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
       
    }
  },
  computed:{
      products(){
          return this.$store.state.products
      }
  }
}
</script>

<style>
 
</style>
