import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    // variável de estado
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // método de ciclo de vida do componente
    // executado assim que o componente é mostrado na tela
    componentDidMount() {
        this.loadProducts();
    }

    // arrow function
    // utilizada para não sobreescrever o .this mantendo o seu valor do escopo fora da função
    loadProducts = async (page = 1) => {
        // nesta montagem de url (get), é utilizado assento agudo como aspas
        const response = await api.get(`/products?page=${page}`);

        // ... rest operator
        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render () {

        // busca a variável products no this.state
        const { products, page, productInfo } = this.state;

        return(
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="">Acessar</a>
                    </article>
                )) }
                <div className="actions">
                    <button disabled={ page === 1 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={ page === productInfo.pages } onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}