import React from "react";
import { Router, Route, Link, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ListaTelefonica } from "../views/ListaTelefonica";
import {Adicionar} from "../views/Adicionar"
import { Editar } from "../views/Editar";


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<ListaTelefonica/>}/>
                <Route path="/adicionar" element={<Adicionar/>}/>
                <Route path="/editar" element={<Editar/>}/>
               

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
