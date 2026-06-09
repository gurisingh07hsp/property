import Link from "next/link";

export default function PropertyLocation3() {
    return (
        <>
            {/*===== PROPERTIES_LOCATION AREA ENDS =======*/}
            <div className="location4 sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="heading2 text-center space-margin60">
                                <h2>Our Properties Across All Cities</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 location4-grid">
                        <div className="col-lg col-md-6 col-6">
                            <div className="propety-loaction">
                                <div className="img1">
                                    <img src="/assets/img/all-images/p-location/p-loaction-img13.png" alt="PROPUTY" />
                                </div>
                                <div className="content-area">
                                    <Link href="/property-halfmap-list">San Francisco</Link>
                                    <h3>32</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-6">
                            <div className="propety-loaction">
                                <div className="img1">
                                    <img src="/assets/img/all-images/p-location/p-loaction-img14.png" alt="housa" />
                                </div>
                                <div className="content-area">
                                    <Link href="/property-halfmap-list">Los Angeles</Link>
                                    <h3>24</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-6">
                            <div className="propety-loaction">
                                <div className="img1">
                                    <img src="/assets/img/all-images/p-location/p-loaction-img15.png" alt="housa" />
                                </div>
                                <div className="content-area">
                                    <Link href="/property-halfmap-list">New York</Link>
                                    <h3>16</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-6">
                            <div className="propety-loaction">
                                <div className="img1">
                                    <img src="/assets/img/all-images/p-location/p-loaction-img16.png" alt="housa" />
                                </div>
                                <div className="content-area">
                                    <Link href="/property-halfmap-list">San Diego</Link>
                                    <h3>17</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-6">
                            <div className="propety-loaction">
                                <div className="img1">
                                    <img src="/assets/img/all-images/p-location/p-loaction-img17.png" alt="housa" />
                                </div>
                                <div className="content-area">
                                    <Link href="/property-halfmap-list">Dallas Texas</Link>
                                    <h3>12</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== PROPERTIES_LOCATION AREA ENDS =======*/}
        </>
    );
}
