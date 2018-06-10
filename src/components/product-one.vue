<template>
  <div id="product-one">
     <h2>Product one</h2>
     <ul>
       <li v-for="product in products">
         <span> {{product.name}} </span>
         <span> {{product.price}}</span>      
       </li>
     </ul>
     <button @click="reducePrice(3)">降价</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
       
    }
  },
  methods:{
    reducePrice:function(amount){
    //    this.$store.state.products.forEach(product =>{
    //         product.price-=1
    //     })

   // this.$store.commit('reducePrice');
     this.$store.dispatch("reducePrice",amount)
    }
  },
  computed:{
      products(){
        return this.$store.state.products
      } 
    //   ,
    //   saleProducts(){
    //       return this.$store.getters.saleProducts;
    //   }
    
    // ...mapGetters([
    //     "saleProducts"
    // ])
  }
  
}
</script>

<style>
 
</style>
