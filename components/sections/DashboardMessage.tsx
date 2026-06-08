import Link from "next/link";

interface MessageBoxProps {
    avatar: string;
    name: string;
    message: string;
    daysAgo: number;
    isLast?: boolean;
}

const MessageBox = ({ avatar, name, message, daysAgo }: MessageBoxProps) => {
    return (
        <div className="col-12 mb-4">
            <div className="message-card bg-white p-4 rounded-4 shadow-sm border border-light-subtle hover-shadow transition-all d-flex gap-4">
                <div className="flex-shrink-0">
                    <div className="position-relative">
                        <img src={avatar} alt={name} className="rounded-circle border border-2 border-white shadow-sm" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                        <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"></span>
                    </div>
                </div>
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <Link href="#" className="h5 fw-bold text-dark text-decoration-none hover-primary mb-1 d-block">{name}</Link>
                            <span className="badge bg-light text-muted fw-normal border">
                                <i className="fa-regular fa-calendar-check me-1"></i>
                                {daysAgo} Days Ago
                            </span>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-light btn-sm rounded-circle shadow-sm" type="button" data-bs-toggle="dropdown">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3">
                                <li><Link className="dropdown-item py-2 px-3" href="#"><i className="fa-solid fa-reply me-2 text-primary"></i> Reply</Link></li>
                                <li><Link className="dropdown-item py-2 px-3" href="#"><i className="fa-solid fa-trash-can me-2 text-danger"></i> Delete</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item py-2 px-3" href="#"><i className="fa-solid fa-flag me-2 text-warning"></i> Report</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-secondary mb-3 lh-base" style={{display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                        {message}
                    </p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary btn-sm px-4 rounded-pill fw-bold shadow-sm">
                            <i className="fa-solid fa-paper-plane me-2"></i>
                            View Conversation
                        </button>
                        <button className="btn btn-outline-secondary btn-sm px-3 rounded-pill fw-bold">
                            Mark as Read
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hover-shadow:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
                    border-color: #1800ad !important;
                }
                .hover-primary:hover {
                    color: #1800ad !important;
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

const messageData = [
    {
        id: 1,
        avatar: "/assets/img/all-images/others/others-img1.png",
        name: "Henry Nicolas",
        message: "We're excited to help you find your dream home! Our team has carefully curated a selection of properties that match your preferences for location, style, and budget. We understand that choosing a home is one of life's biggest decisions, and we're here to guide you through every step of the process. Would you like to schedule a viewing of any properties you're interested in?",
        daysAgo: 3
    },
    {
        id: 2,
        avatar: "/assets/img/all-images/others/others-img2.png",
        name: "Kane Williamson",
        message: "Thank you for your interest in our properties! I've reviewed your requirements and found several excellent matches in your preferred neighborhoods. These properties feature modern amenities, spacious layouts, and are within your budget range. I'd be happy to arrange private viewings at your convenience and discuss the unique features of each property in detail.",
        daysAgo: 3
    },
    {
        id: 3,
        avatar: "/assets/img/all-images/others/others-img3.png",
        name: "Marting Guptil",
        message: "I noticed you're interested in properties in the downtown area. As a local real estate expert, I can tell you this neighborhood has seen significant development recently, with new parks, restaurants, and improved public transport links. The property you inquired about is particularly well-positioned to benefit from these improvements. Would you like more specific information about the area's amenities?",
        daysAgo: 3
    },
    {
        id: 4,
        avatar: "/assets/img/all-images/others/others-img5.png",
        name: "Gleen Philips",
        message: "Based on your recent property viewing, I've compiled some additional options that match your criteria. Each of these homes offers the open-concept layout you preferred, along with the modern kitchen features you mentioned were important. I've also included detailed information about the local schools and community facilities, as requested. Let me know when you'd like to explore these options further.",
        daysAgo: 3
    },
    {
        id: 5,
        avatar: "/assets/img/all-images/others/others-img5.png",
        name: "Trent Boult",
        message: "Following up on our discussion about investment properties, I've analyzed the rental market in your target areas. The properties I've selected show strong potential for rental yield and capital appreciation. I've prepared a detailed report comparing historical price trends, current market conditions, and future growth projections. Would you like to schedule a call to discuss these opportunities in detail?",
        daysAgo: 3
    },
    {
        id: 6,
        avatar: "/assets/img/all-images/others/others-img5.png",
        name: "Gleen Philips",
        message: "Based on your recent property viewing, I've compiled some additional options that match your criteria. Each of these homes offers the open-concept layout you preferred, along with the modern kitchen features you mentioned were important. I've also included detailed information about the local schools and community facilities, as requested. Let me know when you'd like to explore these options further.",
        daysAgo: 3
    }
];

export default function DashboardMessage() {
    return (
        <>
            <div className="dashboard-message">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>All Messages</h3>
                            <div className="space40" />
                            <div className="dashboard-info-sider-deatils">
                                <div className="dashboard-info-sider bg-white">
                                    <div className="row">
                                        {messageData.map((message, index) => (
                                            <MessageBox
                                                key={message.id}
                                                avatar={message.avatar}
                                                name={message.name}
                                                message={message.message}
                                                daysAgo={message.daysAgo}
                                                isLast={index === messageData.length - 1}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
