function ProductsItem({ product_name, product_description, product_price, url }) {

    return (
        <li>
            <p>{product_name}</p>
            <p>{product_description}</p>
            <p>{product_price}</p>
            <img src={url} alt={product_name} />
            <button>ADD</button>
        </li>
    )
}

export default ProductsItem