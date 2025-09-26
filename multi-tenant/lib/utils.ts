import { BrandConfig } from "./brand-config"

export const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL

export function generateThemeCSS(brand: BrandConfig): string {
    return `
    :root {
      --brand-primary: ${brand.theme.primary};
      --brand-secondary: ${brand.theme.secondary};
      --brand-accent: ${brand.theme.accent};
      --brand-background: ${brand.theme.background};
      --brand-foreground: ${brand.theme.foreground};
    }
  `
}
