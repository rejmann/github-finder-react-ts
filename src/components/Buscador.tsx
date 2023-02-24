import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export function Buscador(
        { handleUser }: 
        { handleUser : (search: string) => void }
    ) {
    
    const [search, setSearch] = useState<string>('')
    
    const handleSearch = () => {
        handleUser(search)
    }

    return (
        <div className="w-full rounded-xl">
            <div className='flex justify-center items-center gap-4 my-5'>
                <div className="mt-1 rounded-md shadow-sm w-[80%] h-10">
                    <input 
                        type="text" 
                        name="price" 
                        id="price" 
                        className={`
                            w-full h-full pl-4 pr-12 rounded-md 
                            border-gray-300 focus:border-indigo-500
                            focus:ring-indigo-500
                        `} 
                        placeholder="Digite o nome do usuário" 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>

                <button 
                    type='button'
                    className='bg-gray-500 w-16 h-10 py-2 flex justify-center items-center rounded text-white border-gray-300'
                    onKeyDown={() => handleSearch()}
                    onClick={() => handleSearch()}
                >
                    <FaSearch size={30} />
                </button>
            </div>
        </div>
    )
}