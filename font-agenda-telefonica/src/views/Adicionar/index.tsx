import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "./styler";
import { Form } from '../../components/Form';
import Axios from 'axios';
import { useDropzone } from 'react-dropzone'
function Adicionar() {
    const push = useNavigate()
    // const formData = new FormData()
    // const [imagemSelection, setImage] = useState("")

    // const uploadImage = ()=>{
    //     const formData = new FormData()
    //     formData.append("file", imagemSelection)
    //     formData.append("upload_preset", 'gbbnqvav')
    //     Axios.post("https://api.cloudinary.com/v1_1/jeovane/imagem/upload", formData).then(response=>{
    //         console.log(response)
    //     })

    // }
    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //     console.log(acceptedFiles)
    // }, [])
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    // // function MyDropzone() {
    //     const onDrop = useCallback(acceptedFiles => {
    //         // Do something with the files
    //     }, [])
    //     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    //     return (
    //         <div {...getRootProps()}>
    //             <input {...getInputProps()} />
    //             {
    //                 isDragActive ?
    //                     <p>Drop the files here ...</p> :
    //                     <p>Drag 'n' drop some files here, or click to select files</p>
    //             }
    //         </div>
    //     )
    // }
    return (
        <div>
            <Container>

                <Button onClick={() => push("/")}>Voltar</Button>
                <Title>Adicione um contato</Title>
                <Form></Form>

                {/* <input type="file" name="image" onChange={e => setImage(e.target.files[0])}
                />

                <button onClick={uploadImage}>Upload</button> */}

                {/* <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div> */}
            </Container>
        </div>
    )
}
export default Adicionar