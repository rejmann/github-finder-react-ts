import { useState } from 'react'
import { UserType } from './types/UserType'
import { Buscador } from "./components/Buscador"
import { Perfil } from "./components/Perfil"
import { Detalhes } from "./components/Detalhes"
import { Repositorios } from './components/Repositorios'

import apiGithub from './services/apiGithub'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  
  const [user, setUser] = useState<UserType|null>(null)
  const [error, setError] = useState<string|null>(null)
  
  const handleUser = async (search: string) => {

    if (! search) {
        setUser(null)
        return
    }

    apiGithub
        .get(`/users/${search}`)
        .then((resp) => {
            const data: UserType = resp.data
            setUser(data)
        })
        .catch((err) => {
            setError(`Ops! ocorreu um erro: ${err.message}`)
        })
    ;
  }
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <div className={`w-screen h-screen flex items-center ${ user ? 'flex-col' : 'justify-center'}`}>
                    <div className={`${! user && 'w-[40vw] py-5 bg-gray-800 rounded-lg flex flex-col items-center'}`}>
                        <h1 className={`${user && 'mt-7'} font-bold text-4xl text-white text-center`}>
                            Github Finder
                        </h1>
            
                        <div className='flex'>
                            <Perfil user={user} error={error} />
                
                            <div className='flex flex-col'>
                                <Buscador handleUser={handleUser} />
                    
                                {user && <Detalhes user={user} />}
                            </div>
                        </div>
                    </div>
                </div>
            } />
            <Route path='/:user/repos' element={<Repositorios />} />
        </Routes>         
    </BrowserRouter>
  )
}
