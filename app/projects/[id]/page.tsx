"use client";

import React from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    location: string;
    city: string;
    price: string;
    image: string;
    tag: string;
    developer: string;
    description?: string;
    amenities?: string[];
    gallery?: string[];
    // New fields based on requirements
    projectUnits?: string;
    areaUnit?: string;
    projectArea?: string;
    sizes?: string;
    projectSize?: string;
    launchDate?: string;
    avgPrice?: string;
    possessionStatus?: string;
    configuration?: string;
    reraId?: string;
    brochureImages?: string[];
    floorPlans?: { title: string, image: string }[];
    locality?: string;
    noOfTowers?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Azure Heights Villa",
        location: "Palm Coast Villas, Miami",
        city: "Miami",
        price: "$1,250,000",
        image: "/assets/img/all-images/properties/property-img20.png",
        tag: "Luxury",
        developer: "Skyline Builders",
        description: "Experience the pinnacle of luxury living at Azure Heights Villa. This stunning property offers breathtaking ocean views, modern architectural design, and world-class amenities.",
        amenities: ["Ocean View", "Smart Home", "Infinity Pool", "Private Gym", "24/7 Security"],
        gallery: [
            "/assets/img/all-images/properties/property-img20.png",
            "/assets/img/all-images/properties/property-img19.png",
            "/assets/img/all-images/properties/property-img21.png",
            "/assets/img/all-images/properties/property-img18.png"
        ],
        projectUnits: "3084",
        areaUnit: "sq.ft.",
        projectArea: "25 Acres",
        sizes: "840 - 1125 sq.ft.",
        projectSize: "1 Building - 3084 units",
        launchDate: "Nov, 2021",
        avgPrice: "₹6.15 K/sq.ft",
        possessionStatus: "Ready to Move",
        configuration: "2 BHK Apartment",
        reraId: "PBRERA-SAS81-PR0496",
        locality: "Sector 121, Mohali",
        noOfTowers: "11",
        brochureImages: [
            "/assets/img/all-images/properties/property-img20.png",
            "/assets/img/all-images/properties/property-img19.png",
            "/assets/img/all-images/properties/property-img21.png"
        ],
        floorPlans: [
            { title: "3BHK+SQ", image: "/assets/img/all-images/properties/property-img20.png" },
            { title: "4BHK", image: "/assets/img/all-images/properties/property-img19.png" }
        ]
    },
    {
        id: 2,
        title: "Skyline Skyline Villa",
        location: "Downtown Heights, New York",
        city: "New York",
        price: "$820,000",
        image: "/assets/img/all-images/properties/property-img19.png",
        tag: "Premium",
        developer: "Urban Nest Group",
        description: "A masterpiece of urban design, Skyline Villa offers sophisticated living in the heart of New York City.",
        amenities: ["City View", "Rooftop Garden", "Concierge", "Underground Parking"],
        gallery: [
            "/assets/img/all-images/properties/property-img19.png",
            "/assets/img/all-images/properties/property-img20.png",
            "/assets/img/all-images/properties/property-img22.png",
            "/assets/img/all-images/properties/property-img21.png"
        ],
        projectUnits: "1200",
        areaUnit: "sq.ft.",
        projectArea: "10 Acres",
        sizes: "1200 - 2500 sq.ft.",
        projectSize: "2 Towers - 600 units each",
        launchDate: "Jan, 2022",
        avgPrice: "₹12.5 K/sq.ft",
        possessionStatus: "Under Construction",
        configuration: "3 BHK Apartment",
        reraId: "PBRERA-NY12-PR0987",
        locality: "Downtown, New York",
        noOfTowers: "2",
        brochureImages: [
            "/assets/img/all-images/properties/property-img19.png",
            "/assets/img/all-images/properties/property-img20.png"
        ],
        floorPlans: [
            { title: "3BHK", image: "/assets/img/all-images/properties/property-img19.png" }
        ]
    },
    {
        id: 3,
        title: "Mountain View Residences",
        location: "Aspen, Colorado",
        city: "Aspen",
        price: "$950,000",
        image: "/assets/img/all-images/properties/property-img21.png",
        tag: "Modern",
        developer: "Prime Estates",
        description: "Nestled in the beautiful mountains of Aspen, these residences offer a perfect blend of comfort and nature.",
        amenities: ["Mountain View", "Fireplace", "Ski-in/Ski-out", "Heated Floors"],
        gallery: [
            "/assets/img/all-images/properties/property-img21.png",
            "/assets/img/all-images/properties/property-img18.png",
            "/assets/img/all-images/properties/property-img17.png",
            "/assets/img/all-images/properties/property-img20.png"
        ],
        projectUnits: "500",
        areaUnit: "sq.ft.",
        projectArea: "50 Acres",
        sizes: "2000 - 4500 sq.ft.",
        projectSize: "50 Chalets",
        launchDate: "Mar, 2023",
        avgPrice: "₹15.0 K/sq.ft",
        possessionStatus: "Ready to Move",
        configuration: "4 BHK Villa",
        reraId: "PBRERA-AS88-PR1234",
        locality: "Mountain Side, Aspen",
        noOfTowers: "0",
        brochureImages: [
            "/assets/img/all-images/properties/property-img21.png"
        ],
        floorPlans: [
            { title: "4BHK Villa", image: "/assets/img/all-images/properties/property-img21.png" }
        ]
    },
    {
        id: 4,
        title: "Oceanfront Condo",
        location: "Malibu, California",
        city: "Malibu",
        price: "$2,100,000",
        image: "/assets/img/all-images/properties/property-img22.png",
        tag: "Exclusive",
        developer: "Heritage Realty",
        description: "Wake up to the sound of waves in this exclusive Malibu oceanfront condo.",
        amenities: ["Private Beach", "Sun Deck", "Wine Cellar", "Gourmet Kitchen"],
        gallery: [
            "/assets/img/all-images/properties/property-img22.png",
            "/assets/img/all-images/properties/property-img20.png",
            "/assets/img/all-images/properties/property-img19.png",
            "/assets/img/all-images/properties/property-img18.png"
        ],
        projectUnits: "150",
        areaUnit: "sq.ft.",
        projectArea: "5 Acres",
        sizes: "1500 - 3500 sq.ft.",
        projectSize: "1 Tower - 150 units",
        launchDate: "Jun, 2021",
        avgPrice: "₹25.0 K/sq.ft",
        possessionStatus: "Ready to Move",
        configuration: "3 BHK Apartment",
        reraId: "PBRERA-MA12-PR0456",
        locality: "Beach Road, Malibu",
        noOfTowers: "1",
        brochureImages: [
            "/assets/img/all-images/properties/property-img22.png"
        ],
        floorPlans: [
            { title: "3BHK Beachfront", image: "/assets/img/all-images/properties/property-img22.png" }
        ]
    },
    {
        id: 5,
        title: "Green Valley Apartments",
        location: "Sunnyvale, California",
        city: "Sunnyvale",
        price: "$650,000",
        image: "/assets/img/all-images/properties/property-img18.png",
        tag: "Affordable",
        developer: "Apex Developments",
        description: "Modern, sustainable living in the heart of Silicon Valley. Perfect for young professionals.",
        amenities: ["Solar Powered", "Co-working Space", "Bike Storage", "Community Garden"],
        gallery: [
            "/assets/img/all-images/properties/property-img18.png",
            "/assets/img/all-images/properties/property-img21.png",
            "/assets/img/all-images/properties/property-img17.png",
            "/assets/img/all-images/properties/property-img19.png"
        ],
        projectUnits: "450",
        areaUnit: "sq.ft.",
        projectArea: "12 Acres",
        sizes: "650 - 1200 sq.ft.",
        projectSize: "3 Buildings - 150 units each",
        launchDate: "Sep, 2022",
        avgPrice: "₹8.5 K/sq.ft",
        possessionStatus: "Under Construction",
        configuration: "1 BHK Apartment",
        reraId: "PBRERA-SV44-PR0789",
        locality: "Valley View, Sunnyvale",
        noOfTowers: "3",
        brochureImages: [
            "/assets/img/all-images/properties/property-img18.png"
        ],
        floorPlans: [
            { title: "1BHK Smart", image: "/assets/img/all-images/properties/property-img18.png" }
        ]
    },
    {
        id: 6,
        title: "Riverfront Estates",
        location: "Miami, Florida",
        city: "Miami",
        price: "$1,450,000",
        image: "/assets/img/all-images/properties/property-img17.png",
        tag: "Luxury",
        developer: "Skyline Builders",
        description: "Spacious estate with stunning river views and extensive private grounds in Miami.",
        amenities: ["River Access", "Private Dock", "Outdoor Kitchen", "Guest House"],
        gallery: [
            "/assets/img/all-images/properties/property-img17.png",
            "/assets/img/all-images/properties/property-img20.png",
            "/assets/img/all-images/properties/property-img22.png",
            "/assets/img/all-images/properties/property-img21.png"
        ],
        projectUnits: "80",
        areaUnit: "sq.ft.",
        projectArea: "30 Acres",
        sizes: "3500 - 8000 sq.ft.",
        projectSize: "80 Luxury Estates",
        launchDate: "Dec, 2020",
        avgPrice: "₹18.0 K/sq.ft",
        possessionStatus: "Ready to Move",
        configuration: "5 BHK Estate",
        reraId: "PBRERA-MI55-PR0123",
        locality: "River Side, Miami",
        noOfTowers: "0",
        brochureImages: [
            "/assets/img/all-images/properties/property-img17.png"
        ],
        floorPlans: [
            { title: "5BHK Estate", image: "/assets/img/all-images/properties/property-img17.png" }
        ]
    }
];

