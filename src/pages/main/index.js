import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

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

        // busca a variável products no this.state
        const { products } = this.state;

        return(
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="">Acessar</a>
                    </article>
                )) }
            </div>
        );
    }
}