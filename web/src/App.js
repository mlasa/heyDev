import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';

import DevForm from './components/DevForm/index'
import DevItem from './components/DevItem/index'

function App() {

  const [devs,setDevs] = useState([]) //starts state with same type of data will be stored

  useEffect(()=>{
      async function loadDevs(){//nao posso por async na frente do useEffect entao crio uma funcao dentro dele
        const response = await api.get('/devs')
        setDevs(response.data)
        console.log(response.data)
      }
      loadDevs()
    },[])

  async function handleAddDev(data){ 
    const response = await api.post('/devs', data)  
    setDevs([...devs,response.data])
  }
  

   return (
    <div id="app">
      <h1>heyDev</h1>
      <div className="main-content">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
        </aside>

        <main>
          <ul>
            {devs.map(dev=>(<DevItem key={dev._id} dev={dev}/>  ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
