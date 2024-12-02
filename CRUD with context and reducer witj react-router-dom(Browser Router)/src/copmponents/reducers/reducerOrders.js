import { goods } from "../../assets/data/data";

export let initialObject = {
    orders: []
}

export function reducer(state, action) {
    if (action.type === 'ADD ORDER') {
        let formData = Object.fromEntries([...new FormData(action.payload.target)])
        formData.customer_bag = action.bag
        let newArr = [...state.orders]
        newArr.push(formData)
        console.log(newArr)
        return { ...state, orders: newArr }
    } 

    return state
}