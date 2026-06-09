import Link from "next/link";

export default function Team4() {
    return (
        <>
            {/*===== TEAM AREA STARTS =======*/}
            <div
                className="team4 sp2"
                style={{
                    backgroundImage: "url(assets/img/all-images/bg/team-bg1.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row space-margin60 align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2">
                                <h2>Expert Real Estate Agents</h2>
                            </div>
                        </div>
                        <div className="col-lg-3" />
                        <div className="col-lg-3">
                            <div className="space20 d-lg-none d-block" />
                            <div className="btn-area1 text-end">
                                <Link href="/add-property" className="vl-btn1">
                                    Find Your Property Expert
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
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team4-box">
                                <div className="image-area">
                                    <div className="image">
                                        <div className="img">
                                            <img src="/assets/img/all-images/team/team-img9.png" alt="housa" />
                                        </div>
                                    </div>
                                    <div className="shape2">
                                        <img src="/assets/img/elements/elements6.png" alt="housa" />
                                    </div>
                                    <div className="icon-area">
                                        <Link href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1.5V22.5M1.5 12H22.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-heading">
                                    <h4>
                                        <Link href="/doctor">Alex Robertson</Link>
                                    </h4>
                                    <p>Real Estate Specialist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team4-box">
                                <div className="image-area">
                                    <div className="image">
                                        <div className="img">
                                            <img src="/assets/img/all-images/team/team-img10.png" alt="housa" />
                                        </div>
                                    </div>
                                    <div className="shape2">
                                        <img src="/assets/img/elements/elements6.png" alt="housa" />
                                    </div>
                                    <div className="icon-area">
                                        <Link href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1.5V22.5M1.5 12H22.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-heading">
                                    <h4>
                                        <Link href="/doctor">Jaclin Farnandez</Link>
                                    </h4>
                                    <p>Senior Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team4-box">
                                <div className="image-area">
                                    <div className="image">
                                        <div className="img">
                                            <img src="/assets/img/all-images/team/team-img11.png" alt="housa" />
                                        </div>
                                    </div>
                                    <div className="shape2">
                                        <img src="/assets/img/elements/elements6.png" alt="housa" />
                                    </div>
                                    <div className="icon-area">
                                        <Link href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1.5V22.5M1.5 12H22.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-heading">
                                    <h4>
                                        <Link href="/doctor">Julian Blackwell</Link>
                                    </h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team4-box">
                                <div className="image-area">
                                    <div className="image">
                                        <div className="img">
                                            <img src="/assets/img/all-images/team/team-img9.png" alt="housa" />
                                        </div>
                                    </div>
                                    <div className="shape2">
                                        <img src="/assets/img/elements/elements6.png" alt="housa" />
                                    </div>
                                    <div className="icon-area">
                                        <Link href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1.5V22.5M1.5 12H22.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-heading">
                                    <h4>
                                        <Link href="/doctor">Maya Fitzgerald</Link>
                                    </h4>
                                    <p>Investment Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== TEAM AREA ENDS =======*/}
        </>
    );
}
