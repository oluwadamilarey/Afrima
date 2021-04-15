import React from 'react';
import data from '../data';

function ProductScreen(props){
    console.log(props.match.params.id);
    // eslint-disable-next-line eqeqeq
    const product = data.products.find(x => x._id == props.match.params.id);
    console.log(product.price)
    return <div><h1>{product._id}</h1></div>
}

export default ProductScreen;