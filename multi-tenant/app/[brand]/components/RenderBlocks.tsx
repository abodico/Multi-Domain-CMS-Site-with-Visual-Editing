import HeroSection from "./HeroSection"
import FeaturesSection from "./FeaturesSection"
import ContactSection from "./ContactSection"
import ProductsSection from "./ProductsSection"
import TestimonialsSection from "./TestimonialsSection"
import { headers } from "next/headers"

export async function RenderBlocks({ layout }: { layout: any[] }) {
    const headersList = headers()
    const host = (await headersList).get("host") || ""
    // if it is brand-a then its in English with blue theme
    const isBrandA = host?.includes("brand-a")

    return (
        <div>
            {layout.map((block: any) => {
                switch (block.blockType) {
                    case "hero":
                        return (
                            <HeroSection
                                key={block.id}
                                {...block}
                                isBrandA={isBrandA}
                            />
                        )
                    case "features":
                        return (
                            <FeaturesSection
                                key={block.id}
                                block={block}
                                isBrandA={isBrandA}
                            />
                        )
                    case "products":
                        return (
                            <ProductsSection
                                key={block.id}
                                {...block}
                                isBrandA={isBrandA}
                            />
                        )
                    case "testimonials":
                        return <TestimonialsSection key={block.id} {...block} />
                    case "contact":
                        return (
                            <ContactSection
                                key={block.id}
                                {...block}
                                isBrandA={isBrandA}
                            />
                        )
                    default:
                        return null
                }
            })}
        </div>
    )
}
