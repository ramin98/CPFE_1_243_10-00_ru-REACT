export async function getProductsFetch(dispatch) {
    try{
        let response = await fetch('http://localhost:5000/goods')
        let data = await response.json()
        
        dispatch({type:'GET PRODUCTS', payload:data})
    }catch(err){
        console.log(err)
    }
}