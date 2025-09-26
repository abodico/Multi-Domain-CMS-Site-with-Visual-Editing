export interface BrandConfig {
    id: string
    name: string
    domain: string
    locale: string
    direction: "ltr" | "rtl"
    theme: {
        primary: string
        secondary: string
        accent: string
        background: string
        foreground: string
    }
    logo: string
    favicon: string
}

export const brandConfigs: Record<string, BrandConfig> = {
    "brand-a": {
        id: "brand-a",
        name: "Brand A",
        domain: "brand-a.local",
        locale: "en",
        direction: "ltr",
        theme: {
            primary: "hsl(221, 83%, 53%)", // Blue
            secondary: "hsl(210, 40%, 98%)",
            accent: "hsl(221, 83%, 53%)",
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(222, 84%, 5%)",
        },
        logo: "/logos/brand-a.svg",
        favicon: "/favicons/brand-a.ico",
    },
    "brand-b": {
        id: "brand-b",
        name: "Brand B",
        domain: "brand-b.local",
        locale: "ar",
        direction: "rtl",
        theme: {
            primary: "hsl(142, 76%, 36%)", // Green
            secondary: "hsl(138, 76%, 97%)",
            accent: "hsl(142, 76%, 36%)",
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(240, 10%, 4%)",
        },
        logo: "/logos/brand-b.svg",
        favicon: "/favicons/brand-b.ico",
    },
}

export function getBrandFromHost(host: string): BrandConfig | null {
    const cleanHost = host.split(":")[0]

    const brand = Object.values(brandConfigs).find(
        (b) =>
            b.domain === cleanHost ||
            cleanHost.startsWith(b.domain.split(".")[0] + ".")
    )

    return brand || null
}

export function getBrandById(brandId: string): BrandConfig | null {
    return brandConfigs[brandId] || null
}

export function getAllBrandIds(): string[] {
    return Object.keys(brandConfigs)
}
