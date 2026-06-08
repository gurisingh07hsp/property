"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
export default function Others2() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            {/*===== OTHERS AREA STARTS =======*/}
            <div className="galley4-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="heading2 text-center space-margin60">
                                <h2>Browse Our Real Estate Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper modules={[Autoplay, Thumbs]} thumbs={{ swiper: thumbsSwiper }} spaceBetween={0} autoplay={{ delay: 2500 }} freeMode={true} slidesPerView={1} data-aos="fade-left" data-aos-duration={1000} className="all-galler-images">
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img1.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img2.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img3.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img4.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img1.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="big-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img2.png" alt="housa" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper onSwiper={setThumbsSwiper} modules={[Autoplay, Thumbs]} spaceBetween={10} freeMode={true} slidesPerView={5} watchSlidesProgress={true} data-aos="fade-right" data-aos-duration={1100} className="bottom-galler-images">
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img5.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img6.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img7.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img8.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img5.png" alt="housa" />
                                </SwiperSlide>
                                <SwiperSlide className="small-img">
                                    <img src="/assets/img/all-images/gallery/gallery-img6.png" alt="housa" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== OTHERS AREA ENDS =======*/}
        </>
    );
}
