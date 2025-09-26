"use client"
import Image from "next/image"

type Testimonial = {
    author: string
    role?: string
    quote: string
    avatar?: { url: string }
}

type TestimonialsProps = {
    heading?: string
    testimonials: Testimonial[]
}

export default function TestimonialsSection({
    heading,
    testimonials,
}: TestimonialsProps) {
    return (
        <section className="py-16 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto">
                {heading && (
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        {heading}
                    </h2>
                )}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow p-6 flex flex-col"
                        >
                            <p className="italic text-gray-700">“{t.quote}”</p>
                            <div className="flex items-center mt-6 gap-3">
                                {t.avatar?.url && (
                                    <Image
                                        src={
                                            process.env
                                                .NEXT_PUBLIC_PAYLOAD_URL +
                                            t.avatar.url
                                        }
                                        alt={t.author}
                                        width={50}
                                        height={50}
                                        className="rounded-full "
                                    />
                                )}
                                <div>
                                    <p className="font-semibold">{t.author}</p>
                                    {t.role && (
                                        <p className="text-sm text-gray-500">
                                            {t.role}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
