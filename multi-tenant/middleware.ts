import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getBrandFromHost } from "./lib/brand-config"

export function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || ""
    const url = request.nextUrl.clone()

    console.log("Middleware - hostname:", hostname)
    console.log("Middleware - pathname:", url.pathname)

    // Skip processing for API routes, static files, and Next.js internals
    if (
        url.pathname.startsWith("/api") ||
        url.pathname.startsWith("/_next") ||
        url.pathname.startsWith("/favicon.ico") ||
        url.pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    // Get brand from hostname using shared config
    const brand = getBrandFromHost(hostname)
    const brandId = brand?.id

    if (!brandId) {
        // If no brand found, continue without rewriting
        console.log("No brand found for hostname:", hostname)
        return NextResponse.next()
    }

    console.log("Brand detected:", brandId)

    // Check if already in the correct brand route structure
    if (url.pathname.startsWith(`/${brandId}`)) {
        console.log("Already in brand route")
        return NextResponse.next()
    }

    // Rewrite to brand-specific route
    // This maps brand-a.local/path -> yourapp.com/brand-a/path
    const newPathname = `/${brandId}${url.pathname}`
    url.pathname = newPathname

    console.log("Rewriting to:", newPathname)

    return NextResponse.rewrite(url)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - Any file with an extension
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
    ],
}
