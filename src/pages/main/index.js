import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

    // método de ciclo de vida do componente
    // executado assim que o componente é mostrado na tela
    componentDidMount() {
        this.loadProducts();
    }

    // arrow function
    // utilizada para não sobreescrever o .this mantendo o seu valor do escopo fora da função
    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    };

    render () {
        return(
            <h1>Hello World</h1>
        );
    }
}