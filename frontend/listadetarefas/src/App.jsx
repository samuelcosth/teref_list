import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

const MeuComponente = () => {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await axios.get('http://localhost:3333/lista');
        setDados(resposta.data);
        setLoading(false);
      } catch (error) {
        setErro(error.message);
        setLoading(false);
      }
    };

    buscarDados();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div>
      <h1>Dados Fetched</h1>
      <ul>
        {dados.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [fone, setTarefas] = useState();
  const [data_nascimento, setData] = useState();

  function handleAddUser(e){
    e.preventDefault();

    axios.post("http://localhost:3333/user",{
      nome,
      email,
      fone,
      data_nascimento
    })
    .then((response)=>{
      console.log("Cadastro realizado")
    })
    .catch((erro)=>{
      console.log("Erro")
    })
    
  }

  return (
    <>
    <div className='div1'>
      <h1>
        Lista de Tarefas
      </h1>
    </div>
      <form onSubmit={handleAddUser}>
        <input className='input' type="text" onChange={e=>setNome(e.target.value)}
        placeholder='nome'/>
        <input className='input' type="text" onChange={e=>setEmail(e.target.value)}
        placeholder='email'/>
        <input className='input' type="text" onChange={e=>setTarefas(e.target.value)}
        placeholder='tarefa'/>
        <input className='input' type="text" onChange={e=>setData(e.target.value)}
        placeholder='data'/>
        <button type='submit' className='button'>Cadastrar</button>
      </form>
      <div className='div2'>
        <div className='div3'>
          <div>
            <h1>nome</h1>
          </div>
          <div>
            <h1>email</h1>
          </div>
          <div>
            <h1>tarefa</h1>
          </div>
          <div>
            <h1>data</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
