type ContactProps = {
    heading?: string
    contacts?: {
        type: string
        label: string
        value: string
        icon: string
    }[]
    isBrandA: boolean
}

export default function ContactSection({
    heading,
    contacts = [],
    isBrandA,
}: ContactProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {heading && (
                    <h2 className="text-3xl font-bold mb-8">{heading}</h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                    {contacts.map((c, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <i
                                aria-hidden="true"
                                className={`${c.icon} ${isBrandA ? "text-blue-600" : "text-green-600"} text-2xl mb-3`}
                            ></i>
                            <h3 className="font-semibold">{c.label}</h3>
                            <p>{c.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
