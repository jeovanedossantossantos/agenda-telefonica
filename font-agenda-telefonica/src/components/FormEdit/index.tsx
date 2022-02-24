import React, { useContext, useEffect, useState } from 'react';
import { Container, Imagem } from './style';
import api from '../../service/api'
import { useNavigate } from "react-router-dom";
import { QuemChamouContext } from '../../context';

interface DadosProps {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    link_foto: string;


}
export const FormEdit: React.FC = () => {
    const { idContoto, setIdContoto } = useContext(QuemChamouContext)
    const [date, setDate] = useState<DadosProps>({} as DadosProps)
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const push = useNavigate()
    const [posisao, setPosition] = useState(0);
    const [link_foto, setLink] = useState("https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png")
    // console.log(idContoto)
    // const [file, setFile] = useState();
    // const [fileName, setFileName] = useState("");

    // const saveFile = (e) => {
    //   setFile(e.target.files[0]);
    //   setFileName(e.target.files[0].name);
    // };

    // const uploadFile = async (e) => {
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   formData.append("fileName", fileName);
    //   setDate({...date, foto: formData});

    //   try {
    //     const res = await api.post(
    //       "/cadastra",
    //       date
    //     );
    //     console.log(res);
    //   } catch (ex) {
    //     console.log(ex);
    //   }
    // };

    useEffect(() => {
        api.get(`/buscarUm/${idContoto}`).then(res => {
            setDate(res.data)
            console.log(res.data)
            setNome(res.data.nome)
            setTelefone(res.data.telefone)
            setEmail(res.data.email)
            setLink(res.data.link_foto)
        }).catch(err => {
            console.log(err);
        })

    }, [])
    const salvar = (e: { preventDefault: () => void; }) => {
        e.preventDefault();




        api.put(`/atualizar/${idContoto}`, date).then(res => {
            push("/")

        }).catch(err => {

            console.log("Erro " + err);
        });
    }

    console.log(date)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (posisao === 1) {
            setNome(event.target.value)
            setDate({ ...date, nome: event.target.value })
        }
        if (posisao === 2) {
            setTelefone(event.target.value)
            setDate({ ...date, telefone: event.target.value })
        }
        if (posisao === 3) {
            setEmail(event.target.value)
            setDate({ ...date, email: event.target.value })
        }
        if(posisao === 4) {
            setLink(event.target.value)
            setDate({ ...date, link_foto: event.target.value })
        }
    }



    return (
        <Container>

            {/* {date[0].nome} */}
            <Imagem src={link_foto} />
            <form onSubmit={salvar}>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome"
                        onClick={() => setPosition(1)}
                        onChange={changeHandler}
                        value={nome}
                    />
                </div>
                <div className="row">
                    <div className="col m-1">
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone"
                            onClick={() => setPosition(2)}
                            onChange={changeHandler}
                            value={telefone}
                        />
                    </div>
                    <div className="col m-1">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email"
                            onClick={() => setPosition(3)}
                            onChange={changeHandler}
                            value={email}
                        />
                    </div>
                    <div className="col m-1">
                        <input type="text" className="form-control" placeholder="Link da Foto" aria-label="Link da Foto"
                           onClick={() => setPosition(4)}
                           value={link_foto}
                            onChange={changeHandler}
                        />
                    </div>
                </div>



                {/* <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div> */}

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Salvar</button>

                </div>
            </form>




        </Container>
    )
}