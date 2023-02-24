export default function Botao(
    {children}: 
    {children: React.ReactNode}
) {
    return (
        <button className="w-full bg-blue-900 rounded py-2 px-3 text-white font-bold">
            {children}
        </button>
    )
}