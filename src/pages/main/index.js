import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

    // variável de estado
    state = {
        products: []
    };

    // método de ciclo de vida do componente
    // executado assim que o componente é mostrado na tela
    componentDidMount() {
        this.loadProducts();
    }

    // arrow function
    // utilizada para não sobreescrever o .this mantendo o seu valor do escopo fora da função
    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    };

    render () {
        return(
            <div className="product-list">
                { this.state.products.map(product => (
                    <h2 key={product._id} >{ product.title }</h2>
                )) }
            </div>
        );
    }
}