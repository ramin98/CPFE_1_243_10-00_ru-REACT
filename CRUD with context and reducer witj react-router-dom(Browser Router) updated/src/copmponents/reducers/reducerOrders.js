import { goods } from "../../assets/data/data";

export let initialObject = {
    orders: []
}

export function reducer(state, action) {
    if (action.type === 'ADD ORDER') {
        let formData = Object.fromEntries([...new FormData(action.payload.target)])
        formData.customer_bag = action.bag
        formData.id = state.orders.length === 0 ? 1 : state.orders.at(-1).id + 1
        let newArr = [...state.orders]
        newArr.push(formData)
        console.log(newArr)
        return { ...state, orders: newArr }
    } 

    return state
}