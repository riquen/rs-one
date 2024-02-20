export const Sidebar = () => {
    return (
        <aside className="bg-neutral-800 rounded-lg overflow-hidden">
            <img className="w-full h-20 object-cover" src="https://picsum.photos/500" alt="" />
            <div className="flex flex-col items-center">
                <strong>Henrique Nunes</strong>
                <span>Developer</span>
            </div>
            <footer className="border-t border-solid border-neutral-600 mt-6 pt-6 px-8 pb-8">
                <a className="flex items-center justify-center bg-transparent font-bold text-green-500 no-underline border border-solid border-green-500 rounded-lg h-12 px-6" href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}