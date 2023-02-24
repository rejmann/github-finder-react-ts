import Botao from './Botao'
import { UserType } from '../types/UserType'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function Detalhes(
    { user }:
    { user: UserType }
) {

    let date = new Date(user.created_at).toLocaleDateString('pt-BR')

    return (
        <>
            <div className="w-full p-6 rounded-xl border border-[#B3BAC2]">
                <h1 className="font-bold text-2xl text-[#B3BAC2] mb-6 text-center text-center">Detalhes</h1>

                <p className="text-gray-500 text-sm">Membro desde</p>
                <p className="text-[#B3BAC2] text-xl font-bold">{date}</p>

                <div className="flex space-x-16 my-4">
                    <div>
                        <p className="text-gray-500 text-sm">Seguidores</p>
                        <p className="text-[#B3BAC2] text-2xl font-bold">{user.followers}</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">Seguindo</p>
                        <p className="text-[#B3BAC2] text-2xl font-bold">{user.following}</p>
                    </div>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Respositórios públicos</p>
                    <p className="text-[#B3BAC2] text-xl font-bold">{user.public_repos}</p>
                </div>

                <div className='border border-[#B3BAC2] my-3'></div>

                <Link to={`/${user.login}/repos`}>
                    <Botao> 
                        <div className='w-full flex justify-center items-center'>
                            <span className="text-xl">
                                Repositórios
                            </span>
                            <BsFillArrowRightSquareFill 
                                size={25} 
                                className="inline-block ml-16"
                            />
                        </div>
                    </Botao>
                </Link>
            </div>
        </>
    )
}