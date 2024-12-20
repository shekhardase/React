import React from "react";

const products =
    [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Apple', isFruit: true, id: 2 },
        { title: 'Garlic', isFruit: false, id: 3 }

    ];



function List() {

    const items = products.map(product =>
        <li key={product.id} style={{
            color: product.isFruit ? 'Red' : 'Blue'
        }}>
            {product.title}
        </li>

    )

    return (
        <ul>{items}</ul>
    )

}

export default List;