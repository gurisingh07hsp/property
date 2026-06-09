"use client";

import React, { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

interface Developer {
    id: number;
    name: string;
    image: string;
    projects: string;
    experience: string;
    location: string;
    description: string;
}

const developersData: Developer[] = [
    {
        id: 1,
        name: "Skyline Builders",
        image: "/assets/img/all-images/team/team-img9.png",
        projects: "15+ Projects",
        experience: "10 Years Experience",
        location: "Miami, Florida",
        description: "Leading the way in luxury residential developments with a focus on sustainable and modern architecture."
    },
    {
        id: 2,
        name: "Urban Nest Group",
        image: "/assets/img/all-images/team/team-img10.png",
        projects: "24+ Projects",
        experience: "8 Years Experience",
        location: "New York, NY",
        description: "Specializing in urban rejuvenation and high-density residential complexes in the heart of the city."
    },
    {
        id: 3,
        name: "Prime Estates",
        image: "/assets/img/all-images/team/team-img11.png",
        projects: "12+ Projects",
        experience: "12 Years Experience",
        location: "Aspen, Colorado",
        description: "Boutique developers focusing on exclusive mountain retreats and high-end vacation homes."
    },
    {
        id: 4,
        name: "Heritage Realty",
        image: "/assets/img/all-images/team/team-img12.png",
        projects: "30+ Projects",
        experience: "15 Years Experience",
        location: "Malibu, California",
        description: "A legacy of excellence in beachfront properties and luxury coastal living."
    },
    {
        id: 5,
        name: "Apex Developments",
        image: "/assets/img/all-images/team/team-img13.png",
        projects: "18+ Projects",
        experience: "7 Years Experience",
        location: "Sunnyvale, California",
        description: "Innovative development firm specializing in tech-integrated smart homes and modern apartments."
    }
];

export default function DevelopersLandingPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDevelopers = useMemo(() => {
        return developersData.filter(dev => 
            dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dev.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <Layout headerStyle={4} footerStyle={4}>
            <div className="developers-page sp2" style={{ backgroundColor: "#f4f7fa", minHeight: "100vh" }}>
                <style jsx>{`
                    .developers-hero {
                        background: linear-gradient(rgba(24, 0, 173, 0.9), rgba(24, 0, 173, 0.95)), url('/assets/img/bg/hero-bg4.png');
                        background-size: cover;
                        background-position: center;
                        padding: 80px 0;
                        color: #fff;
                        text-align: center;
                        margin-bottom: -50px;
                        border-radius: 0 0 50px 50px;
                    }
                    .developers-hero h1 {
                        font-size: 48px;
                        font-weight: 800;
                        margin-bottom: 16px;
                    }
                    .search-container {
                        background: #fff;
                        padding: 12px 24px;
                        border-radius: 20px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        margin: 0 auto 50px;
                        max-width: 600px;
                        position: relative;
                        z-index: 10;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }
                    .search-input {
                        flex: 1;
                        border: none;
                        padding: 12px 0;
                        font-size: 16px;
                        font-weight: 500;
                        outline: none;
                        color: #111;
                    }
                    .search-icon {
                        color: #1800ad;
                        font-size: 18px;
                    }
                    .developer-card {
                        background: #fff;
                        border-radius: 24px;
                        border: 1px solid #f0f0f0;
                        padding: 40px 30px;
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .developer-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                        border-color: rgba(24, 0, 173, 0.1);
                    }
                    .img-wrapper {
                        width: 120px;
                        height: 120px;
                        margin-bottom: 24px;
                        position: relative;
                    }
                    .img-inner {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 4px solid #fff;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                    }
                    .img-inner img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .projects-badge {
                        background: rgba(24, 0, 173, 0.08);
                        color: #1800ad;
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 12px;
                        font-weight: 800;
                        margin-bottom: 16px;
                    }
                    .dev-name {
                        font-size: 22px;
                        font-weight: 800;
                        color: #111;
                        margin-bottom: 12px;
                        text-decoration: none;
                    }
                    .dev-loc {
                        font-size: 14px;
                        color: #777;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    .dev-desc {
                        font-size: 14px;
                        color: #666;
                        line-height: 1.6;
                        margin-bottom: 24px;
                        flex-grow: 1;
                    }
                    .dev-footer {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        padding-top: 20px;
                        border-top: 1px solid #f5f5f5;
                    }
                    .view-projects-btn {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1800ad;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        transition: all 0.3s ease;
                    }
                    .view-projects-btn:hover {
                        gap: 12px;
                    }

                    @media (max-width: 767px) {
                        .developers-hero h1 { font-size: 32px; }
                        .search-container { margin: 0 20px 40px; }
                    }
                `}</style>

                <div className="developers-hero">
                    <div className="container">
                        <h1>Our Partner Developers</h1>
                        <p>Working with the industry's best to bring you premium real estate opportunities</p>
                    </div>
                </div>

                <div className="container">
                    <div className="search-container">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search by developer name or location..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="row g-4">
                        {filteredDevelopers.length > 0 ? (
                            filteredDevelopers.map((dev) => (
                                <div key={dev.id} className="col-lg-4 col-md-6">
                                    <div className="developer-card">
                                        <div className="img-wrapper">
                                            <div className="img-inner">
                                                <img src={dev.image} alt={dev.name} />
                                            </div>
                                        </div>
                                        <div className="projects-badge">{dev.projects}</div>
                                        <h3 className="dev-name">{dev.name}</h3>
                                        <div className="dev-loc">
                                            <i className="fa-solid fa-location-dot"></i>
                                            {dev.location}
                                        </div>
                                        <p className="dev-desc">{dev.description}</p>
                                        <div className="dev-footer">
                                            <Link href={`/projects?developer=${encodeURIComponent(dev.name)}`} className="view-projects-btn">
                                                View All Projects
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h3>No developers found matching your search.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
