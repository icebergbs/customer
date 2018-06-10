import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store  = new Vuex.Store({
    state:{
        products:[
            {name:'小明',price:200},
            {name:'小李',price:140},
            {name:'小天',price:20},
            {name:'小红',price:10}
          ]
    },
    getters:{
        saleProducts:(state)=>{
            var saleProducts = state.products.map(
                product =>{
                    return {
                        name: "**" + product.name + "**",
                        price:product.price /2
                    }
                }
            )
            return saleProducts
        }
        
    },
    mutations:{
        reducePrice:(state,payload) =>{
             state.products.forEach(product =>{
                product.price-=payload
            })
        }
    },
    actions:{
        reducePrice:(context,payload) =>{
            setTimeout(function(){
              context.commit("reducePrice",payload)  
            },2000)
        }
    }
})