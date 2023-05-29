"use strict";
// import { readFileSync, writeFileSync } from "fs";
// type Endereco = {
//   [key: string]: string;
// };
// interface UserData {
//   name: string;
//   email: string;
//   cpf: string;
//   profissao: string | null;
//   endereco: Endereco | null;
// }
// const user: UserData = {
//   name: "Marcus Roza",
//   email: "mavirolero@gmail.com",
//   cpf: "11111111111",
//   profissao: "Desenvolvedor de software",
//   endereco: {
//     cep: "",
//     rua: "Rua JavaScript",
//     complemento: "js",
//     bairro: "RJ",
//     cidade: "Rio de janeiro",
//   },
// };
// function editUserData(user: string): void {
//   try {
//     writeFileSync("./db.json", user);
//     console.log("Cadastrado com sucesso!");
//   } catch (error) {
//     console.log(error);
//   }
// }
// createUserData(JSON.stringify(user));
// function createReaderFile(): void {
//   try {
//     const file: string = JSON.parse(readFileSync("./db.json").toString());
//     console.log(file);
//   } catch (error) {
//     console.log("Erro ao ler o arquivo:", error);
//   }
// }
// createReaderFile();
