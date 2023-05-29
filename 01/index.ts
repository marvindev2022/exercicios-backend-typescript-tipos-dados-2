import { readFileSync, writeFileSync } from "fs";

type User={
name:string,
age:number,
pets:string[]
}
const user:User ={
  name:"Marcus Roza",
  age:32,
  pets:["dog"]
}
function createFile(data:string) {
  try {
    writeFileSync("./db.json", data);
    console.log("Arquivo criado com sucesso!");
  } catch (error) {
    console.log("Erro ao criar o arquivo:", error);
  }
}

createFile(JSON.stringify(user));

function createReaderFile():void {
  try {
    const file:string = JSON.parse(readFileSync("./db.json").toString());
    console.log(file);
  } catch (error) {
    console.log("Erro ao ler o arquivo:", error);
  }
}

createReaderFile();