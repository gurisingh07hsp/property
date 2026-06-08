"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".testimonial-next-arrow",
        prevEl: ".testimonial-prev-arrow",
    },
};
export default function Testimonial4() {
    return (
        <>
            {/*===== TESTIMONIAL AREA STARTS =======*/}
            <div
                className="testi4 sp1"
                style={{
                    backgroundImage: "url(assets/img/all-images/bg/team-bg1.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading2 space-margin60 text-center">
                                <h2>Our Satisfied Homeowners</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testi-main-area">
                                <Swiper {...swiperOptions} className="testimonial4-slider-box">
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Alex Robertson</Link>
                                                <div className="space12" />
                                                <p>Real Estate Agent</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Housa made our home-buying best experience seamless and stress-free. Their team guided us through every to step, helping us find the perfect home within budget we couldn't happier!”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img12.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Nicolas Jackson</Link>
                                                <div className="space12" />
                                                <p>Our Happy Client</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Selling our house with in Housa was the best decision we’re made. They are handled everything professionally and got us the best deal in no time. Highly recommend! Housa Real Estate.”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Henry Gayle</Link>
                                                <div className="space12" />
                                                <p>Our Happy Client</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Housa specializes in high-end best to properties, and they helped me find my luxury dream home. Their knowledge of the market is unparalleled but Housa guided me through the best process.”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Alex Robertson</Link>
                                                <div className="space12" />
                                                <p>Real Estate Agent</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Housa made our home-buying best experience seamless and stress-free. Their team guided us through every to step, helping us find the perfect home within budget we couldn't happier!”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img12.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Nicolas Jackson</Link>
                                                <div className="space12" />
                                                <p>Our Happy Client</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Selling our house with in Housa was the best decision we’re made. They are handled everything professionally and got us the best deal in no time. Highly recommend! Housa Real Estate.”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="testimonial-single-boxarea">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housa" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="/about-us">Henry Gayle</Link>
                                                <div className="space12" />
                                                <p>Our Happy Client</p>
                                            </div>
                                        </div>
                                        <div className="space24" />
                                        <p>“Housa specializes in high-end best to properties, and they helped me find my luxury dream home. Their knowledge of the market is unparalleled but Housa guided me through the best process.”</p>
                                        <div className="space24" />
                                        <div className="brand-img">
                                            <img src="/assets/img/elements/elements2.png" alt="housa" />
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="testimonial-arrows">
                                    <div className="testimonial-prev-arrow">
                                        <button>
                                            <i className="fa-solid fa-angle-left" />
                                        </button>
                                    </div>
                                    <div className="testimonial-next-arrow">
                                        <button>
                                            <i className="fa-solid fa-angle-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== TESTIMONIAL AREA ENDS =======*/}
        </>
    );
}
