import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBeer,FaEye,FaFileSignature,FaTrash} from 'react-icons/fa';
import { Button, Container } from "./styler";
import api from "../../service/api";
import {QuemChamouContext} from '../../context'

interface DadosProps {
    id: number;
    nome: string;
    telefone: string;
    email: string;


}
export const ListaTelefonica: React.FC = () => {
    const push = useNavigate()
    const [date, setDate] = useState<DadosProps[]>([])
    const {idContoto, setIdContoto} = useContext(QuemChamouContext)

    useEffect(() => {

        api.get("/listar_contatos").then((res) => {
            setDate(res.data)
        }).catch((err) => {
            console.error(err)
        })

    }, [])
    console.log(date)
    const editar=(id: number) => {
        setIdContoto(id)
        console.log(idContoto)
    }
    return (
        <Container>
            <Button onClick={() => push("/adicionar")} style={{ float: "right" }}>+ Adicionar contato</Button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
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
                                <th scope="row">{e.id}</th>
                                <td>{e.nome}</td>
                                <td>{e.telefone}</td>
                                <td>{e.email}</td>
                                <td><Link className="btn btn-secondary" to={""} onClick={() =>{editar(e.id)}}><FaEye/></Link></td>
                                <td><Link className="btn btn-secondary" to={""} onClick={() =>{}}><FaTrash/></Link></td>
                                <td><Link className="btn btn-secondary" to={""} onClick={() =>{}}><FaFileSignature/></Link></td>
                            </tr>
                            

                        </tbody>
                    ))
                }
            </table>
        </Container>
    )
}
