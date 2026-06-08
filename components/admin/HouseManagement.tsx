'use client'
import { Search, Plus, Edit, Trash2, Eye, Star, IndianRupeeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { useUser } from "@/context/UserContext";
import { PropertyListItem } from "@/types/types";
import type { RootState } from "@/features/store";
import Link from "next/link";
import AddProperty from '../sections/AddProperty'
// import { ToursType } from "@/types/types";
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

const HouseManagement = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [existingTour, setExistingTour] = useState<any>();

    const {user} = useUser();
    const [properties, setProperties] = useState<PropertyListItem[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [propertyFilter, setPropertyFilter] = useState({
        keyword: "",
    });

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



    const { propertySort } = useSelector((state: RootState) => state.filter);
       const fetchProperties = async() => {
        setLoading(true);
        try{
            const response = await axios.get("/api/properties", {
            params: {
                filter: JSON.stringify(propertyFilter),
                pagination: JSON.stringify(propertySort),
                // agentId: user?._id,
            },
            });
            if(response.status == 200){
                console.log("Response Data : ", response.data);
                setProperties(response.data.properties);
                setTotal(response.data.total);
            }
        }catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProperties();
    },[user, propertyFilter]);

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



    const handleDelete = async(PropertyId: string) => {
        try{
            confirm("Are you sure you want to delete this property?") && await axios.delete(`/api/properties/${PropertyId}`, {withCredentials: true});
            fetchProperties();
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(open === false){
            setPropertyForm({
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
            for: '',
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
        }
    },[open]);


  return (
    <div className="space-y-6">
          <AddProperty initialForm={propertyForm} mode={mode} open={open} setOpen={setOpen}/>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h4 className="font-bold text-foreground">Property Management</h4>
        <p className="text-muted-foreground text-sm">Create and manage Properties</p>
      </div>
      <button onClick={()=> {setMode('add'); setOpen(true)}} style={{borderRadius: '5px'}} className="bg-[#1800ad] text-white cursor-pointer flex items-center justify-center p-2 hover:bg-primary/90">
        <Plus className="h-4 w-4 mr-2" /> Add Property
        <div className="">
        </div>
      </button>
    </div>

                <div>
                    <div className="dashboard-section-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space30" />
                                    <div className="dashboad-all-details-section">
                                        <h5>New Listing</h5>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="input-area">
                                                    <form>
                                                        <input type="text" value={propertyFilter.keyword} onChange={(e)=> setPropertyFilter({...propertyFilter, keyword: e.target.value})} />
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
                                            <h4 className="found">{total} Result Found</h4>
                                            <div className="space20" />
                                            <div className="row g-4">
                                                {properties.map((property)=> (
                                                    <div key={property._id} className="col-xl-3 col-lg-4 col-md-6">
                                                        <div className="property-grid-card bg-white p-3 rounded-4 shadow-sm h-100 border">
                                                            <div className="img1 image-anime mb-3 position-relative">
                                                                <img src={property.images?.[0] || "/assets/img/all-images/properties/property-img1.png"} alt="housa" className="w-100 rounded-3" style={{height: '180px', objectFit: 'cover'}} />
                                                                <div className="position-absolute top-0 end-0 m-2">
                                                                    <span className="badge bg-primary rounded-pill px-3 py-2 flex items-center gap-1">
                                                                        <IndianRupeeIcon size={12} />
                                                                        {property.propertyPrices.propertyPrice.toLocaleString()}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="content-tab-area">
                                                                <Link href="#" className="title h6 fw-bold text-decoration-none text-dark d-block mb-1 text-truncate">
                                                                    {property.name}
                                                                </Link>
                                                                <p className="text-muted small mb-2 text-truncate">
                                                                    <i className="fa-solid fa-location-dot me-1"></i>
                                                                    {property.address}
                                                                </p>
                                                                
                                                                <div className="property-features d-flex justify-content-between border-top border-bottom py-2 mb-3">
                                                                    <div className="feature-item x-small text-muted" style={{fontSize: '11px'}}>
                                                                        <i className="fa-solid fa-maximize me-1"></i> {property.additionalInformation.propertySize}
                                                                    </div>
                                                                    <div className="feature-item x-small text-muted" style={{fontSize: '11px'}}>
                                                                        <i className="fa-solid fa-bed me-1"></i> {property.additionalInformation.rooms}
                                                                    </div>
                                                                    <div className="feature-item x-small text-muted" style={{fontSize: '11px'}}>
                                                                        <i className="fa-solid fa-bath me-1"></i> {property.additionalInformation.bathrooms}
                                                                    </div>
                                                                </div>

                                                                <div className="mt-2 d-flex gap-2">
                                                                    <button onClick={() => { handleEdit(property); setMode('edit'); setOpen(true)}} className="btn btn-outline-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 rounded-3 py-1" style={{fontSize: '12px'}}>
                                                                        <Edit size={14} /> Edit
                                                                    </button>
                                                                    <button onClick={()=> handleDelete(property._id || "")} className="btn btn-outline-danger btn-sm px-2 d-flex align-items-center justify-content-center rounded-3 py-1">
                                                                        <Trash2 size={14} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="pagination-area" style={{ textAlign: "start" }}>
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item">
                                                                <button className="bg-[#f2f3f3] w-13 rounded-2xl me-3" aria-label="Previous">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                                                    </svg>
                                                                </button>
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
                                                                <button className="bg-[#f2f3f3] w-13 rounded-2xl" aria-label="Next">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                                    </svg>
                                                                </button>
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
                  
                </div>
           

  </div>
  );
}
export default HouseManagement;