import { useSelector } from "react-redux"

function Bag() {
    let bag = useSelector((state) => state.bag.bag)
    console.log(bag)

    return (
        <>
        <h1>BAG</h1>
            <ul>
                {bag.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                            <img src={item.url} alt={item.product_name} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Bag
