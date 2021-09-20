import React from 'react';

import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';

import Card from './components/layout/Card';

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Bruno Moreira"
                nota={9.7}
            />
        </Card>

        <Card titulo="#01 - Primeiro Component">
            <Primeiro />
        </Card>
    </div>
);