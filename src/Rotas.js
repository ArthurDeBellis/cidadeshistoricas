import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/index'

import OuroPreto from './components/Pages/OuroPreto/index'
import Mariana from './components/Pages/Mariana/index'
import Diamantina from './components/Pages/Diamantina/index'
import Sabara from './components/Pages/Sabara/index'
import Congonhas from './components/Pages/Congonhas/index'
import SaoJoaoelRei from './components/Pages/SaoJoaodelRei/index'

// eslint-disable-next-line
export default () => {
    return(
        <Routes>
            <Route exact path='/' element={<Home />} />
            
            <Route exact path='/congonhas' element={<Congonhas />} />
            <Route exact path='/diamantina' element={<Diamantina />} />
            <Route exact path='/mariana' element={<Mariana />} />
            <Route exact path='/ouro-preto' element={<OuroPreto />} />
            <Route exact path='/sabara' element={<Sabara />} />
            <Route exact path='/sao-joao-delrei' element={<SaoJoaoelRei />} />
        </Routes>
    );
}