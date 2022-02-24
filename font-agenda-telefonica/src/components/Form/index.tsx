import React, { useState } from 'react';
import { Container, Imagem } from './style';
import api from '../../service/api'
import { useNavigate } from "react-router-dom";

interface DadosProps {
  nome: string;
  telefone: string;
  email: string;
  link_foto: string;


}
export const Form: React.FC = () => {
  const [date, setDate] = useState<DadosProps>({} as DadosProps)
  const push = useNavigate()
  const [link_foto, setLink] = useState("https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png")
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
  const salvar = (e: { preventDefault: () => void; }) => {
    e.preventDefault();


    // console.log(date)

    api.post('/cadastra_contato', date).then(res => {
      push("/")

    }).catch(err => {

      console.log("Erro " + err);
    });
  }

  const foto = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setDate({ ...date, link_foto: event.target.value })
    setLink(event.target.value)


  }


  return (
    <Container>

      <Imagem src={link_foto} />
      <form onSubmit={salvar}>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="Nome" aria-label="Nome"
            onChange={e => setDate({ ...date, nome: e.target.value })}
          />
        </div>
        <div className="row">
          <div className="col m-1">
            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone"
              onChange={e => setDate({ ...date, telefone: e.target.value })}
            />
          </div>
          <div className="col m-1">
            <input type="text" className="form-control" placeholder="Email" aria-label="Email"
              onChange={e => setDate({ ...date, email: e.target.value })}
            />
          </div>
          <div className="col m-1">
            <input type="text" className="form-control" placeholder="Link da Foto" aria-label="Link da Foto"
              onChange={foto}
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