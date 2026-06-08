"use client";

import React, { useState, useMemo, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Project {
    id: number;
    title: string;
    location: string;
    city: string;
    price: string;
    image: string;
    tag: string;
    developer: string;
    // New fields
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
        developer: "Skyline Builders"
    },
    {
        id: 2,
        title: "Skyline Skyline Villa",
        location: "Downtown Heights, New York",
        city: "New York",
        price: "$820,000",
        image: "/assets/img/all-images/properties/property-img19.png",
        tag: "Premium",
        developer: "Urban Nest Group"
    },
    {
        id: 3,
        title: "Mountain View Residences",
        location: "Aspen, Colorado",
        city: "Aspen",
        price: "$950,000",
        image: "/assets/img/all-images/properties/property-img21.png",
        tag: "Modern",
        developer: "Prime Estates"
    },
    {
        id: 4,
        title: "Oceanfront Condo",
        location: "Malibu, California",
        city: "Malibu",
        price: "$2,100,000",
        image: "/assets/img/all-images/properties/property-img22.png",
        tag: "Exclusive",
        developer: "Heritage Realty"
    },
    {
        id: 5,
        title: "Green Valley Apartments",
        location: "Sunnyvale, California",
        city: "Sunnyvale",
        price: "$650,000",
        image: "/assets/img/all-images/properties/property-img18.png",
        tag: "Affordable",
        developer: "Apex Developments"
    },
    {
        id: 6,
        title: "Riverfront Estates",
        location: "Miami, Florida",
        city: "Miami",
        price: "$1,450,000",
        image: "/assets/img/all-images/properties/property-img17.png",
        tag: "Luxury",
        developer: "Skyline Builders"
    }
];

