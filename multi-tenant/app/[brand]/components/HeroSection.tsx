"use client"
import { Button } from "@mui/material"

type HeroProps = {
    heading: string
    subheading: string
    backgroundImage: { url: string }
    ctaButton?: { text: string; link: string }
    isBrandA: boolean
}

export default function HeroSection({
    heading,
    subheading,
    backgroundImage,
    ctaButton,
    isBrandA,
}: HeroProps) {
    return (
        <section
            className="relative w-full h-[70vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_PAYLOAD_URL + backgroundImage?.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-black/50 w-full h-full absolute inset-0" />
            <div className="relative z-10 space-y-4 px-6">
                <h1 className="text-4xl md:text-6xl font-bold">{heading}</h1>
                {subheading && (
                    <p className="text-lg md:text-2xl">{subheading}</p>
                )}
                {ctaButton?.text && (
                    <Button
                        variant="contained"
                        color={isBrandA ? "primary" : "success"}
                        href={ctaButton.link}
                        className="!mt-4"
                    >
                        {ctaButton.text}
                    </Button>
                )}
            </div>
        </section>
    )
}
