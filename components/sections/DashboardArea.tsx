import Link from "next/link";

export default function DashboardArea() {
    return (
        <>
            <div className="dashboard-section-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="space30" />
                            <div className="dashboad-all-details-section">
                                <h3>New Listing</h3>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-area">
                                            <form>
                                                <input type="text" placeholder="Search" />
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-area">
                                            <form>
                                                <input type="date" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-area">
                                            <div className="nice-select" tabIndex={0}>
                                                <span className="current">Select</span>
                                                <ul className="list">
                                                    <li data-value={1} className="option">
                                                        Today
                                                    </li>
                                                    <li data-value={2} className="option selected">
                                                        Yesterday
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space28" />
                                    <h4 className="found">60 Result Found</h4>
                                    <div className="space20" />
                                    <div className="row g-4">
                                        {/* Row 1 */}
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="property-grid-card bg-white p-3 rounded-4 shadow-sm h-100 border">
                                                <div className="img1 image-anime mb-3 position-relative">
                                                    <img src="/assets/img/all-images/properties/property-img1.png" alt="housa" className="w-100 rounded-3" style={{height: '220px', objectFit: 'cover'}} />
                                                    <div className="position-absolute top-0 end-0 m-2">
                                                        <span className="badge bg-primary rounded-pill px-3 py-2">$82,000</span>
                                                    </div>
                                                </div>
                                                <div className="content-tab-area">
                                                    <Link href="#" className="title h5 fw-bold text-decoration-none text-dark d-block mb-2">
                                                        Luxury Skyline Villa
                                                    </Link>
                                                    <p className="text-muted small mb-3">
                                                        <i className="fa-solid fa-location-dot me-2"></i>
                                                        199 Oakway Lane, Woodland
                                                    </p>
                                                    
                                                    <div className="property-features d-flex justify-content-between border-top border-bottom py-2 mb-3">
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-maximize me-1"></i> 2150 sqft
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bed me-1"></i> 5 Beds
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bath me-1"></i> 3 Baths
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img src="/assets/img/all-images/others/others-img1.png" alt="housa" className="rounded-circle" style={{width: '32px', height: '32px'}} />
                                                            <Link href="#" className="small fw-bold text-decoration-none text-dark">Santiago Towne</Link>
                                                        </div>
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-regular fa-heart text-danger"></i></button>
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-solid fa-share-nodes text-warning"></i></button>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-3 d-flex gap-2 border-top pt-3">
                                                        <button className="btn btn-outline-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-pen-to-square"></i> Edit
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-circle-check"></i> Sold
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center justify-content-center rounded-3">
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row 2 */}
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="property-grid-card bg-white p-3 rounded-4 shadow-sm h-100 border">
                                                <div className="img1 image-anime mb-3 position-relative">
                                                    <img src="/assets/img/all-images/properties/property-img2.png" alt="housa" className="w-100 rounded-3" style={{height: '220px', objectFit: 'cover'}} />
                                                    <div className="position-absolute top-0 end-0 m-2">
                                                        <span className="badge bg-primary rounded-pill px-3 py-2">$82,000</span>
                                                    </div>
                                                </div>
                                                <div className="content-tab-area">
                                                    <Link href="#" className="title h5 fw-bold text-decoration-none text-dark d-block mb-2">
                                                        Golden Oaks Residence
                                                    </Link>
                                                    <p className="text-muted small mb-3">
                                                        <i className="fa-solid fa-location-dot me-2"></i>
                                                        199 Oakway Lane, Woodland
                                                    </p>
                                                    
                                                    <div className="property-features d-flex justify-content-between border-top border-bottom py-2 mb-3">
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-maximize me-1"></i> 2150 sqft
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bed me-1"></i> 5 Beds
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bath me-1"></i> 3 Baths
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img src="/assets/img/all-images/others/others-img2.png" alt="housa" className="rounded-circle" style={{width: '32px', height: '32px'}} />
                                                            <Link href="#" className="small fw-bold text-decoration-none text-dark">Santiago Towne</Link>
                                                        </div>
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-regular fa-heart text-danger"></i></button>
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-solid fa-share-nodes text-warning"></i></button>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-3 d-flex gap-2 border-top pt-3">
                                                        <button className="btn btn-outline-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-pen-to-square"></i> Edit
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-circle-check"></i> Sold
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center justify-content-center rounded-3">
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row 3 */}
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="property-grid-card bg-white p-3 rounded-4 shadow-sm h-100 border">
                                                <div className="img1 image-anime mb-3 position-relative">
                                                    <img src="/assets/img/all-images/properties/property-img4.png" alt="housa" className="w-100 rounded-3" style={{height: '220px', objectFit: 'cover'}} />
                                                    <div className="position-absolute top-0 end-0 m-2">
                                                        <span className="badge bg-primary rounded-pill px-3 py-2">$82,000</span>
                                                    </div>
                                                </div>
                                                <div className="content-tab-area">
                                                    <Link href="#" className="title h5 fw-bold text-decoration-none text-dark d-block mb-2">
                                                        Tranquil Breeze Villa
                                                    </Link>
                                                    <p className="text-muted small mb-3">
                                                        <i className="fa-solid fa-location-dot me-2"></i>
                                                        199 Oakway Lane, Woodland
                                                    </p>
                                                    
                                                    <div className="property-features d-flex justify-content-between border-top border-bottom py-2 mb-3">
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-maximize me-1"></i> 2150 sqft
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bed me-1"></i> 5 Beds
                                                        </div>
                                                        <div className="feature-item small text-muted">
                                                            <i className="fa-solid fa-bath me-1"></i> 3 Baths
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img src="/assets/img/all-images/others/others-img4.png" alt="housa" className="rounded-circle" style={{width: '32px', height: '32px'}} />
                                                            <Link href="#" className="small fw-bold text-decoration-none text-dark">Santiago Towne</Link>
                                                        </div>
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-regular fa-heart text-danger"></i></button>
                                                            <button className="btn btn-light btn-sm rounded-circle"><i className="fa-solid fa-share-nodes text-warning"></i></button>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-3 d-flex gap-2 border-top pt-3">
                                                        <button className="btn btn-outline-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-pen-to-square"></i> Edit
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                            <i className="fa-solid fa-circle-check"></i> Sold
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center justify-content-center rounded-3">
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="pagination-area" style={{ textAlign: "start" }}>
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <Link className="page-link" href="#" aria-label="Previous">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link active" href="#">
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" href="#">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" href="#">
                                                            ....
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" href="#">
                                                            12
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" href="#" aria-label="Next">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
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
