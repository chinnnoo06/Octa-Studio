"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { primaryButton } from "@/utils/styles/button"
import { NAV_LINKS } from "@/utils/constants";
import { useBusinessStatus } from "@/hooks/useBusinessStatus";

type MobileNavProps = {
    menuVisible: boolean
    activeSection: string
    toggleMenu: () => void
    sectionHref: (hash: string) => string
}

export const MobileNav = ({ menuVisible, activeSection, toggleMenu, sectionHref }: MobileNavProps) => {
    const status = useBusinessStatus()

    return (
        <div
            inert={!menuVisible}
            aria-hidden={!menuVisible}
            className={`lg:hidden fixed inset-x-0 top-18 bottom-0 z-40 transition-opacity duration-300 ${menuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute inset-0 bg-[#1D3D72] backdrop-blur-md" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,129,198,0.10),transparent_55%)]" />

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#E52329] to-transparent" />

            <div
                className={`absolute inset-0 origin-top overflow-y-auto overflow-x-hidden overscroll-contain flex flex-col py-5 px-5 transition-transform duration-300 ease-out ${menuVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <span className="inline-flex items-center gap-2.5 font-display text-xs font-semibold tracking-[0.3em] uppercase text-white">
                    <span className="w-7.5 h-0.5 bg-white" />
                    Menú
                </span>

                <nav aria-label="Menú móvil" className="mt-5">
                    <ul role="list" className="flex flex-col">
                        {NAV_LINKS.map((link, i) => {
                            const isActive = link.href === `#${activeSection}`

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={sectionHref(link.href)}
                                        onClick={toggleMenu}
                                        aria-current={isActive ? "page" : undefined}
                                        style={{ transitionDelay: menuVisible ? `${120 + i * 60}ms` : "0ms" }}
                                        className={`group relative flex items-baseline justify-between border-b py-5 pl-5 transition-all duration-300 ${menuVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                                            } ${isActive ? "border-[#E52329]/50" : "border-white/25"}`}
                                    >
                                        <span
                                            className={`absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-[#E52329] transition-all duration-300 ${isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                                                }`}
                                        />

                                        <span className="flex items-baseline gap-5">
                                            <span className={`font-display text-xs font-medium tracking-[0.3em] transition-all duration-300 ${isActive ? "text-[#E52329]" : "text-white group-hover:text-[#E52329]"}`}>
                                                0{i + 1}
                                            </span>
                                            <span className={`font-display text-xl font-medium uppercase tracking-widest transition-colors duration-300 group-hover:text-[#E52329] ${isActive ? "text-[#E52329]" : "text-white"
                                                }`}>
                                                {link.label}
                                            </span>
                                        </span>
                                        <HiOutlineArrowLongRight className={`w-3.5 h-3.5 stroke-2 text-[#E52329] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                            }`} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-5 pt-5 border-t border-white/25">
                    {status && (
                        <p className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                {status.isOpen && (
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
                                )}
                                <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.isOpen ? "bg-[#4ADE80]" : "bg-[#E52329]"
                                    }`} />
                            </span>

                            <span className={`font-display text-xs font-semibold uppercase tracking-[0.14em] ${status.isOpen ? "text-white" : "text-white/60"
                                }`}>
                                {status.label}
                            </span>
                        </p>
                    )}

                    <Link
                        href={sectionHref("#contacto")}
                        onClick={toggleMenu}
                        className={`${primaryButton} flex w-full items-center justify-center gap-2.5`}
                    >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                        Pedir Ahora
                    </Link>

                </div>
            </div>
        </div>
    )
}
