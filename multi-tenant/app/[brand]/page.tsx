import { headers } from "next/headers"
import { notFound } from "next/navigation"
import axios from "axios"
import { getBrandFromHost, getBrandById } from "@/lib/brand-config"
import { RenderBlocks } from "./components/RenderBlocks"

export type PageData = {
    title: string
    slug: string
    layout: any[]
    direction: string
}

const Page = async ({ params }: { params: { brand: string } }) => {
    const headersList = headers()
    const host = (await headersList).get("host") || ""

    // if it is brand-a then its in English with blue theme
    const isBrandA = host?.includes("brand-a")
    const locale: "en" | "ar" = isBrandA ? "en" : "ar"
    // جرّب نجيب البراند من الـ URL params
    let brand = getBrandById(params.brand)
    // fallback: من الـ host
    if (!brand) {
        brand = getBrandFromHost(host)
    }

    if (!brand) return notFound()

    try {
        // Fetch tenant-specific homepage
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${brand.id}-home&locale=${locale}`
        )

        if (!res.data?.docs?.length) return notFound()

        const page: PageData = res.data.docs[0]

        return (
            <main dir={page.direction}>
                <RenderBlocks layout={page.layout || []} />
            </main>
        )
    } catch (error) {
        console.error("Error fetching page data:", error)
        return notFound()
    }
}

export default Page
