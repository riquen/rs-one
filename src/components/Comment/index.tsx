import { TrashIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import { Avatar } from '../Avatar'

export const Comment = () => {
    return (
        <div className='mt-6 flex gap-4'>
            <Avatar src="https://github.com/tiagofsv95.png" />
            <div className='flex-1'>
                <div className='bg-neutral-700 rounded-lg p-4'>
                    <header className='flex items-start justify-between'>
                        <div>
                            <strong className='block text-sm leading-relaxed'>Henrique Arantes</strong>
                            <time className="block text-xs leading-relaxed text-neutral-400" title="" dateTime="">Cerca de 1h atrás</time>
                        </div>
                        <button className='text-gray-400 cursor-pointer hover:text-red-500' title="Deletar comentário">
                            <TrashIcon className='w-6 h-6' />
                        </button>
                    </header>
                    <p className='mt-4 text-gray-300'>Muito bom, parabéns!</p>
                </div>
                <footer className='mt-4'>
                    <button className='text-gray-400 cursor-pointer flex items-center hover:text-green-300'>
                        <HandThumbUpIcon className='w-5 h-5 mr-2' />
                        Aplaudir <span className='before:content-["\2022"] before:p-1'>30</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}