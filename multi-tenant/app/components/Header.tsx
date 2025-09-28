import axios from "axios"
import React from "react"

interface Link {
    label: string
    href: string
    id: string
}
const Header = async ({ isBrandA }: { isBrandA: boolean }) => {
    const locale: "en" | "ar" = isBrandA ? "en" : "ar"
    try {
        // Fetch tenant-specific homepage
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/navigation?locale=${locale}`
        )

        return (
            <div
                className={`flex items-center gap-20 py-7 px-6 sticky top-0 z-50 backdrop-blur bg-white/40 border-b ${isBrandA ? "border-blue-200" : "border-green-200"}`}
                dir={res.data.direction}
            >
                <h2
                    className={`text-4xl ${isBrandA ? "text-blue-400 hover:text-blue-500" : "text-green-400 hover:text-green-500"} transition-all`}
                >
                    <a href="/">{res.data.brandName}</a>
                </h2>
                <ul className="flex gap-6 text-lg">
                    {res.data.links.map((item: Link) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className={`${isBrandA ? "hover:text-blue-400" : "hover:text-green-400"} transition-all`}
                            >
                                {item.label}
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
