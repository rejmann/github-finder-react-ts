import { UserType } from '../types/UserType';
import { AiOutlineLink } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'

export function Perfil(
        { user, error }: 
        { user: UserType|null, error: string|null }
    ) {

    let perfil = null

    if (error) {
        perfil = <h1 className="mt-5 font-bold text-4xl text-red-500">{error}</h1>
    }

    if (user) {
        perfil = (
            <div className="mt-5 mx-4 p-6 w-[25vw] rounded-xl text-gray-500 text-center flex flex-col items-center border border-[#B3BAC2]">
                <img 
                    src={user.avatar_url} 
                    alt={user.name} 
                    className="rounded-full w-56 mb-3" 
                />

                <div className="w-full text-start">
                    {user.name && <h1 className="font-bold text-2xl text-[#B3BAC2]">{user.name}</h1>}
                    {user.login && <p className="text-2xl">{user.login}</p>}
                </div>

                <div className="w-full my-4">{user.bio && <p className="text-[#B3BAC2] text-left text-base">{user.bio}</p> }</div>
                
                
                <div className="w-full text-start"> 
                    {user.location && <p className="text-sm">
                        <IoLocationSharp className="inline-block mr-1" />
                        {user.location}
                    </p>}
                    {user.company && <p className="text-sm">
                        <BiBuildings className="inline-block mr-1" />
                        {user.company}
                    </p>}
                    {user.blog && <p className="text-sm">
                        <AiOutlineLink className="inline-block mr-1" />
                        <a href={`https://${user.blog}`}>{user?.blog}</a>
                    </p>}
                </div>
            </div>
        )
    }

    return perfil
}