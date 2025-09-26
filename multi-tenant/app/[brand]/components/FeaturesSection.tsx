type FeaturesBlockProps = {
    block: {
        features: {
            id: string
            title: string
            description: string
            icon: string
        }[]
        heading: string
    }
    isBrandA: boolean
}

export default function FeaturesSection({
    block,
    isBrandA,
}: FeaturesBlockProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-800">
                    {block.heading}
                </h2>
                <div
                    className={`mt-2 w-20 h-1 ${isBrandA ? "bg-blue-500" : "bg-green-500"} mx-auto rounded`}
                ></div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                {block?.features?.map((f) => (
                    <div
                        key={f.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
                    >
                        {f.icon && (
                            <div
                                className={`w-16 h-16 flex items-center justify-center bg-blue-100 ${isBrandA ? "text-blue-600" : "text-green-600"} rounded-full mb-4 text-2xl`}
                            >
                                <i className={f.icon} aria-hidden="true"></i>
                            </div>
                        )}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {f.title}
                        </h3>

                        <p className="text-gray-600 text-sm">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
