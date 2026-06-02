'use client'
import Link from "next/link";
import AuthModal from "@/components/elements/authModal";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }: any) {
    const { user, logout } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*=====HEADER START=======*/}
            <header className="homepage4-body homepage4-site-header">
                <div id="vl-header-sticky" className={`vl-header-area vl-transparent-header ${scroll ? "header-sticky" : ""}`}>
                    <div className="container homepage4-header-container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-5">
                                <div className="vl-logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/proputy-logo.png" alt="Proputy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none d-lg-block">
                                <div className="vl-main-menu text-center">
                                    <nav className="vl-mobile-menu-active">
                                        <ul>
                                            <li className="has-dropdown">
                                                <Link href="/">
                                                    Home
                                                    {/* <span>
                                                        <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                    </span> */}
                                                </Link>
                                                {/* <div className="vl-mega-menu">
                                                    <div className="vl-home-menu">
                                                        <div className="row gx-3 row-cols-1 row-cols-md-1 row-cols-lg-4">
                                                            <div className="col">
                                                                <div className="vl-home-thumb">
                                                                    <div className="img1">
                                                                        <img src="/assets/img/all-images/demo/demo-img1.png" alt="housa" />
                                                                    </div>
                                                                    <Link href="/">Housa - Homepage 01</Link>
                                                                    <div className="btn-area1">
                                                                        <Link href="/" className="vl-btn1">
                                                                            View Demo
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="space20 d-lg-none d-block" />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="vl-home-thumb">
                                                                    <div className="img1">
                                                                        <img src="/assets/img/all-images/demo/demo-img2.png" alt="housa" />
                                                                    </div>
                                                                    <Link href="/index2">Housa - Homepage 02</Link>
                                                                    <div className="btn-area1">
                                                                        <Link href="/index2" className="vl-btn1">
                                                                            View Demo
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="space20 d-lg-none d-block" />
                                                                </div>
                                                            </div>
                                                            <div className="col ">
                                                                <div className="vl-home-thumb">
                                                                    <div className="img1">
                                                                        <img src="/assets/img/all-images/demo/demo-img3.png" alt="housa" />
                                                                    </div>
                                                                    <Link href="/index3">Housa - Homepage 03</Link>
                                                                    <div className="btn-area1">
                                                                        <Link href="/index3" className="vl-btn1">
                                                                            View Demo
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="space20 d-lg-none d-block" />
                                                                </div>
                                                            </div>
                                                            <div className="col ">
                                                                <div className="vl-home-thumb">
                                                                    <div className="img1">
                                                                        <img src="/assets/img/all-images/demo/demo-img4.png" alt="housa" />
                                                                    </div>
                                                                    <Link href="/index4">Housa - Homepage 04</Link>
                                                                    <div className="btn-area1">
                                                                        <Link href="/index4" className="vl-btn1">
                                                                            View Demo
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="space20 d-lg-none d-block" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="#">
                                                    Pages
                                                    <span>
                                                        <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                    </span>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/about-us">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-service">Our Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pricing">Pricing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">Contact Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faq">FAQ's</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/sidebar-grid">
                                                    Listing
                                                    {/* <span>
                                                        <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                    </span> */}
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/property-halfmap-grid">Property Half Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-halfmap-list">Property Half Map List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/topmap-grid">Property Top Map Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/topmap-list">Property Top Map List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sidebar-grid">Find Sidebar Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sidebar-list">Find Sidebar List</Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/property-details-v1">
                                                    Properties
                                                    {/* <span>
                                                        <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                    </span> */}
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/property-details-v1">Property Details 01</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v2">Property Details 02</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v3">Property Details 03</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v4">Property Details 04</Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            {user && user.email && (
                                                <>
                                                <li>
                                                    <Link href="/dashboard">
                                                        Dashboard
                                                        {/* <span>
                                                            <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                        </span> */}
                                                    </Link>
                                                    {/* <ul className="sub-menu">
                                                        <li>
                                                            <Link href="/dashboard">Dashboard</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/my-property">My Properties</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/message">Message</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/my-favorites">My Favourites</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/reviews">Reviews</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/my-profile">My Propfile</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/add-property">Add Property</Link>
                                                        </li>
                                                    </ul> */}
                                                </li>
                                                {user.role === 'admin' && (
                                                    <li>
                                                        <Link href="/admin">
                                                            Admin
                                                            {/* <span>
                                                                <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                            </span> */}
                                                        </Link>
                                                        {/* <ul className="sub-menu">
                                                            <li>
                                                                <Link href="/dashboard">Dashboard</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/my-property">My Properties</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/message">Message</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/my-favorites">My Favourites</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/reviews">Reviews</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/my-profile">My Propfile</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/add-property">Add Property</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                )}
                                                </>
                                            )}
                                            <li>
                                                <Link href="/blog">
                                                    Blogs
                                                    {/* <span>
                                                        <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                    </span> */}
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog">Blog Default</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-grid">Blog Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-detail">Blog Post Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-detail-2">Blog Post Details 2</Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-7">
                                <div className="vl-hero-btn text-end d-none d-lg-flex align-items-center justify-content-end">
                                    <div className="search-icon header__search header-search-btn">
                                        <Link href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                                <path d="M21.1855 21.1845L25.3337 25.3327M6.66699 14.9623C6.66699 17.1626 7.54106 19.2728 9.09692 20.8287C10.6528 22.3845 12.763 23.2586 14.9633 23.2586C17.1636 23.2586 19.2738 22.3845 20.8297 20.8287C22.3855 19.2728 23.2596 17.1626 23.2596 14.9623C23.2596 12.762 22.3855 10.6518 20.8297 9.09594C19.2738 7.54009 17.1636 6.66602 14.9633 6.66602C12.763 6.66602 10.6528 7.54009 9.09692 9.09594C7.54106 10.6518 6.66699 12.762 6.66699 14.9623Z" stroke="#111111" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    {user && user.email ? (
                                        <>
                                            <div className="btn-area1">
                                                <Link href="/add-property" className="vl-btn1">
                                                    Add Listing
                                                    <span className="arrow1 ms-2">
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span className="arrow2 ms-2">
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <button
                                                onClick={() => logout()}
                                                className="mx-2"
                                                style={{ color: "red", border: "none", background: "none" }}
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={() => setIsOpen(true)}
                                                className="px-4 py-2 text-white"
                                                style={{ borderRadius: "20px", border: "none", background: "#1800ad" }}
                                            >
                                                Login
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="homepage4-mobile-header-actions d-flex d-lg-none align-items-center justify-content-end">
                                    <Link href="/add-property" className="homepage4-post-property-btn">
                                        Post Property
                                        <span className="homepage4-free-badge">FREE</span>
                                    </Link>
                                    <button
                                        type="button"
                                        className="homepage4-mobile-menu-btn vl-offcanvas-toggle"
                                        data-react-menu="true"
                                        aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                                        aria-expanded={isMobileMenu}
                                        onClick={() => handleMobileMenu?.()}
                                    >
                                        <i className={`fa-solid ${isMobileMenu ? "fa-xmark" : "fa-bars"}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*=====HEADER END =======*/}
            {/*===== SEARCH STARTS=======*/}
            <div className="header-search-form-wrapper">
                <div className="tx-search-close tx-close">
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="header-search-container">
                    <form role="search" className="search-form">
                        <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
                        <button type="submit" className="search-submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                <path d="M21.1855 21.1845L25.3337 25.3327M6.66699 14.9623C6.66699 17.1626 7.54106 19.2728 9.09692 20.8287C10.6528 22.3845 12.763 23.2586 14.9633 23.2586C17.1636 23.2586 19.2738 22.3845 20.8297 20.8287C22.3855 19.2728 23.2596 17.1626 23.2596 14.9623C23.2596 12.762 22.3855 10.6518 20.8297 9.09594C19.2738 7.54009 17.1636 6.66602 14.9633 6.66602C12.763 6.66602 10.6528 7.54009 9.09692 9.09594C7.54106 10.6518 6.66699 12.762 6.66699 14.9623Z" stroke="#111111" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="body-overlay" />
            {/*===== SEARCH ENDS STARTS=======*/}
                {isOpen && (
                <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
        </>
    );
}
