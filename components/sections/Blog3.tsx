"use client";

import Link from "next/link";

export default function Blog3() {
    const blogPosts = [
        {
            id: 1,
            title: "Looking for a House for Sale in Mohali? Here's Everything You Need to Know",
            excerpt: "Mohali is a top choice for home buyers thanks to its modern infrastructure, peaceful lifestyle, and rising property value. This guide helps you understand...",
            author: "PROPUTY",
            date: "23 April 2026",
            category: "Real Estate",
            image: "/assets/img/all-images/blog/blog-img4.png"
        },
        {
            id: 2,
            title: "How to Find Affordable Property in Kharar (Expert Tips & Insights)",
            excerpt: "Finding affordable property in Kharar is easier with the right approach. This guide covers budgeting, top areas, price comparison, and smart tips to help...",
            author: "PROPUTY",
            date: "16 April 2026",
            category: "Real Estate",
            image: "/assets/img/all-images/blog/blog-img5.png"
        },
        {
            id: 3,
            title: "Find Your Dream 4 BHK House in Mohali – Verified Listings & Top Locations",
            excerpt: "Looking for a spacious and modern home? Discover verified 4 BHK houses in Mohali across prime locations like Aerocity and Sector 70-80. Learn about pr...",
            author: "PROPUTY",
            date: "10 April 2026",
            category: "Real Estate",
            image: "/assets/img/all-images/blog/blog-img6.png"
        }
    ];

    return (
        <div className="blog-section-v4 mt-4 py-4" style={{ backgroundColor: "#f9fafb" }}>
            <style jsx>{`
                .blog-card {
                    background: #fff;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid #eee;
                    transition: all 0.4s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.06);
                    border-color: rgba(24, 0, 173, 0.1);
                }
                .blog-thumb {
                    height: 220px;
                    position: relative;
                    overflow: hidden;
                }
                .blog-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .blog-card:hover .blog-thumb img {
                    transform: scale(1.1);
                }
                .blog-content {
                    padding: 24px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .blog-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 12px;
                    font-size: 13px;
                    color: #777;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .blog-category {
                    color: #e54b4b;
                    font-weight: 700;
                    font-size: 13px;
                    margin-bottom: 12px;
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .blog-title {
                    font-size: 19px;
                    font-weight: 800;
                    color: #111;
                    line-height: 1.4;
                    margin-bottom: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .blog-card:hover .blog-title {
                    color: #1800ad;
                }
                .blog-excerpt {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .read-more-btn {
                    margin-top: auto;
                    font-size: 14px;
                    font-weight: 700;
                    color: #111;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.3s ease;
                }
                .blog-card:hover .read-more-btn {
                    color: #1800ad;
                    gap: 10px;
                }
            `}</style>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="heading2 text-center space-margin60">
                            <h2>Insights from the Real Estate Market</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-thumb">
                                    <Link href="/blog-detail">
                                        <img src={post.image} alt={post.title} />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <div className="meta-item">
                                            <i className="fa-solid fa-user"></i>
                                            PROPUTY
                                        </div>
                                        <div className="meta-item">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            {post.date}
                                        </div>
                                    </div>
                                    <span className="blog-category">{post.category}</span>
                                    <Link href="/blog-detail" className="blog-title">{post.title}</Link>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <Link href="/blog-detail" className="read-more-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
