import React from 'react';
import { FormEdit } from '../../components/FormEdit';
import { Button, Container, Title } from './style';
import {useNavigate} from "react-router-dom"
export const Editar: React.FC = () => {

    const push = useNavigate()
    return (

        <div>
            <Container>
            <Button onClick={() => push("/")} style={{  }}>Voltar</Button>
                <Title>Editar Dados</Title>
                <FormEdit></FormEdit>
            </Container>
        </div>

    )
}