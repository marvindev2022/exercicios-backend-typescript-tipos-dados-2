"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const user = {
    name: "Marcus Roza",
    age: 32,
    pets: ["dog"]
};
function createFile(data) {
    try {
        (0, fs_1.writeFileSync)("./db.json", data);
        console.log("Arquivo criado com sucesso!");
    }
    catch (error) {
        console.log("Erro ao criar o arquivo:", error);
    }
}
createFile(JSON.stringify(user));
function createReaderFile() {
    try {
        const file = JSON.parse((0, fs_1.readFileSync)("./db.json").toString());
        console.log(file);
    }
    catch (error) {
        console.log("Erro ao ler o arquivo:", error);
    }
}
createReaderFile();
