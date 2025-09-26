"use client"
import Image from "next/image"
import { Card, CardContent, Typography, Button } from "@mui/material"

type Product = {
    name: string
    description?: string
    price?: number
    image?: { url: string }
}

type ProductsProps = {
    heading?: string
    products: Product[]
    isBrandA: boolean
}

export default function ProductsSection({
    heading,
    products,
    isBrandA,
}: ProductsProps) {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {heading && (
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        {heading}
                    </h2>
                )}
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((p, idx) => (
                        <Card key={idx} className="rounded-2xl shadow-lg">
                            {p.image?.url && (
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_PAYLOAD_URL +
                                        p.image.url
                                    }
                                    alt={p.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-56 object-contain rounded-t-2xl"
                                />
                            )}
                            <CardContent>
                                <Typography variant="h6">{p.name}</Typography>
                                <Typography
                                    variant="body2"
                                    className="text-gray-600 mt-2"
                                >
                                    {p.description}
                                </Typography>
                                {p.price && (
                                    <Typography
                                        variant="subtitle1"
                                        className="mt-3 font-semibold"
                                    >
                                        ${p.price}
                                    </Typography>
                                )}
                                <Button
                                    variant="outlined"
                                    color={isBrandA ? "primary" : "success"}
                                    className="!mt-4"
                                >
                                    {isBrandA ? "Show Details" : "عرض التفاصيل"}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
