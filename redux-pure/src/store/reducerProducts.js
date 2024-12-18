export let initialObjectProducts = {
    products:[]
}

export function getProducts() {
     return async function (dispatch) {
         let res = await fetch('http://localhost:5000/goods')
         let data = await res.json()
         dispatch({type: 'GET PRODUCTS', data: data})
     }
}

export function reducerProducts(state = initialObjectProducts, action) {
    if(action.type === 'GET PRODUCTS'){
         return {...state, products: action.data}
    }
    
    return state
}