export default function ProjectsLandingPage() {
    const searchParams = useSearchParams();
    const developerQuery = searchParams.get("developer");
    
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedDeveloper, setSelectedDeveloper] = useState("All Developers");

    useEffect(() => {
        if (developerQuery) {
            setSelectedDeveloper(developerQuery);
        }
    }, [developerQuery]);

    const locations = useMemo(() => {
        const uniqueCities = Array.from(new Set(projectsData.map(p => p.city)));
        return ["All Locations", ...uniqueCities.sort()];
    }, []);

    const developers = useMemo(() => {
        const uniqueDevs = Array.from(new Set(projectsData.map(p => p.developer)));
        return ["All Developers", ...uniqueDevs.sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(p => {
            const matchesLocation = selectedLocation === "All Locations" || p.city === selectedLocation;
            const matchesDeveloper = selectedDeveloper === "All Developers" || p.developer === selectedDeveloper;
            return matchesLocation && matchesDeveloper;
        });
    }, [selectedLocation, selectedDeveloper]);

    return (
        <Layout headerStyle={4} footerStyle={4}>
            <div className="projects-page sp2" style={{ backgroundColor: "#f4f7fa", minHeight: "100vh" }}>
                <style jsx>{`
                    .projects-hero {
                        background: linear-gradient(rgba(24, 0, 173, 0.9), rgba(24, 0, 173, 0.95)), url('/assets/img/bg/hero-bg4.png');
                        background-size: cover;
                        background-position: center;
                        padding: 80px 0;
                        color: #fff;
                        text-align: center;
                        margin-bottom: -50px;
                        border-radius: 0 0 50px 50px;
                    }
                    .projects-hero h1 {
                        font-size: 48px;
                        font-weight: 800;
                        margin-bottom: 16px;
                    }
                    .filter-container {
                        background: #fff;
                        padding: 24px;
                        border-radius: 20px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        margin: 0 auto 50px;
                        max-width: 900px;
                        position: relative;
                        z-index: 10;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 40px;
                    }
                    .filter-group {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        flex: 1;
                    }
                    .filter-label {
                        font-weight: 700;
                        color: #111;
                        font-size: 15px;
                        white-space: nowrap;
                    }
                    .location-select {
                        flex: 1;
                        height: 50px;
                        padding: 0 20px;
                        border-radius: 12px;
                        border: 1px solid #eee;
                        background: #f8fafc;
                        font-size: 15px;
                        font-weight: 600;
                        color: #111;
                        cursor: pointer;
                        appearance: none;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231800ad' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                        background-repeat: no-repeat;
                        background-position: right 20px center;
                        outline: none;
                        transition: all 0.3s ease;
                    }
                    .location-select:focus {
                        border-color: #1800ad;
                        box-shadow: 0 0 0 4px rgba(24, 0, 173, 0.1);
                    }
                    .project-card {
                        background: #fff;
                        border-radius: 24px;
                        border: 1px solid #f0f0f0;
                        overflow: hidden;
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        height: 100%;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                    }
                    .project-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    }
                    .img-container {
                        height: 220px;
                        position: relative;
                        overflow: hidden;
                    }
                    .img-container img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.6s ease;
                    }
                    .project-card:hover .img-container img {
                        transform: scale(1.1);
                    }
                    .project-tag {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        background: #1800ad;
                        color: #fff;
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 11px;
                        font-weight: 800;
                        text-transform: uppercase;
                        z-index: 2;
                    }
                    .project-content {
                        padding: 24px;
                    }
                    .project-title {
                        font-size: 20px;
                        font-weight: 800;
                        margin-bottom: 8px;
                        color: #111;
                        text-decoration: none;
                        display: block;
                    }
                    .project-loc {
                        font-size: 13px;
                        color: #777;
                        margin-bottom: 12px;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    .dev-info {
                        font-size: 12px;
                        color: #1800ad;
                        font-weight: 700;
                        margin-bottom: 16px;
                        display: block;
                    }
                    .project-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-top: 18px;
                        border-top: 1px solid #f5f5f5;
                    }
                    .project-price {
                        font-size: 18px;
                        font-weight: 800;
                        color: #1800ad;
                    }
                    .details-link {
                        font-size: 13px;
                        font-weight: 700;
                        color: #111;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        gap: 4px;
                    }

                    @media (max-width: 767px) {
                        .projects-hero h1 { font-size: 32px; }
                        .filter-container { flex-direction: column; align-items: stretch; margin: 0 20px 40px; }
                    }
                `}</style>

                <div className="projects-hero">
                    <div className="container">
                        <h1>Discover Featured Projects</h1>
                        <p>Find the perfect investment opportunity in your preferred location</p>
                    </div>
                </div>

                <div className="container">
                    <div className="filter-container">
                        <div className="filter-group">
                            <span className="filter-label">Location:</span>
                            <select 
                                className="location-select" 
                                value={selectedLocation} 
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>
                        <div className="filter-group">
                            <span className="filter-label">Developer:</span>
                            <select 
                                className="location-select" 
                                value={selectedDeveloper} 
                                onChange={(e) => setSelectedDeveloper(e.target.value)}
                            >
                                {developers.map(dev => (
                                    <option key={dev} value={dev}>{dev}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div key={project.id} className="col-lg-4 col-md-6">
                                    <div className="project-card">
                                        <div className="img-container">
                                            <Link href={`/projects/${project.id}`}>
                                                <img src={project.image} alt={project.title} />
                                            </Link>
                                            <span className="project-tag">{project.tag}</span>
                                        </div>
                                        <div className="project-content">
                                            <Link href={`/projects/${project.id}`} className="project-title">{project.title}</Link>
                                            <div className="project-loc">
                                                <i className="fa-solid fa-location-dot"></i>
                                                {project.location}
                                            </div>
                                            <span className="dev-info">Developed by {project.developer}</span>
                                            <div className="project-footer">
                                                <span className="project-price">{project.price}</span>
                                                <Link href={`/projects/${project.id}`} className="details-link">
                                                    View Project
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h3>No projects found in this location.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
