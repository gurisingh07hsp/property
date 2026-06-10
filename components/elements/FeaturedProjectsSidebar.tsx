"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/features/store";

interface PropertyListItem {
    id: number;
    keyword: string;
    images?: {
        [key: string]: string;
    };
    city: string;
    state: string;
    minPrice: number;
}

export default function FeaturedProjectsSidebar() {
    const { properties } = useSelector((state: RootState) => state.property);
    
    // Get first 4 properties as "featured" for now
    const featuredProperties = properties.slice(0, 4) as PropertyListItem[];

    return (
        <div className="featured-projects-sidebar">
            <style jsx>{`
                .featured-projects-sidebar {
                    background: #fff;
                    padding: 24px;
                    border-radius: 16px;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
                    border: 1px solid #f0f0f0;
                }
                .sidebar-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }
                .featured-projects-sidebar h3 {
                    font-size: 18px;
                    font-weight: 800;
                    margin-bottom: 0;
                    color: #111;
                    letter-spacing: -0.02em;
                }
                .view-all {
                    font-size: 13px;
                    font-weight: 600;
                    color: #1800ad;
                    text-decoration: none;
                }
                .view-all:hover {
                    text-decoration: underline;
                }
                .featured-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .featured-item {
                    display: flex;
                    gap: 16px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .featured-img {
                    width: 120px;
                    height: 85px;
                    border-radius: 10px;
                    overflow: hidden;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease;
                }
                .featured-item:hover .featured-img {
                    transform: scale(1.05);
                }
                .featured-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .featured-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    min-width: 0;
                }
                .featured-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #111;
                    line-height: 1.3;
                    margin-bottom: 4px;
                    transition: color 0.2s ease;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .featured-item:hover .featured-title {
                    color: #1800ad;
                }
                .featured-location {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 6px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .featured-price {
                    font-size: 16px;
                    font-weight: 800;
                    color: #1800ad;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                }
                .price-prefix {
                    font-size: 12px;
                    font-weight: 600;
                    opacity: 0.8;
                }
            `}</style>
            <div className="sidebar-header">
                <h3>Featured Projects</h3>
                <Link href="/projects" className="view-all">View All</Link>
            </div>
            <div className="featured-list">
                {featuredProperties.map((property) => (
                    <Link key={property.id} href={`/property-details/${property.id}`} className="featured-item">
                        <div className="featured-img">
                            <img 
                                src={property.images && property.images.img1 ? property.images.img1 : "/assets/img/all-images/properties/property-img1.png"} 
                                alt={property.keyword} 
                            />
                        </div>
                        <div className="featured-info">
                            <div className="featured-title">{property.keyword}</div>
                            <div className="featured-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                {property.city}, {property.state}
                            </div>
                            <div className="featured-price">
                                <span className="price-prefix">$</span>
                                {property.minPrice}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
