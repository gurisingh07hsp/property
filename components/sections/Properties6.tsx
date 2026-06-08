"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.css";
import SearchBox from "./SearchBox";

export default function Properties6() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*===== PROPERTIES AREA STARTS =======*/}
            <div className="s-properties4 sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading2 text-center space-margin60">
                                <h2>Find Your Perfect Property</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="s-porpeties-video"
                                style={{
                                    backgroundImage: "url(assets/img/all-images/others/bg-1.png)",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="col-lg-12">
                                    <div
                                        className="play-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                    >
                                        <Link href="#" className="popup-youtube">
                                            <span>
                                                <i className="fa-solid fa-play" />
                                            </span>
                                            Play Video
                                        </Link>
                                    </div>
                                    <div className="space80" />
                                    <div className="others-section-area123">
                                        <SearchBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== PROPERTIES AREA ENDS =======*/}
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="lXKcNihsUZY" onClose={() => setIsOpen(false)} />
        </>
    );
}
