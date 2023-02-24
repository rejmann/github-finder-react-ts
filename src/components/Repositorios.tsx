import apiGithub from '../services/apiGithub'
import { RepoType } from '../types/RepoType'	
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Repositorios() {
    
    const [repos, setRepos] = useState<RepoType[]|null>(null)
    const [error, setError] = useState<string|null>(null)
    const { user } = useParams<{ user: string }>()

    useEffect(() => {
        apiGithub
            .get(`/users/${user}/repos`)
            .then((resp) => {
                const data: RepoType[] = resp.data
                setRepos(data)
            })
            .catch((err) => {
                setError(`Ops! ocorreu um erro: ${err.message}`)
            })
        ;
    }, [])

    return (
        <div className='w-full p-6'>
            <h1 className="font-bold text-2xl text-[#B3BAC2] mb-6 text-center">Repositórios</h1>
                
            {error 
            ? <h1 className="text-center font-bold text-2xl text-red-500">{error}</h1> 
            : (
                <div className='grid grid-cols-4 gap-4'>

                    {repos && repos.map((repo, i) => (
                        <div key={i} className='p-6 rounded-xl flex flex-col text-center border border-[#B3BAC2] hover:bg-gray-900'>
                            <a href={repo.html_url} target="_blank" rel="noreferrer" >
                                <h2 className='font-bold text-[#B3BAC2] text-xl mb-2'>{repo.name}</h2>
                                <p className="text-[#B3BAC2] mb-2">{repo.description}</p>
                                {repo.language && <p className="text-[#B3BAC2] mb-2">Linguagem: {repo.language}</p>}
                                {! repo.topics?.length 
                                    ? '' 
                                    : <ul 
                                        className='text-start text-[#B3BAC2]'
                                      > Tópicos: 
                                        {repo.topics.map((topic, i) => (<li key={i}> - {topic} </li> ))} 
                                      </ul>
                                }
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}