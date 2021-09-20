/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import Card from './components/layout/Card';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#12 - Contador" color="#324ABC">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Components Controlados (Input)" color="#FC05BD">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#FF0000">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#ABCD00">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: 'Bruno' }} />
          <UsuarioInfo usuario={{ email: 'bruno@gmail.com' }} />
          <UsuarioInfo usuario={{}} />
          <UsuarioInfo />
        </Card>

        <Card titulo="#07 - Repetição de produtos" color="#54A4F0">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição de alunos" color="#000000">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Component com Filhos" color="#00C8F8">
          <Familia sobrenome="Moreira">
            <FamiliaMembro nome="Bruno" sobrenome="Moreira" />
            <FamiliaMembro nome="Márcio" sobrenome="Moreira" />
            <FamiliaMembro nome="Geise" sobrenome="Moreira" />
            <FamiliaMembro nome="Laís" sobrenome="Moreira" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Bruno Moreira"
            nota={9.7}
          />
        </Card>

        <Card titulo="#01 - Primeiro Component" color="#588C73">
          <Primeiro />
        </Card>
      </div>

    </div>
  );
}


export default App;