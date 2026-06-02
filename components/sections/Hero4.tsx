"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";

const houseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
            d="M2 20H4M4 20H10M4 20V11.452C4 10.918 4 10.651 4.065 10.402C4.12256 10.1819 4.21725 9.97322 4.345 9.78497C4.49 9.57197 4.691 9.39497 5.093 9.04397L9.894 4.84197C10.64 4.18997 11.013 3.86397 11.432 3.73997C11.802 3.62997 12.197 3.62997 12.567 3.73997C12.987 3.86397 13.361 4.18997 14.107 4.84397L18.907 9.04397C19.309 9.39597 19.51 9.57197 19.655 9.78397C19.783 9.9753 19.8763 10.1813 19.935 10.402C20 10.651 20 10.918 20 11.452V20M10 20H14M10 20V16C10 15.4695 10.2107 14.9608 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9608 14 15.4695 14 16V20M20 20H14M20 20H22"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const slides = [
    {
        image: "/assets/img/all-images/hero/hero-img6.png",
        description:
            "Begin your real estate journey with Housa — where finding, buying, or renting your dream property is simpler, smarter, and more rewarding than ever.",
        showSearch: true,
    },
    {
        image: "/assets/img/all-images/hero/hero-img7.png",
        description:
            "Step into a world of seamless property discovery — Housa helps you explore top listings, connect with trusted agents, and make confident decisions with ease.",
    },
    {
        image: "/assets/img/all-images/hero/hero-img8.png",
        description:
            "Whether you're buying your first home, investing in property, or searching for a rental, Housa guides you every step of the way.",
    },
];

type HeroTab = "buy" | "rent" | "commercial" | "plots";

function HeroSearchPanel() {
    const [activeTab, setActiveTab] = useState<HeroTab>("buy");
    const [query, setQuery] = useState("");

    const tabs: { id: HeroTab; label: string; isNew?: boolean }[] = [
        { id: "buy", label: "Buy" },
        { id: "rent", label: "Rent" },
        { id: "commercial", label: "Commercial", isNew: true },
        { id: "plots", label: "Plots/Land" },
    ];

    return (
        <div className="hero4-search-panel">
            <div className="hero4-search-tabs" role="tablist" aria-label="Property type">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        className={`hero-tab${activeTab === tab.id ? " is-active" : ""}${tab.isNew ? " is-new" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <form
                className="hero4-search-row"
                onSubmit={(e) => {
                    e.preventDefault();
                    const params = new URLSearchParams();
                    if (query.trim()) params.set("q", query.trim());
                    params.set("type", activeTab);
                    window.location.href = `/sidebar-grid?${params.toString()}`;
                }}
            >
                <input
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search city, locality, project…"
                    aria-label="Search location"
                />
                <button type="submit" className="hero4-search-btn" aria-label="Search properties">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </form>
            <p className="hero4-owner-cta">
                Are you a property owner? <Link href="/contact">Post property for FREE</Link>
            </p>
        </div>
    );
}

export default function Hero4() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, Thumbs]}
                spaceBetween={10}
                loop
                watchSlidesProgress
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                className="main-swiper hero4-slider-sectionarea"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.image + slide.description.slice(0, 24)}
                        className="hero4-slider-area"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <img src="/assets/img/all-images/bg/h-bg1.png" alt="" className="h-bg1" aria-hidden />
                        <img src="/assets/img/elements/elements5.png" alt="" className="elements5" aria-hidden />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <div className="hero2-header heading2 hero-content-visible">
                                        <h5>
                                            {houseIcon}
                                            Your Trusted Real Estate Partner
                                        </h5>
                                        <h1>Start Your Property Journey With Housa</h1>
                                        <p className="text-white">{slide.description}</p>
                                        {slide.showSearch ? <HeroSearchPanel /> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={0}
                slidesPerView={3}
                loop
                watchSlidesProgress
                style={{ height: "270px" }}
                className="gallery-thumbs hero4-small-img"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={`thumb-${slide.image}`} className="img1">
                        <img src={slide.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
