export let initialObjectOrders = {
    orders:[]
}

export function ordersReducer(state, action) {
    // if(action.type === 'ORDER FORM'){
    //     let newArr = [state.orders]
    //     let bag = JSON.parse(localStorage.getItem('bag'))
    //     let data = {...action.payload, bag}
    //     newArr.push(data)
    //     addToOrders(data)
    //     return {...state, orders: newArr}
    // }

    if(action.type === 'GET ORDERS'){
        console.log(action.payload)
        return {...state, orders: action.payload}
    }
    
    return state
}