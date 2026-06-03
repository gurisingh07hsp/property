"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MobileMenuProps = {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
};

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const closeMenu = () => {
        if (isMobileMenu) handleMobileMenu();
    };

    const toggleSection = (key: number) => {
        setOpenSection((prev) => (prev === key ? null : key));
    };

    useEffect(() => {
        document.body.style.overflow = isMobileMenu ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenu]);

    const navLink = (href: string, label: string) => (
        <Link href={href} onClick={closeMenu}>
            {label}
        </Link>
    );

    return (
        <>
            <div className={`vl-offcanvas ${isMobileMenu ? "vl-offcanvas-open" : ""}`} aria-hidden={!isMobileMenu}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center">
                        <div className="vl-offcanvas-logo">
                            <Link href="/" onClick={closeMenu}>
                                <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
                            </Link>
                        </div>
                        <div className="vl-offcanvas-close">
                            <button
                                type="button"
                                className="vl-offcanvas-close-toggle"
                                aria-label="Close menu"
                                onClick={handleMobileMenu}
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                    </div>

                    <div className="homepage4-offcanvas-cta">
                        <Link href="/add-property" className="homepage4-offcanvas-list-btn" onClick={closeMenu}>
                            <i className="fa-solid fa-plus" aria-hidden />
                            List your property
                            <span className="homepage4-free-badge">FREE</span>
                        </Link>
                    </div>

                    <div className="vl-offcanvas-menu">
                        <nav>
                            <ul>
                                <li>{navLink("/", "Home")}</li>
                                <li className={`has-dropdown ${openSection === 2 ? "active" : ""}`}>
                                    <div className="homepage4-menu-row">
                                        <span className="homepage4-menu-label">Pages</span>
                                        <button
                                            type="button"
                                            className="vl-menu-close homepage4-submenu-toggle"
                                            aria-label="Toggle pages submenu"
                                            aria-expanded={openSection === 2}
                                            onClick={() => toggleSection(2)}
                                        >
                                            <i className={`fas fa-chevron-${openSection === 2 ? "down" : "right"}`} />
                                        </button>
                                    </div>
                                    <ul className="sub-menu" style={{ display: openSection === 2 ? "block" : "none" }}>
                                        <li>{navLink("/about-us", "About Us")}</li>
                                        <li>{navLink("/our-service", "Our Services")}</li>
                                        <li>{navLink("/pricing", "Pricing")}</li>
                                        <li>{navLink("/contact", "Contact Us")}</li>
                                        <li>{navLink("/faq", "FAQ's")}</li>
                                        <li>{navLink("/privacy-policy", "Privacy Policy")}</li>
                                    </ul>
                                </li>
                                <li>{navLink("/sidebar-grid", "Listing")}</li>
                                <li>{navLink("/property-details-v1", "Properties")}</li>
                                <li>{navLink("/dashboard", "Dashboard")}</li>
                                <li>{navLink("/blog", "Blogs")}</li>
                                <li>{navLink("/add-property", "Add Property")}</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="vl-offcanvas-info">
                        <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                        <span>
                            <Link href="tel:+5799546476" onClick={closeMenu}>
                                <i className="fa-solid fa-phone" /> +57 9954 6476
                            </Link>
                        </span>
                        <span>
                            <Link href="mailto:hello@exdos.com" onClick={closeMenu}>
                                <i className="fa-regular fa-envelope" /> hello@exdos.com
                            </Link>
                        </span>
                        <span>
                            <Link href="/contact" onClick={closeMenu}>
                                <i className="fa-solid fa-location-dot" /> Bhemeara, Kushtia
                            </Link>
                        </span>
                    </div>

                    <div className="vl-offcanvas-social">
                        <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                        <Link href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className={`vl-offcanvas-overlay ${isMobileMenu ? "vl-offcanvas-overlay-open" : ""}`}
                onClick={handleMobileMenu}
                aria-hidden={!isMobileMenu}
            />
        </>
    );
}
