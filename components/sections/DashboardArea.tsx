'use client';
import { RootState } from "@/features/store";
import { PropertyListItem } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@/context/UserContext";
import { usePropertyList } from "../hooks/usePropertyList";
import { IndianRupeeIcon } from "lucide-react";
import { addKeyword } from "@/features/filter/filterSlice";
import AddProperty from "./AddProperty";

interface PropertyForm {
    name: string;
    images: any[];
    video: string;
    description: string;
    address: string;
    zipCode: string;
    country: string;
    state: string;
    category: string;
    city: string;
    sold: boolean;
    listedIn: string;
    status: string;
    agent: string;
    for: string;
    propertyPrices: {
        propertyPrice: number;
        yearlyTaxRate: number;
        afterPriceLabel: number;
    };
    additionalInformation: {
        propertySize: string;
        landArea: string;
        rooms: number;
        bedrooms: number;
        bathrooms: number;
        garages: number;
        garageSize: string;
        yearBuilt: string;
        basement: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
    };
    amenities: string[];
    floors: {
        floorNumber: number;
        floorImage: string;
        floorPrice: number;
        floorSize: number;
        bedrooms: number;
        bathrooms: number;
    }[];
}

export default function DashboardArea() {
    const dispatch = useDispatch();
    const {user} = useUser();
    const { properties} = useSelector((state: RootState) => state.property);
    const { propertyFilter } = useSelector((state: RootState) => state.filter);
    const [Properties, setProperties] = useState<PropertyListItem[]>([])
    const [totalProperties, setTotalProperties] = useState(0);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

            const [propertyForm, setPropertyForm] = useState<PropertyForm>({
                name: '',
                images: [],
                video: '',
                description: '',
                address: '',
                zipCode: '',
                country: '',
                state: '',
                city: '',
                category: '',
                sold: false,
                status: '',
                listedIn: '',
                agent: '',
                for: 'sale',
                propertyPrices: {
                    propertyPrice: 0,
                    yearlyTaxRate: 0,
                    afterPriceLabel: 0,
                },
                additionalInformation: {
                    propertySize: '',
                    landArea: '',
                    rooms: 0,
                    bedrooms: 0,
                    bathrooms: 0,
                    garages: 0,
                    garageSize: '',
                    yearBuilt: '',
                    basement: '',
                    roofing: '',
                    exteriorMaterial: '',
                    structureType: '',
                },
                amenities: [],
                floors: [{
                    floorNumber: 0,
                    floorImage: '',
                    floorPrice: 0,
                    floorSize: 0,
                    bedrooms: 0,
                    bathrooms: 0,
                }],
            })

     const propertyListItems = properties.map((p: any) => ({
        id: p.id,
        keyword: p.keyword,
        images: p.images,
        address: p.address,
        city: p.city,
        state: p.state,
        status: p.status,
        label: p.label,
        type: p.type,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        garages: p.garages,
        rooms: p.rooms,
        minPrice: p.minPrice,
        maxPrice: p.maxPrice,
        minSize: p.minSize,
        maxSize: p.maxSize,
        amenities: p.amenities,
        agent: p.agent,
    }));
    const {
            state: {
                currentPage,
                itemsPerPage,
            },
            actions: {
                setCurrentPage,
            },
            totalPages
        } = usePropertyList(propertyListItems, propertyFilter, "grid", 12);
    const fetchProperties = async() => {
        setLoading(true);
        const response = await axios.get("/api/properties", {
            params: {
                filter: JSON.stringify(propertyFilter),
                pagination: JSON.stringify({
                    page: currentPage,
                    perPage: itemsPerPage
                }),
                agentId: user?._id || "",
            },
        });
        if(response.status == 200){
            setProperties(response.data.properties);
            setTotalProperties(response.data.total);
        }
        setLoading(false);
    }

    useEffect(()=> {
        fetchProperties();
    },[propertyFilter,currentPage, itemsPerPage]);

        const handleEdit = (property: PropertyListItem) => {
         setPropertyForm((prev) => ({
            ...prev,
            ...property,

            propertyPrices: {
            ...prev.propertyPrices,
            ...property.propertyPrices,
            },

            additionalInformation: {
            ...prev.additionalInformation,
            ...property.additionalInformation,
            },

            amenities: property.amenities || [],

            floors: property.floors || [],
        }));

    }
    return (
        <>
             <AddProperty initialForm={propertyForm} mode={'edit'} open={open} setOpen={setOpen}/>
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
                                                <input type="text" onChange={(e)=> dispatch(addKeyword(e.target.value))} placeholder="Search" />
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="input-area">
                                            <form>
                                                <input type="date" />
                                            </form>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-4 col-md-6">
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
                                    </div> */}
                                    <div className="space28" />
                                    <h4 className="found">{Properties.length} Result Found</h4>
                                    <div className="space20" />
                                    {loading ? (
                                        <div>Loading...</div>
                                    ) : Properties.length > 0 ? (
                                        <div className="row g-4">
                                            {/* Row 1 */}
                                            {Properties.map((property)=> (
                                            <div key={property._id} className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="property-grid-card bg-white p-3 rounded-4 shadow-sm h-100 border">
                                                    <div className="img1 image-anime mb-3 position-relative">
                                                        <img src="/assets/img/all-images/properties/property-img1.png" alt="housa" className="w-100 rounded-3" style={{height: '220px', objectFit: 'cover'}} />
                                                        <div className="position-absolute top-0 inset-e-0 m-2">
                                                            <span style={{display: 'flex', alignItems: 'center'}} className="badge bg-primary rounded-pill px-3 py-2">
                                                                <IndianRupeeIcon size={12}/>
                                                                {property.propertyPrices.propertyPrice.toLocaleString()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="content-tab-area">
                                                        <Link href="#" className="title h5 fw-bold text-decoration-none text-dark d-block mb-2">
                                                            {property.name}
                                                        </Link>
                                                        <p className="text-muted small mb-3">
                                                            <i className="fa-solid fa-location-dot me-2"></i>
                                                            {property.address}
                                                        </p>
                                                        
                                                        <div className="property-features d-flex justify-content-between border-top border-bottom py-2 mb-3">
                                                            <div className="feature-item small text-muted">
                                                                <i className="fa-solid fa-maximize me-1"></i> {property.additionalInformation.propertySize} sqft
                                                            </div>
                                                            <div className="feature-item small text-muted">
                                                                <i className="fa-solid fa-bed me-1"></i> {property.additionalInformation.bedrooms} Beds
                                                            </div>
                                                            <div className="feature-item small text-muted">
                                                                <i className="fa-solid fa-bath me-1"></i> {property.additionalInformation.bathrooms} Baths
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center justify-content-between">
                                                            {/* <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/all-images/others/others-img1.png" alt="housa" className="rounded-circle" style={{width: '32px', height: '32px'}} />
                                                                <Link href="#" className="small fw-bold text-decoration-none text-dark">Santiago Towne</Link>
                                                            </div> */}
                                                            <div className="d-flex gap-2">
                                                                <button className="btn btn-light btn-sm rounded-circle"><i className="fa-regular fa-heart text-danger"></i></button>
                                                                <button className="btn btn-light btn-sm rounded-circle"><i className="fa-solid fa-share-nodes text-warning"></i></button>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="mt-3 d-flex gap-2 border-top pt-3">
                                                            <button onClick={()=> {handleEdit(property);setOpen(true)}} className="btn btn-outline-primary btn-sm grow d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                                <i className="fa-solid fa-pen-to-square"></i> Edit
                                                            </button>
                                                            <button className="btn btn-outline-success btn-sm grow d-flex align-items-center justify-content-center gap-1 rounded-3">
                                                                <i className="fa-solid fa-circle-check"></i> Sold
                                                            </button>
                                                            <button className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center justify-content-center rounded-3">
                                                                <i className="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                    
                                        </div>
                                    ) : (
                                        <div>No Property Found.</div>
                                    )}
                                 
                                      <div className="pagination-area">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(Math.max(1, currentPage - 1));
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                </svg>
                            </Link>
                        </li>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            let pageNumber;
                            if (totalPages <= 5) {
                                pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                                pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNumber = totalPages - 4 + i;
                            } else {
                                pageNumber = currentPage - 2 + i;
                            }
                            return (
                                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
                                    <Link
                                        className="page-link"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(pageNumber);
                                        }}
                                    >
                                        {pageNumber}
                                    </Link>
                                </li>
                            );
                        })}
                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <li className="page-item">
                                <Link className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                    ....
                                </Link>
                            </li>
                        )}
                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <li className="page-item">
                                <Link
                                    className="page-link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(totalPages);
                                    }}
                                >
                                    {totalPages}
                                </Link>
                            </li>
                        )}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href="#"
                                aria-label="Next"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(Math.min(totalPages, currentPage + 1));
                                }}
                            >
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
        </>
    );
}
