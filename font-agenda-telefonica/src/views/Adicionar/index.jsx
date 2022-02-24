import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "./styler";
import { Form } from '../../components/Form';
import { useDropzone } from 'react-dropzone'
function Adicionar() {
    const push = useNavigate()


  
  

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