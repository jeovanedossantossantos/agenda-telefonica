import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBeer, FaEye, FaFileSignature, FaTrash } from 'react-icons/fa';
import { Button, Container, Title } from "./styler";
import api from "../../service/api";
import { QuemChamouContext } from '../../context'

interface DadosProps {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    link_foto: string;


}
export const ListaTelefonica: React.FC = () => {
    const push = useNavigate()
    const [date, setDate] = useState<DadosProps[]>([])
    const { idContoto, setIdContoto } = useContext(QuemChamouContext)

    useEffect(() => {

        api.get("/listar_contatos").then((res) => {
            setDate(res.data)
        }).catch((err) => {
            console.error(err)
        })

    }, [])
    console.log(date)
    const editar = (id: number) => {
        setIdContoto(id)

        push("/editar")

    }
    const deletar = (id: number) => {
        console.log(id)
        api.delete(`/${id}`).then(res => {
            api.get("/listar_contatos").then((res) => {
                setDate(res.data)
            }).catch((err) => {
                console.error(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Container>
            <div >
                <Title>Agenda</Title>
                <Button onClick={() => push("/adicionar")} style={{ float: "right" }}>+ Adicionar contato</Button>
                <table className="table text-light">
                    <thead>
                        <tr>
                            <th scope="col">Foto</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Ver</th>
                            <th scope="col">Apaga</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    {
                        date?.map(e => (
                            <tbody key={e.id}>
                                <tr>
                                    <td><img style={{width: 50, height: 50}} src={e.link_foto}/></td>
                                    <td>{e.nome}</td>
                                    <td>{e.telefone}</td>
                                    <td>{e.email}</td>
                                    <td><Button className="btn btn-secondary" onClick={() => { editar(e.id) }}><FaEye /></Button></td>
                                    <td><Button className="btn btn-secondary" onClick={() => { deletar(e.id) }}><FaTrash /></Button></td>
                                    <td><Button className="btn btn-secondary" onClick={() => { editar(e.id) }}><FaFileSignature /></Button></td>
                                </tr>


                            </tbody>
                        ))
                    }
                </table>
            </div>
        </Container>
    )
}
