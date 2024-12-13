export let initialObjectProducts = {
    products:[]
}

export function productsReducer(state, action) {
    if(action.type === 'GET PRODUCTS'){
         console.log(action.payload)
         return {...state, products: action.payload}
    }else if(action.type === 'PRODUCTS SORTING'){
        let newArr = [...state.products]
        if(action.payload === 'UP'){
            newArr.sort((a,b) => a.product_price - b.product_price)
        }else{
            newArr.sort((a,b) => b.product_price - a.product_price)
        }
        return {...state, products: newArr}
   }
    
    return state
}