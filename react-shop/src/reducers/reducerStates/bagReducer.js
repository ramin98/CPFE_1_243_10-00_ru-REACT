export let initialObjectBag = {
    bag: []
}

export function bagReducer(state, action) {
    if (action.type === 'ADD TO BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        bag.push(action.payload)
        localStorage.setItem('bag', JSON.stringify(bag))
        return { ...state, bag: bag }
    } else if (action.type === 'GET BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        return { ...state, bag: bag }
    } else if (action.type === 'DELETE FROM BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        return { ...state, bag: bag }
    }


    return state
}