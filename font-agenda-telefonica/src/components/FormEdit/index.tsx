 import React, { useEffect, useState } from 'react';
// import { Container } from './style';
// import api from '../../service/api'
// import { useNavigate } from "react-router-dom";

// interface DadosProps{
//   id: number;
//   nome: string;
//   telefone: string;
//   email: string;
  

// }
// export const FormEdit: React.FC = () => {
//   const [date, setDate] = useState<DadosProps[]>([])
//   const push = useNavigate()
//   // const [file, setFile] = useState();
//   // const [fileName, setFileName] = useState("");

//   // const saveFile = (e) => {
//   //   setFile(e.target.files[0]);
//   //   setFileName(e.target.files[0].name);
//   // };

//   // const uploadFile = async (e) => {
//   //   const formData = new FormData();
//   //   formData.append("file", file);
//   //   formData.append("fileName", fileName);
//   //   setDate({...date, foto: formData});

//   //   try {
//   //     const res = await api.post(
//   //       "/cadastra",
//   //       date
//   //     );
//   //     console.log(res);
//   //   } catch (ex) {
//   //     console.log(ex);
//   //   }
//   // };

//   useEffect(()=>{

//   },[])
//   const salvar = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
   
    
//     // console.log(date)

//    api.put(`/atualizar/${}`, date).then(res => {
//     push("/")
     
//    }).catch(err => { 
     
//     console.log("Erro " +err);});
//   }

 
//   return (
//     <Container>
//       <form onSubmit={salvar}>
//         <label>Nome</label>
//         <input type="text" onChange={e => setDate({...date, nome: e.target.value})} />

//         <label>Telefone</label>
//         <input type="text" onChange={e=> setDate({...date, telefone: e.target.value})}/>

//         <label>email</label>
//         <input type="text" onChange={e => setDate({...date, email: e.target.value})}/>

//         {/* <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div> */}
//         <button type="submit">Salvar</button>
//       </form>


//     </Container>
//   )
// }