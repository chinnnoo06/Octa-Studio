import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            src="/images/shared/logo-navbar.svg"
            alt="Logo Octa Studio"
            width={170}
            height={55}
            priority
            className="w-full h-auto"
        />
    )
}
