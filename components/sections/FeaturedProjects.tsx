"use client";
import { PropertyListItem } from "@/types/types";
import axios from "axios";
import { IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturedProjects() {
    const [properties, setProperties] = useState<PropertyListItem[]>([]);

    const fetchProperties = async() => {
        const response = await axios.get('/api/properties');
          if(response.status == 200){
            setProperties(response.data.properties);
        }
    }

    useEffect(()=>{
        fetchProperties();
    },[])
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Azure Heights Villa",
    //         location: "Palm Coast Villas, Miami",
    //         price: "$1,250,000",
    //         image: "/assets/img/all-images/properties/property-img20.png",
    //         tag: "Luxury",
    //     },
    //     {
    //         id: 2,
    //         title: "Skyline Skyline Villa",
    //         location: "Downtown Heights, New York",
    //         price: "$820,000",
    //         image: "/assets/img/all-images/properties/property-img19.png",
    //         tag: "Premium",
    //     },
    //     {
    //         id: 3,
    //         title: "Mountain View Residences",
    //         location: "Aspen, Colorado",
    //         price: "$950,000",
    //         image: "/assets/img/all-images/properties/property-img21.png",
    //         tag: "Modern",
    //     },
    //     {
    //         id: 4,
    //         title: "Oceanfront Condo",
    //         location: "Malibu, California",
    //         price: "$2,100,000",
    //         image: "/assets/img/all-images/properties/property-img22.png",
    //         tag: "Exclusive",
    //     }
    // ];

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
                            <h2>Featured Projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-3" />
                    <div className="col-lg-3">
                        <div className="btn-area1 text-end">
                            <Link href="/projects" className="vl-btn1" style={{ padding: '10px 24px', fontSize: '14px' }}>
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
                    {properties.map((property) => (
                        <div key={property._id} className="col-lg-3 col-md-6">
                            <div className="project-card">
                                <div className="img-container">
                                    <Link href="/property-details-v1">
                                        <img src={property.images[0]} alt={property.name} />
                                    </Link>
                                    <span className="project-tag">{property.category}</span>
                                </div>
                                <div className="project-content">
                                    <Link href="/property-details-v1" className="project-title">{property.name}</Link>
                                    <div className="project-loc">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {property.address}
                                    </div>
                                    <div className="project-footer">

                                        <span style={{display: 'flex', alignItems: 'center'}} className="project-price">
                                            <IndianRupeeIcon size={18}/>
                                            {property.propertyPrices.propertyPrice}
                                        </span>
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
