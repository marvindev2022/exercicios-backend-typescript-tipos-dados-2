"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
;
let arrayFile = [];
const user = {
    name: "Marcus Roza",
    email: "mavirolero@gmail.com",
    cpf: "11111111112",
    profissao: "Desenvolvedor de software",
    endereco: {
        cep: "",
        rua: "Rua JavaScrip1",
        complemento: "js",
        bairro: "RJ",
        cidade: "Rio de janeiro",
    },
};
function createReaderFile(arrayFile) {
    try {
        const file = JSON.parse((0, fs_1.readFileSync)("./db.json").toString());
        arrayFile.push(file);
    }
    catch (error) {
        console.log("Erro ao ler o arquivo:", error);
    }
}
createReaderFile(arrayFile);
function createUserData(user) {
    try {
        (0, fs_1.writeFileSync)("./db.json", user);
        console.log("Cadastrado com sucesso!");
    }
    catch (error) {
        console.log(error);
    }
}
createUserData(JSON.stringify(Object.assign(Object.assign({}, arrayFile), user)));
console.log(arrayFile);
