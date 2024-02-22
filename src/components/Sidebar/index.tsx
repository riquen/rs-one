import { PencilSquareIcon } from '@heroicons/react/24/outline'

export const Sidebar = () => {
    return (
        <aside className="bg-neutral-800 rounded-lg overflow-hidden">
            <img className="w-full h-20 object-cover" src="https://picsum.photos/500" alt="" />
            <div className="flex flex-col items-center -mt-7">
                <img className="w-12 h-12 rounded-lg border-4 border-solid border-neutral-800 outline-2 outline outline-green-500 box-content" src="https://github.com/riquen.png" alt="" />
                <strong className="mt-4 text-neutral-100 leading-relaxed">Henrique Nunes</strong>
                <span className="text-sm text-neutral-400 leading-relaxed">Developer</span>
            </div>
            <footer className="border-t border-solid border-neutral-600 mt-6 pt-6 px-8 pb-8">
                <a className="flex items-center justify-center gap-2 font-bold text-green-500 no-underline border border-solid border-green-500 rounded-lg h-12 px-6 hover:bg-green-500 hover:text-neutral-50 transition-colors duration-100" href="#">
                    <PencilSquareIcon className='w-5 h-5' />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}