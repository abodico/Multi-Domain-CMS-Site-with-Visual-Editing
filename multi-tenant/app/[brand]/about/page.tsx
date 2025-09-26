import React from "react"
import axios from "axios"
import { notFound } from "next/navigation"
import { headers } from "next/headers"
import Image from "next/image"
import { PageData } from "../page"

type Block =
    | {
          blockType: "hero"
          heading: string
          subheading?: string
          backgroundImage?: string
          ctaButton?: { text?: string; link?: string }
      }
    | {
          blockType: "features"
          heading?: string
          features: {
              title: string
              description?: string
              icon?: string
          }[]
      }

const page = async () => {
    const headersList = headers()
    const host = (await headersList).get("host") || ""
    // if it is brand-a then its in English with blue theme
    const brand = host?.includes("brand-a") ? "brand-a" : "brand-b"
    const isBrandA = host?.includes("brand-a")

    try {
        // Fetch tenant-specific homepage
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${brand}-about`
        )

        if (!res.data?.docs?.length) return notFound()

        const page: PageData = res.data.docs[0]
        console.log(res.data)
        return (
            <div dir={isBrandA ? "ltr" : "rtl"} className="bg-gray-50">
                {page.layout.map((block, i) => {
                    switch (block.blockType) {
                        case "hero":
                            return (
                                <section
                                    key={i}
                                    className="relative h-[60vh] flex items-center justify-center text-center text-white"
                                >
                                    {/* Background image */}
                                    {block.backgroundImage && (
                                        <Image
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_PAYLOAD_URL +
                                                block.backgroundImage.url
                                            } // ✅ served by Payload
                                            alt={block.heading || ""}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    )}
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50"></div>

                                    <div className="relative z-10 max-w-3xl">
                                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                            {page.title}
                                        </h1>
                                        {block.subheading && (
                                            <p className="text-lg md:text-xl mb-6 opacity-90">
                                                {block.subheading}
                                            </p>
                                        )}
                                        {block.ctaButton?.text && (
                                            <a
                                                href={block.ctaButton.link}
                                                className={`px-6 py-3 rounded-full font-semibold transition ${
                                                    isBrandA
                                                        ? "bg-blue-600 hover:bg-blue-700"
                                                        : "bg-green-600 hover:bg-green-700"
                                                }`}
                                            >
                                                {block.ctaButton.text}
                                            </a>
                                        )}
                                    </div>
                                </section>
                            )

                        case "features":
                            return (
                                <section
                                    key={i}
                                    className="py-16 container mx-auto px-4 text-center"
                                >
                                    <h2 className="text-3xl font-bold mb-10">
                                        {block.heading}
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {block?.features.map(
                                            (f: any, j: number) => (
                                                <div
                                                    key={j}
                                                    className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-3"
                                                >
                                                    {f.icon && (
                                                        <i
                                                            className={`${f.icon} text-4xl ${
                                                                isBrandA
                                                                    ? "text-blue-600"
                                                                    : "text-green-600"
                                                            }`}
                                                            aria-hidden="true"
                                                        ></i>
                                                    )}
                                                    <h3 className="text-xl font-semibold">
                                                        {f.title}
                                                    </h3>
                                                    {f.description && (
                                                        <p className="text-gray-600">
                                                            {f.description}
                                                        </p>
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )

                        default:
                            return null
                    }
                })}
            </div>
        )
    } catch (e) {
        console.log(e)
    }
}

export default page
