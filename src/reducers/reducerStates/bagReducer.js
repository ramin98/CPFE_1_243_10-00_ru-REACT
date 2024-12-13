export let initialObjectBag = {
    bag: []
}

export function bagReducer(state, action) {
    if (action.type === 'ADD TO BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let addedProduct = { ...action.payload }
        addedProduct.count = 1
        addedProduct.totalPrice = addedProduct.count * addedProduct.product_price
        bag.push(addedProduct)
        localStorage.setItem('bag', JSON.stringify(bag))
        return { ...state, bag: bag }
    } else if (action.type === 'GET BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        return { ...state, bag: bag }
    } else if (action.type === 'DELETE FROM BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((item) => item.id === action.payload)
        bag.splice(productIndex, 1)
        localStorage.setItem('bag', JSON.stringify(bag))
        return { ...state, bag: bag }
    }
    else if (action.type === 'MINUS PRODUCT') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((item) => item.id === action.payload)
        bag[productIndex].count -= 1

        if (bag[productIndex].count < 1) {
            bag.splice(productIndex, 1)
        } else {
            bag[productIndex].totalPrice = bag[productIndex].count * bag[productIndex].product_price
        }
        
        localStorage.setItem('bag', JSON.stringify(bag))
        return { ...state, bag: bag }
    }
    else if (action.type === 'PLUS PRODUCT') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let productIndex = bag.findIndex((item) => item.id === action.payload)
        bag[productIndex].count += 1
        bag[productIndex].totalPrice = bag[productIndex].count * bag[productIndex].product_price

        localStorage.setItem('bag', JSON.stringify(bag))
        return { ...state, bag: bag }
    }
    else if (action.type === 'CLEAR BAG') {
        localStorage.setItem('bag', JSON.stringify([]))

        return { ...state, bag: [] }
    }

    return state
}