import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Sandro", 10000, 12643452444);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Neto", 5000, 12547596520);
gerente.cadastrarSenha("123")
const estaLogado = SistemaAutenticacao.login(gerente, "123")

console.log(estaLogado)