import Logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <header className="bg-neutral-800 flex justify-center py-5">
            <img className="h-8" src={Logo} alt="" />
        </header>
    )
}