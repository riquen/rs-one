interface AvatarProps {
    src: string
    hasBorder?: boolean
}

export const Avatar = ({ src, hasBorder = false }: AvatarProps) => {
    return (
        <img className={`w-12 h-12 rounded-lg ${hasBorder && 'border-4 border-solid border-neutral-800 outline-2 outline outline-green-500 box-content'}`} src={src} alt="" />
    )
}