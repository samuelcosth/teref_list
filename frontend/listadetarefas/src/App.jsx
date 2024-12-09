import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [fone, setFone] = useState();
  const [data_nascimento, setData] = useState();

  function handleAddUser(e){
    e.preventDefault();

    axios.post("http://localhost:3333/user",{
      nome,
      email,
      fone,
      data
    })
    .then((response)=>{
      console.log("Cadastro realizado")
    })
    .catch((erro)=>{
      console.log("Errooooo")
    })
    
  }
  async function getUsers (){
    const usersfrom = await axios.get('http://localhost:3333/lista')

    setUsers( usersfrom.data )
  }

  useEffect(() => {
    getUsers()
  })
  

  return (
    <>
    <div className='div1'>
      <h1 id='texth1'>Lista de Tarefas</h1>
    </div>
      <form onSubmit={handleAddUser}>
        <input className='input' type="text" onChange={e=>setNome(e.target.value)}
        placeholder='NOME'/>
        <input className='input' type="text" onChange={e=>setEmail(e.target.value)}
        placeholder='E-MAIL'/>
        <input className='input' type="text" onChange={e=>setFone(e.target.value)}
        placeholder='FONE'/>
        <input className='input' type="text" onChange={e=>setData(e.target.value)}
        placeholder='DATA'/>
        <div id='div-btn1'>
          <button className='button' type='submit'>Cadastrar</button>
        </div>
      </form>
      {users.map((user) => (
        <div>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Nome: <span>{user.email}</span></p>
            <p>Nome: <span>{user.fone}</span></p>
            <p>Nome: <span>{user.data}</span></p>
          </div>
        </div>
      ))} 
    </>
  )
}

export default App
