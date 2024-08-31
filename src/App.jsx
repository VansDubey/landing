import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import LoginProfessional from './components/LoginProfessional';
import LoginClients from './components/LoginClients';


function App() {
  const [toggle, settoggle] = useState(true);

  function handletoggle(type){
    settoggle(type === 'Professional')
  }

  return (
    <>

    <MantineProvider>
    <header className=" ml-20 my-3" >
      <p className="text-2xl">Serene</p>
      <h1 className="text-3xl font-bold">Minds</h1>  </header>
       <hr></hr>
    <div className="mx-auto flex justify-center items-center gap-4 border-solid border-black border w-fit p-2 rounded-3xl mt-12 "> 
            <button onClick={()=>handletoggle('Professional')} className= {toggle?'bg-black text-white p-2 rounded-3xl':'bg-white text-black p-2 rounded-3xl'} >For Professionals</button>
            <button onClick={()=>handletoggle('Client')} className= {toggle?'bg-white text-black p-2 rounded-3xl':'bg-black text-white p-2 rounded-3xl'}>For Clients</button>
        </div>
      {toggle?<LoginProfessional />: <LoginClients/>}
  
    </MantineProvider>
    
    </>
  )
}

export default App
