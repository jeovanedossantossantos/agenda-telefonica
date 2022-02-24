import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "./styler";
import { Form } from '../../components/Form';

export const Adicionar: React.FC = () => {
    const push = useNavigate()
    return (
        <div>
            <Container>
              
                <Button onClick={() => push("/")}>Voltar</Button>
                <Title>Adicione um contato</Title>
                <Form></Form>
            </Container>
        </div>
    )
}