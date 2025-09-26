import axios from "axios"
import React from "react"

interface Link {
    label: string
    href: string
    id: string
}
const Header = async ({ isBrandA }: { isBrandA: boolean }) => {
    const translations: Record<string, string> = {
        Home: "الرئيسية",
        About: "من نحن",
        Brand: "براند",
    }
    try {
        // Fetch tenant-specific homepage
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/navigation`
        )

        return (
            <div
                className={`flex items-center gap-20 py-7 px-6 sticky top-0 z-50 backdrop-blur bg-white/40 border-b ${isBrandA ? "border-blue-200" : "border-green-200"}`}
            >
                <h2
                    className={`text-4xl ${isBrandA ? "text-blue-400 hover:text-blue-500" : "text-green-400 hover:text-green-500"} transition-all`}
                >
                    <a href="/">{isBrandA ? "Brand" : translations["Brand"]}</a>
                </h2>
                <ul className="flex gap-6 text-lg">
                    {res.data.links.map((item: Link) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className={`${isBrandA ? "hover:text-blue-400" : "hover:text-green-400"} transition-all`}
                            >
                                {isBrandA
                                    ? item.label
                                    : translations[item.label]}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } catch (error) {
        console.error("Error fetching page data:", error)
    }
}

export default Header
