import Image from "next/image"
import Img from "@/assets/media/White-Logo.webp"

export const Logo = () => {
    return (
        <Image
            src={Img}
            alt="Logo Octa Studio"
            width={170}
            height={55}
            priority
            className="w-full h-auto"
        />
    )
}
