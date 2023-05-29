import { readFileSync, writeFileSync } from "fs";

type Endereco = {
  [key: string]: string;
};

interface UserData {
  name: string;
  email: string;
  cpf: string;
  profissao: string | null;
  endereco: Endereco | null;
};
let arrayFile:UserData[]=[]
const user: UserData = {
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

function createReaderFile(arrayFile:UserData[]) {
  try {
    const file: UserData = JSON.parse(readFileSync("./db.json").toString());
    arrayFile.push(file);
  } catch (error) {
    console.log("Erro ao ler o arquivo:", error);
  }
}

createReaderFile(arrayFile);
function createUserData(user: string):void {
  try {
    writeFileSync("./db.json", user);
    console.log("Cadastrado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
createUserData(JSON.stringify({...arrayFile,...user}))
console.log(arrayFile)