"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export interface PropertyGridCardData {
    id: number;
    keyword: string;
    address: string;
    city: string;
    state: string;
    status: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    minPrice: number;
    minSize: number;
    maxSize: number;
}

interface PropertyGridCardProps {
    property: PropertyGridCardData;
    image: ReactNode;
    isFavorite?: boolean;
    onFavoriteToggle?: (e: React.MouseEvent) => void;
    agentName?: string;
    agentImage?: string;
    photoCount?: number;
}

export default function PropertyGridCard({
    property,
    image,
    isFavorite = false,
    onFavoriteToggle,
    agentName = "Santiago Towne",
    agentImage = "/assets/img/all-images/others/others-img1.png",
    photoCount = 3,
}: PropertyGridCardProps) {
    const priceLabel =
        property.status === "For Rent" || property.status === "rent"
            ? `$${property.minPrice.toLocaleString()}`
            : `$${property.minPrice.toLocaleString()}`;

    return (
        <article className="property-card-grid">
            <div className="property-card-grid__media">
                <div className="property-card-grid__image">{image}</div>
                <div className="property-card-grid__badges">
                    <Link href={`/property-details/${property.id}`} className="property-card-grid__badge">
                        {property.type}
                    </Link>
                    <Link href={`/property-details/${property.id}`} className="property-card-grid__badge property-card-grid__badge--status">
                        {property.status}
                    </Link>
                </div>
                <span className="property-card-grid__photos">
                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} viewBox="0 0 16 14" fill="none" aria-hidden>
                        <path
                            d="M12 7.39995C12 8.75995 10.96 9.79995 9.6 9.79995C8.24 9.79995 7.2 8.75995 7.2 7.39995C7.2 6.03995 8.24 4.99995 9.6 4.99995C10.96 4.99995 12 6.03995 12 7.39995ZM16 3.39995V12.2C16 13.08 15.28 13.8 14.4 13.8H1.6C0.72 13.8 0 13.08 0 12.2V3.39995C0 2.51995 0.72 1.79995 1.6 1.79995V0.999951H4.8V1.79995H6.4L7.2 0.199951H12L12.8 1.79995H14.4C15.28 1.79995 16 2.51995 16 3.39995ZM4.4 4.99995C4.4 4.35995 3.84 3.79995 3.2 3.79995C2.56 3.79995 2 4.35995 2 4.99995C2 5.63995 2.56 6.19995 3.2 6.19995C3.84 6.19995 4.4 5.63995 4.4 4.99995ZM13.6 7.39995C13.6 5.15995 11.84 3.39995 9.6 3.39995C7.36 3.39995 5.6 5.15995 5.6 7.39995C5.6 9.63995 7.36 11.4 9.6 11.4C11.84 11.4 13.6 9.63995 13.6 7.39995Z"
                            fill="currentColor"
                        />
                    </svg>
                    {photoCount}
                </span>
            </div>

            <div className="property-card-grid__body">
                <div className="property-card-grid__info">
                    <Link href={`/property-details/${property.id}`} className="property-card-grid__title">
                        {property.keyword}
                    </Link>
                    <p className="property-card-grid__address">
                        {property.address}, {property.city}, {property.state}
                    </p>
                    <Link href={`/property-details/${property.id}`} className="property-card-grid__price">
                        {priceLabel}
                    </Link>
                </div>

                <ul className="property-card-grid__specs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M8 9H16M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M3 21H21V3.00046L3 3V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <span>
                            {property.minSize}-{property.maxSize} sqft
                        </span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M22 17.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 12V10.6178C16 10.1103 15.9085 9.94054 15.4396 9.7405C14.4631 9.32389 13.2778 9 12 9C10.7222 9 9.53688 9.32389 8.5604 9.7405C8.09154 9.94054 8 10.1103 8 10.6178V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M20 12V7.36057C20 6.66893 20 6.32311 19.8292 5.99653C19.6584 5.66995 19.4151 5.50091 18.9284 5.16283C16.9661 3.79978 14.5772 3 12 3C9.42282 3 7.03391 3.79978 5.07163 5.16283C4.58492 5.50091 4.34157 5.66995 4.17079 5.99653C4 6.32311 4 6.66893 4 7.36057V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>{property.bedrooms} Beds</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M6 20L5 21M18 20L19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 6L10.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>{property.bathrooms} Baths</span>
                    </li>
                </ul>

                <div className="property-card-grid__footer">
                    <div className="property-card-grid__agent">
                        <img src={agentImage} alt="" className="property-card-grid__agent-img" />
                        <Link href="#" className="property-card-grid__agent-name">
                            {agentName}
                        </Link>
                    </div>
                    <div className="property-card-grid__actions">
                        <button
                            type="button"
                            className={`property-card-grid__action ${isFavorite ? "is-active" : ""}`}
                            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                            onClick={onFavoriteToggle}
                        >
                            <img
                                src={isFavorite ? "/assets/img/icons/heart2.svg" : "/assets/img/icons/heart1.svg"}
                                alt=""
                            />
                        </button>
                        <button type="button" className="property-card-grid__action" aria-label="Share listing">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 19 20" fill="none" aria-hidden>
                                <path
                                    d="M11.0373 14.6505L7.14942 12.5297C6.47355 13.2521 5.51175 13.7034 4.44452 13.7034C2.39902 13.7034 0.740814 12.0452 0.740814 9.99974C0.740814 7.95424 2.39902 6.29603 4.44452 6.29603C5.51169 6.29603 6.47345 6.74739 7.14931 7.46961L11.0373 5.34893C10.9646 5.05938 10.926 4.75628 10.926 4.44418C10.926 2.39868 12.5842 0.740479 14.6297 0.740479C16.6752 0.740479 18.3334 2.39868 18.3334 4.44418C18.3334 6.48968 16.6752 8.14789 14.6297 8.14789C13.5625 8.14789 12.6007 7.69651 11.9248 6.97424L8.0369 9.09492C8.10961 9.38446 8.14822 9.68761 8.14822 9.99974C8.14822 10.3119 8.10962 10.6149 8.03693 10.9045L11.9249 13.0252C12.6007 12.303 13.5625 11.8516 14.6297 11.8516C16.6752 11.8516 18.3334 13.5098 18.3334 15.5553C18.3334 17.6008 16.6752 19.259 14.6297 19.259C12.5842 19.259 10.926 17.6008 10.926 15.5553C10.926 15.2432 10.9646 14.94 11.0373 14.6505Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
