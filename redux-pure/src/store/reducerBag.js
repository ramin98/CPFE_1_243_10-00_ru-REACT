export let initialObjectBag = {
    bag: []
}

export function reducerBag(state = initialObjectBag, action) {
    if (action.type === 'ADD TO BAG') {
        let newArr = [...state.bag]
        newArr.push(action.payload)
        console.log(newArr)
        return { ...state, bag: newArr }
    }

    return state
}