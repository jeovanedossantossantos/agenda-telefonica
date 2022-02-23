import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "./styler";
import { Form } from '../../components/Form';

export const Adicionar: React.FC =()=>{
    const push = useNavigate()
    return(
        <div>
             <Button onClick={()=>push("/")}>Voltar</Button>
            <Form></Form>
        </div>
    )
}