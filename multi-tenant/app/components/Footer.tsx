import React from "react"
import axios from "axios"
import Socials from "./Socials"

type FooterLink = { label: string; href: string }
export type FooterSocial = { label: string; href: string; icon: string }

const Footer = async ({ isBrandA }: { isBrandA: boolean }) => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/footer`
        )
        const data = res.data

        const bgClass = !isBrandA ? "bg-green-700" : "bg-blue-700"
        const hoverClass = !isBrandA
            ? "hover:text-green-300"
            : "hover:text-blue-300"
        const translations: Record<string, string> = {
            Home: "الرئيسية",
            About: "من نحن",
        }
        return (
            <footer
                className={`${bgClass} text-white py-10 px-4`}
                dir={!isBrandA ? "rtl" : "ltr"}
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-start lg:gap-20 gap-6">
                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-4">
                            {!isBrandA ? "روابط" : "Links"}
                        </h4>
                        <ul className="space-y-2">
                            {data?.links?.map((link: FooterLink, i: number) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className={`${hoverClass} transition-colors`}
                                    >
                                        {isBrandA
                                            ? link.label
                                            : translations[link.label]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <Socials
                        data={data}
                        isBrandA={isBrandA}
                        hoverClass={hoverClass}
                    />
                </div>

                <div className="text-center mt-8 text-sm opacity-70">
                    {!isBrandA
                        ? `© ${new Date().getFullYear()} جميع الحقوق محفوظة لشركتك`
                        : `© ${new Date().getFullYear()} Your Company. All rights reserved.`}
                </div>
            </footer>
        )
    } catch (err) {
        console.error(err)
    }
}

export default Footer
