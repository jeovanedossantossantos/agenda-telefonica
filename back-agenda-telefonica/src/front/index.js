const request = require('request')
const fs = require('fs')
var formData = {
    my_field: 'file',
    my_file: fs.createReadStream('./teste.jpg')
}

request.post({
    url: 'http://localhost:3000/cadastra_contato',
    formData: formData
},(err,statusCode, response) => {
    if(err){
        return console.error(err)
    }
    console.log("Sucesso")
})