"use client";
import { usePathname } from "next/navigation"; // Corrected import path
import { useEffect } from "react";

export default function AddClassBody() {
    const pathname = usePathname();

    useEffect(() => {
        const bodyElement = document.querySelector("body");

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove("homepage2-body", "homepage4-body", "homepage3-body", "homepage1-body");

            // Add class based on pathname
            // Add class based on pathname
            if (pathname === "/index2") {
                bodyElement.classList.add("homepage2-body");
            } else if (pathname === "/index3") {
                bodyElement.classList.add("homepage3-body");
            } else {
                // Default: site uses Header4 / homepage4 layout on all other routes
                bodyElement.classList.add("homepage4-body");
            }

            if (!bodyElement.classList.contains("b-bg1")) {
                bodyElement.classList.add("b-bg1");
            }
        }
    }, [pathname]);

    return null;
}
