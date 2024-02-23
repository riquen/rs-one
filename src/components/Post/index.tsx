import { Avatar } from "../Avatar"
import { Comment } from "../Comment"

export const Post = () => {
    return (
        <article className="bg-neutral-800 rounded-lg p-10 mt-8 first:mt-0 last:mb-0">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar hasBorder src='https://github.com/hiagorubio.png' />
                    <div>
                        <strong className="block text-neutral-100 leading-relaxed">Henrique Nunes</strong>
                        <span className="block text-sm text-neutral-400 leading-relaxed">Developer</span>
                    </div>
                </div>
                <time className="text-sm text-neutral-400" title="" dateTime="">Publicado há 1h</time>
            </header>
            <div className="leading-relaxed text-neutral-300 mt-6">
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mt-4">Nemo tempora ab minima aut at quasi dolor, fuga nisi totam unde blanditiis, alias odio dolores maiores?</p>
                <p className="mt-4">Officia qui nulla accusantium illo!</p>
            </div>
            <form className="w-full mt-6 pt-6 border-t border-solid border-neutral-600">
                <strong className="leading-relaxed text-neutral-100">Deixe seu feedback</strong>
                <textarea className="w-full bg-neutral-900 resize-none h-24 p-4 rounded-lg text-neutral-100 leading-snug mt-4 focus:outline-none focus:outline-green-500 peer" placeholder="Deixe um comentário" />
                <footer className="invisible max-h-0 peer-focus:visible peer-focus:max-h-none">
                    <button className="py-4 px-6 mt-4 rounded-lg bg-green-500 text-neutral-100 font-bold cursor-pointer hover:bg-green-300 transition-colors duration-100" type="submit">Publicar</button>
                </footer>
            </form>
            <div className="mt-8">
                <Comment />
            </div>
        </article>
    )
}