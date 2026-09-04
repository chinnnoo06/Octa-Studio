import Image from "next/image"
import Img from "@/assets/media/brand/ImgWhiteLogo.png"

/** El mismo logo sale a 72/92px en el header y a 140/160px en el footer:
 *  cada sitio declara su `sizes` o se descarga la variante del más grande. */
export const Logo = ({ sizes }: { sizes: string }) => {
    return (
        <Image
            src={Img}
            alt="Logo Octa Studio"
            sizes={sizes}
            priority
            className="w-full h-auto"
        />
    )
}