export default function ProjectDetailsPage() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === Number(id));

    if (!project) {
        return (
            <Layout headerStyle={4} footerStyle={4}>
                <div className="container sp2 text-center">
                    <h2>Project Not Found</h2>
                    <Link href="/projects" className="vl-btn1 mt-4">Back to Projects</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout headerStyle={4} footerStyle={4}>
            <div className="project-details-page" style={{ backgroundColor: "#f4f7fa", minHeight: "100vh" }}>
                <style jsx>{`
                    .project-header {
                        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${project.image}');
                        background-size: cover;
                        background-position: center;
                        padding: 120px 0 80px;
                        color: #fff;
                        border-radius: 0 0 50px 50px;
                    }
                    .project-tag {
                        background: #1800ad;
                        color: #fff;
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 12px;
                        font-weight: 800;
                        text-transform: uppercase;
                        display: inline-block;
                        margin-bottom: 20px;
                    }
                    .project-title {
                        font-size: 48px;
                        font-weight: 800;
                        margin-bottom: 16px;
                    }
                    .project-meta {
                        display: flex;
                        gap: 30px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .meta-item {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .meta-item i {
                        color: #1800ad;
                    }
                    .content-section {
                        margin-top: -40px;
                        position: relative;
                        z-index: 10;
                    }
                    .info-card {
                        background: #fff;
                        border-radius: 30px;
                        padding: 40px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                        margin-bottom: 30px;
                    }
                    .section-title {
                        font-size: 24px;
                        font-weight: 800;
                        margin-bottom: 24px;
                        color: #111;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                    }
                    .overview-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 30px;
                    }
                    .overview-item {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }
                    .overview-label {
                        font-size: 13px;
                        color: #999;
                        font-weight: 500;
                    }
                    .overview-value {
                        font-size: 16px;
                        font-weight: 700;
                        color: #111;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    .overview-icon {
                        width: 20px;
                        color: #666;
                    }
                    .rera-status {
                        color: #1800ad;
                        font-size: 12px;
                        font-weight: 700;
                        text-decoration: underline;
                        cursor: pointer;
                        display: block;
                        margin-top: 5px;
                    }
                    .action-buttons {
                        display: flex;
                        gap: 15px;
                        margin-top: 30px;
                    }
                    .action-btn {
                        flex: 1;
                        padding: 12px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        transition: all 0.3s ease;
                        border: none;
                    }
                    .btn-share { background: #f0edff; color: #1800ad; }
                    .btn-save { background: #f0edff; color: #1800ad; }
                    .btn-details { background: #1800ad; color: #fff; flex: 2; }
                    
                    .brochure-slider {
                        position: relative;
                        border-radius: 20px;
                        overflow: hidden;
                        background: #f8f8f8;
                    }
                    .brochure-img {
                        width: 100%;
                        height: 300px;
                        object-fit: contain;
                    }
                    .brochure-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #fff;
                        padding: 10px 20px;
                        border-radius: 10px;
                        font-weight: 700;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    }
                    .download-brochure-btn {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: #1800ad;
                        font-weight: 700;
                        font-size: 14px;
                        text-decoration: none;
                        border: 1.5px solid #1800ad;
                        padding: 10px 20px;
                        border-radius: 10px;
                        margin: 20px auto 0;
                        width: fit-content;
                    }

                    .media-grid {
                        display: grid;
                        grid-template-columns: 2fr 1fr 1fr 1fr;
                        gap: 15px;
                    }
                    .media-item {
                        position: relative;
                        border-radius: 15px;
                        overflow: hidden;
                        height: 180px;
                    }
                    .media-item.main { height: 180px; }
                    .media-item img { width: 100%; height: 100%; object-fit: cover; }
                    .play-btn {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: #fff;
                        font-size: 40px;
                        opacity: 0.9;
                    }
                    .more-media {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-size: 24px;
                        font-weight: 800;
                    }

                    .floor-plan-header {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 30px;
                    }
                    .floor-tab {
                        padding: 8px 20px;
                        border-radius: 5px;
                        font-weight: 700;
                        cursor: pointer;
                        background: #f5f5f5;
                        color: #666;
                        border: none;
                    }
                    .floor-tab.active {
                        background: #e31e24;
                        color: #fff;
                    }
                    .floor-meta {
                        display: flex;
                        justify-content: space-around;
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #eee;
                    }
                    .meta-block {
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                    }
                    .meta-block i { color: #111; font-size: 18px; }
                    .meta-content { display: flex; flex-direction: column; }
                    .meta-label { font-size: 12px; color: #999; }
                    .meta-val { font-size: 13px; font-weight: 700; color: #111; }

                    @media (max-width: 991px) {
                        .project-title { font-size: 36px; }
                        .project-meta { flex-direction: column; gap: 10px; }
                        .overview-grid { grid-template-columns: repeat(2, 1fr); }
                        .media-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                    @media (max-width: 575px) {
                        .overview-grid { grid-template-columns: 1fr; }
                        .action-buttons { flex-direction: column; }
                    }
                `}</style>

                <div className="project-header">
                    <div className="container">
                        <span className="project-tag">{project.tag}</span>
                        <h1 className="project-title">{project.title}</h1>
                        <div className="project-meta">
                            <div className="meta-item">
                                <i className="fa-solid fa-location-dot"></i>
                                {project.location}
                            </div>
                            <div className="meta-item">
                                <i className="fa-solid fa-building"></i>
                                Developed by {project.developer}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container content-section">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="info-card">
                                <div className="section-title">
                                    <span>{project.title} Overview</span>
                                    <Link href="#" className="download-link" style={{ fontSize: '14px', color: '#1800ad', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-download"></i>
                                        Download Brochure
                                    </Link>
                                </div>
                                <div className="overview-grid">
                                    <div className="overview-item">
                                        <span className="overview-label">Project Units</span>
                                        <span className="overview-value">{project.projectUnits}</span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Area Unit</span>
                                        <span className="overview-value">{project.areaUnit}</span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Project Area</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-maximize overview-icon"></i>
                                            {project.projectArea}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Sizes</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-ruler-combined overview-icon"></i>
                                            {project.sizes}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Project Size</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-building overview-icon"></i>
                                            {project.projectSize}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Launch Date</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-calendar-days overview-icon"></i>
                                            {project.launchDate}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Avg. Price</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-indian-rupee-sign overview-icon"></i>
                                            {project.avgPrice}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Possession Status</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-house-chimney-window overview-icon"></i>
                                            {project.possessionStatus}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Configuration</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-shapes overview-icon"></i>
                                            {project.configuration}
                                        </span>
                                    </div>
                                    <div className="overview-item">
                                        <span className="overview-label">Rera Id</span>
                                        <span className="overview-value">
                                            <i className="fa-solid fa-id-card overview-icon"></i>
                                            {project.reraId}
                                        </span>
                                        <span className="rera-status">Check RERA Status</span>
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    <button className="action-btn btn-share">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        Share
                                    </button>
                                    <button className="action-btn btn-save">
                                        <i className="fa-regular fa-heart"></i>
                                        Save
                                    </button>
                                    <button className="action-btn btn-details">
                                        Ask For Details
                                    </button>
                                </div>
                            </div>

                            <div className="info-card">
                                <h2 className="section-title">{project.title} Official Brochure</h2>
                                <div className="brochure-slider">
                                    <img src={project.brochureImages?.[0]} alt="Brochure" className="brochure-img" />
                                    <div className="brochure-overlay">View Brochure</div>
                                </div>
                                <Link href="#" className="download-brochure-btn">
                                    <i className="fa-solid fa-download"></i>
                                    Download Brochure
                                </Link>
                            </div>

                            <div className="info-card">
                                <h2 className="section-title">{project.title} Photos & Videos</h2>
                                <div className="media-grid">
                                    <div className="media-item main">
                                        <img src={project.gallery?.[0]} alt="Main Photo" />
                                        <i className="fa-solid fa-play play-btn"></i>
                                    </div>
                                    <div className="media-item">
                                        <img src={project.gallery?.[1]} alt="Photo 2" />
                                    </div>
                                    <div className="media-item">
                                        <img src={project.gallery?.[2]} alt="Photo 3" />
                                    </div>
                                    <div className="media-item">
                                        <img src={project.gallery?.[3]} alt="Photo 4" />
                                        <div className="more-media">+20</div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="floor-meta">
                                    <div className="meta-block">
                                        <i className="fa-solid fa-id-card"></i>
                                        <div className="meta-content">
                                            <span className="meta-label">Rera Id</span>
                                            <span className="meta-val">{project.reraId}</span>
                                        </div>
                                    </div>
                                    <div className="meta-block">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div className="meta-content">
                                            <span className="meta-label">Locality</span>
                                            <span className="meta-val">{project.locality}</span>
                                        </div>
                                    </div>
                                    <div className="meta-block">
                                        <i className="fa-solid fa-building"></i>
                                        <div className="meta-content">
                                            <span className="meta-label">Builder Name</span>
                                            <span className="meta-val">{project.developer}</span>
                                        </div>
                                    </div>
                                    <div className="meta-block">
                                        <i className="fa-solid fa-tower-observation"></i>
                                        <div className="meta-content">
                                            <span className="meta-label">No. of Towers</span>
                                            <span className="meta-val">{project.noOfTowers}</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="section-title" style={{ justifyContent: 'center' }}>Floor Plan</h2>
                                <div className="floor-plan-header">
                                    <button className="floor-tab active">3BHK+SQ</button>
                                    <button className="floor-tab">4BHK</button>
                                </div>
                                <div className="floor-plan-img text-center">
                                    <img src={project.floorPlans?.[0].image} alt="Floor Plan" style={{ maxWidth: '100%', borderRadius: '15px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-card">
                                <h2 className="section-title">Location</h2>
                                <div style={{ height: "300px", background: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/assets/img/all-images/properties/property-img17.png')`, backgroundSize: 'cover', borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: 'relative' }}>
                                    <Link href="#" className="vl-btn1" style={{ padding: '10px 25px' }}>Click to View Location</Link>
                                    <Link href="#" style={{ position: 'absolute', top: '15px', left: '15px', background: '#fff', padding: '5px 15px', borderRadius: '5px', fontSize: '12px', fontWeight: '700', color: '#1800ad', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                        Open in Maps <i className="fa-solid fa-up-right-from-square ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <h2 className="section-title">Amenities</h2>
                                <div className="amenities-grid" style={{ gridTemplateColumns: '1fr' }}>
                                    {project.amenities?.map((item, index) => (
                                        <div key={index} className="amenity-item" style={{ marginBottom: '10px' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#1800ad' }}></i>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
