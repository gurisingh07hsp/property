"use client";

import Link from "next/link";

export default function FeaturedProjects() {
    const projects = [
        {
            id: 1,
            title: "Azure Heights Villa",
            location: "Palm Coast Villas, Miami",
            price: "$1,250,000",
            image: "/assets/img/all-images/properties/property-img20.png",
            tag: "Luxury",
        },
        {
            id: 2,
            title: "Skyline Skyline Villa",
            location: "Downtown Heights, New York",
            price: "$820,000",
            image: "/assets/img/all-images/properties/property-img19.png",
            tag: "Premium",
        },
        {
            id: 3,
            title: "Mountain View Residences",
            location: "Aspen, Colorado",
            price: "$950,000",
            image: "/assets/img/all-images/properties/property-img21.png",
            tag: "Modern",
        },
        {
            id: 4,
            title: "Oceanfront Condo",
            location: "Malibu, California",
            price: "$2,100,000",
            image: "/assets/img/all-images/properties/property-img22.png",
            tag: "Exclusive",
        }
    ];

    return (
        <div className="featured-projects mt-4" style={{ backgroundColor: "#fff" }}>
            <style jsx>{`
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
                    border-color: rgba(24, 0, 173, 0.1);
                }
                .img-container {
                    height: 240px;
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
                    letter-spacing: 0.05em;
                    z-index: 2;
                    box-shadow: 0 4px 10px rgba(24, 0, 173, 0.3);
                }
                .project-content {
                    padding: 24px;
                }
                .project-title {
                    font-size: 19px;
                    font-weight: 800;
                    margin-bottom: 8px;
                    display: block;
                    text-decoration: none;
                    color: #111;
                    transition: color 0.3s ease;
                }
                .project-card:hover .project-title {
                    color: #1800ad;
                }
                .project-loc {
                    font-size: 13px;
                    color: #777;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
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
                    transition: gap 0.3s ease;
                }
                .project-card:hover .details-link {
                    color: #1800ad;
                    gap: 8px;
                }
            `}</style>
            <div className="container">
                <div className="row align-items-center space-margin60">
                    <div className="col-lg-6">
                        <div className="heading2">
                            {/* <h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                                    <path d="M2.5 20H4.5M4.5 20H10.5M4.5 20V11.452C4.5 10.918 4.5 10.651 4.565 10.402C4.62256 10.1819 4.71725 9.97322 4.845 9.78497C4.99 9.57197 5.191 9.39497 5.593 9.04397L10.394 4.84197C11.14 4.18997 11.513 3.86397 11.932 3.73997C12.302 3.62997 12.697 3.62997 13.067 3.73997C13.487 3.86397 13.861 4.18997 14.607 4.84397L19.407 9.04397C19.809 9.39597 20.01 9.57197 20.155 9.78397C20.283 9.9753 20.3763 10.1813 20.435 10.402C20.5 10.651 20.5 10.918 20.5 11.452V20M10.5 20H14.5M10.5 20V16C10.5 15.4695 10.7107 14.9608 11.0858 14.5858C11.4609 14.2107 11.9696 14 12.5 14C13.0304 14 13.5391 14.2107 13.9142 14.5858C14.2893 14.9608 14.5 15.4695 14.5 16V20M20.5 20H14.5M20.5 20H22.5" stroke="#1800ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Exclusive Opportunities
                            </h5> */}
                            {/* <div className="space18" /> */}
                            <h2>Featured Projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-3" />
                    <div className="col-lg-3">
                        <div className="btn-area1 text-end">
                            <Link href="/projects" className="vl-btn1">
                                View All Projects
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
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-lg-3 col-md-6">
                            <div className="project-card">
                                <div className="img-container">
                                    <Link href="/property-details-v1">
                                        <img src={project.image} alt={project.title} />
                                    </Link>
                                    <span className="project-tag">{project.tag}</span>
                                </div>
                                <div className="project-content">
                                    <Link href="/property-details-v1" className="project-title">{project.title}</Link>
                                    <div className="project-loc">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {project.location}
                                    </div>
                                    <div className="project-footer">
                                        <span className="project-price">{project.price}</span>
                                        <Link href="/property-details-v1" className="details-link">
                                            Details
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
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
