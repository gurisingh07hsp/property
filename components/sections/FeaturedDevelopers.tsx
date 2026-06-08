"use client";

import Link from "next/link";

export default function FeaturedDevelopers() {
    const developers = [
        {
            id: 1,
            name: "Skyline Builders",
            image: "/assets/img/all-images/team/team-img9.png",
            projects: "15+ Projects",
            experience: "10 Years Experience",
        },
        {
            id: 2,
            name: "Urban Nest Group",
            image: "/assets/img/all-images/team/team-img10.png",
            projects: "24+ Projects",
            experience: "8 Years Experience",
        },
        {
            id: 3,
            name: "Prime Estates",
            image: "/assets/img/all-images/team/team-img11.png",
            projects: "12+ Projects",
            experience: "12 Years Experience",
        },
        {
            id: 4,
            name: "Heritage Realty",
            image: "/assets/img/all-images/team/team-img12.png",
            projects: "30+ Projects",
            experience: "15 Years Experience",
        },
        {
            id: 5,
            name: "Apex Developments",
            image: "/assets/img/all-images/team/team-img13.png",
            projects: "18+ Projects",
            experience: "7 Years Experience",
        }
    ];

    return (
        <div className="featured-developers sp2" style={{ backgroundColor: "#f4f7fa" }}>
            <style jsx>{`
                .developer-card {
                    background: #fff;
                    border-radius: 20px;
                    border: 1px solid rgba(0,0,0,0.05);
                    padding: 30px 20px;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .developer-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(24, 0, 173, 0.08);
                    border-color: rgba(24, 0, 173, 0.1);
                }
                .image-wrapper {
                    position: relative;
                    width: 110px;
                    height: 110px;
                    margin: 0 auto 20px;
                }
                .image-inner {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 4px solid #fff;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                    position: relative;
                    z-index: 2;
                }
                .image-inner img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .image-ring {
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    border: 2px dashed #1800ad;
                    opacity: 0.2;
                    animation: rotate 20s linear infinite;
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .dev-name {
                    font-size: 18px;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 12px;
                    display: block;
                    text-decoration: none;
                }
                .dev-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: center;
                }
                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    color: #666;
                    font-weight: 500;
                }
                .stat-item i {
                    color: #1800ad;
                    font-size: 14px;
                    width: 16px;
                }
                .projects-badge {
                    background: rgba(24, 0, 173, 0.05);
                    color: #1800ad;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 12px;
                    margin-bottom: 8px;
                }
            `}</style>
            <div className="container-fluid px-lg-5">
                <div className="row space-margin60 align-items-center">
                    <div className="col-lg-6">
                        <div className="heading2">
                            <h2>Featured Developers</h2>
                        </div>
                    </div>
                    <div className="col-lg-3" />
                    <div className="col-lg-3">
                        <div className="btn-area1 text-end">
                            <Link href="/developers" className="vl-btn1" style={{ padding: '10px 24px', fontSize: '14px' }}>
                                View All Developers
                                <span className="arrow1 ms-2">
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                                <span className="arrow2 ms-2">
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row g-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
                    {developers.map((dev) => (
                        <div key={dev.id} className="col">
                            <div className="developer-card text-center">
                                <div className="image-wrapper">
                                    <div className="image-ring"></div>
                                    <div className="image-inner">
                                        <img src={dev.image} alt={dev.name} />
                                    </div>
                                </div>
                                <div className="projects-badge">{dev.projects}</div>
                                <Link href={`/projects?developer=${encodeURIComponent(dev.name)}`} className="dev-name">{dev.name}</Link>
                                <div className="dev-stats">
                                    <div className="stat-item">
                                        <i className="fa-solid fa-award"></i>
                                        {dev.experience}
                                    </div>
                                    <div className="stat-item">
                                        <i className="fa-solid fa-location-dot"></i>
                                        Top Rated
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
