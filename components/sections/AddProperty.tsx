'use client';
import { useEffect, useState } from "react";
import { PropertyListItem } from "@/types/types";
import Link from "next/link";
import { X } from "lucide-react";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation";

export default function AddProperty({initialForm , mode, open, setOpen}:{initialForm: PropertyListItem, mode: 'add' | 'edit' , open: boolean, setOpen: (open: boolean) => void}) {
  const [tab, setTab] = useState(1);
  const {user} = useUser();
  const [propertyForm, setPropertyForm] = useState<PropertyListItem>(initialForm);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  console.log("pathname : ", pathname);
  useEffect(()=> {
    if(mode === 'edit'){
        setPropertyForm(initialForm);
    }
  },[initialForm]);

      const postData = async()=> {
          setLoading(true);
          const response = await axios.post('/api/properties', propertyForm, {withCredentials: true});
          if(response.status == 200){
              alert('Property Added!')
              console.log(response.data);
              setOpen(false);
          }
          setLoading(false);
      }

      const updateData = async()=> {
            setLoading(true);
            const response = await axios.put(`/api/properties/${propertyForm._id}`, propertyForm, {withCredentials: true});
            if(response.status == 200){
                alert('Property Updated!')
                console.log(response.data);
                setOpen(false);
            }
            setLoading(false);
      }

    useEffect(()=> {
        if(user && mode === 'add'){
            setPropertyForm({...propertyForm, agent: user._id || ""})
        }
    },[user]);

    console.log("form fiejf : ", propertyForm);

      const amenitiesList = [
        "airCondition",
        "windowType",
        "petFriendly",
        "floor",
        "furnishing",
        "sellingHeight",
        "elevator",
        "parking",
        "renovation",
        "garden",
        "heating",
        "firePlace",
        "disabledAccess",
        "cableTV",
        "wifi",
    ];
    return (
        <>
             {open && (
            <div onClick={(e)=> setOpen(false)} style={{zIndex: '2147483647'}} className="fixed inset-0 z-2147483647 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div onClick={(e)=> e.stopPropagation()} style={{zIndex: '2147483647'}} className="bg-white w-full max-w-5xl mt-24 rounded-2xl shadow-2xl z-2147483647 relative overflow-y-auto max-h-[95vh]">

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', padding: '16px 24px'}}>
                                <h2 className="text-2xl font-semibold text-center">
                                    Property Details
                                </h2>
                    
                                <button
                                    style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px'}}
                                    onClick={() => pathname == '/add-property' ? window.location.href = '/' : setOpen(false)}
                                    className="text-black border"
                                >
                                    <X size={16}/>
                                </button>
                    </div>

                    <div className="add-property-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="property-boxarea">
                                        <h3>{mode === 'add' ? 'Add New Property' : 'Edit Property'}</h3>
                                        <div className="space40" />
                                        <div className="all-tabs-boxarea">
                                            <ul className="nav nav-pills add-property-steps-nav" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link ${tab === 1 ? 'active' : ''}`} onClick={()=> setTab(1)}>
                                                        1. Description
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link ${tab === 2 ? 'active' : ''}`} onClick={()=> setTab(2)}>
                                                        2. Media
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link ${tab === 3 ? 'active' : ''}`} onClick={()=> setTab(3)}>
                                                        3. Location
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link ${tab === 4 ? 'active' : ''}`} onClick={()=> setTab(4)}>
                                                        4. Details
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link ${tab === 5 ? 'active' : ''}`} onClick={()=> setTab(5)}>
                                                        5. Amenities
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                {tab === 1 && (
                                                <div className="tab-pane fade show active">
                                                    <div className="space48" />
                                                    <h4>Property Description</h4>
                                                    <div className="space28" />
                                                    <h5>Tittle Your Home*</h5>
                                                    <div className="space16" />
                                                    <div className="col-lg-12">
                                                        <div className="input-area">
                                                            <input type="text" value={propertyForm.name} placeholder="Tittle Name" onChange={(e)=> setPropertyForm({...propertyForm, name: e.target.value})} />
                                                        </div>
                                                        <div className="space32" />
                                                        <h5>Description Note*</h5>
                                                        <div className="space16" />
                                                        <div className="input-area">
                                                            <textarea placeholder="Your Message" value={propertyForm.description} onChange={(e) => setPropertyForm({...propertyForm, description: e.target.value})} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="space30" />
                                                            <div className="input-area">
                                                                <h5>Select Category*</h5>
                                                                <div className="space16" />
                                                                <select value={propertyForm.category} onChange={(e) => setPropertyForm({...propertyForm, category: e.target.value})} className="nice-select">
                                                                    <option>Apartment</option>
                                                                    <option>House</option>
                                                                    <option>Kothi</option>
                                                                    <option>Villa</option>
                                                                    <option>Luxury Homes</option>
                                                                    <option>Farm House</option>
                                                                    <option>Single Family</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="space30" />
                                                            <div className="input-area">
                                                                <h5>Listed In*</h5>
                                                                <div className="space16" />
                                                                <select value={propertyForm.listedIn} onChange={(e) => setPropertyForm({...propertyForm, listedIn: e.target.value})} className="nice-select">
                                                                    <option>Active</option>
                                                                    <option>Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="space30" />
                                                            <div className="input-area">
                                                                <h5>Property Status*</h5>
                                                                <div className="space16" />
                                                                <select value={propertyForm.status} onChange={(e) => setPropertyForm({...propertyForm, status: e.target.value})} className="nice-select">
                                                                    <option>Approved</option>
                                                                    <option>Sale</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="space30" />
                                                                <div className="input-area">
                                                                    <h5>Price In $</h5>
                                                                    <div className="space16" />
                                                                    <input value={propertyForm.propertyPrices.propertyPrice} onChange={(e) => setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, propertyPrice: Number(e.target.value)}})} type="number" placeholder="Your Price" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="space30" />
                                                                <div className="input-area">
                                                                    <h5>Yearly Tax Rate*</h5>
                                                                    <div className="space16" />
                                                                    <input value={propertyForm.propertyPrices.yearlyTaxRate} onChange={(e) => setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, yearlyTaxRate: Number(e.target.value)}})} type="number" placeholder="Tax Rate" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="space30" />
                                                                <div className="input-area">
                                                                    <h5>After Price Label*</h5>
                                                                    <div className="space16" />
                                                                    <input value={propertyForm.propertyPrices.afterPriceLabel} onChange={(e) => setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, afterPriceLabel: Number(e.target.value)}})} type="number" placeholder="Tax Label" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="space40" />
                                                                <div className="btn-area1 text-end">
                                                                    <button className="vl-btn1" onClick={() => setTab(2)}>
                                                                        Update To Next Step
                                                                        <span className="arrow1 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                        <span className="arrow2 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                )}

                                                {tab === 2 && (
                                                    <div className="">
                                                        <div className="property-main-boxarea">
                                                            <div className="space48" />
                                                            <h4>Upload Photos Of Your Property</h4>
                                                            <div className="space38" />
                                                            <div className="box-uploadfile text-center">
                                                                <div className="uploadfile">
                                                                    <div className="btn-upload vl-btn1 text-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
                                                                        </svg>
                                                                        Select Property Photos
                                                                        <input type="file" className="ip-file" />
                                                                    </div>
                                                                    <p className="file-name fw-5">
                                                                        or drag photos here <br />
                                                                        <span>(Up to 10 photos)</span>
                                                                    </p>
                                                                </div>
                                                                <div className="space20" />
                                                                <div className="box-img-upload">
                                                                    <div className="item-upload file-delete">
                                                                        <img src="/assets/img/all-images/others/add-img1.png" alt="housa" />
                                                                        <span className="remove-file">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="item-upload file-delete">
                                                                        <img src="/assets/img/all-images/others/add-img2.png" alt="housa" />
                                                                        <span className="remove-file">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="item-upload file-delete">
                                                                        <img src="/assets/img/all-images/others/add-img3.png" alt="housa" />
                                                                        <span className="remove-file">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="item-upload file-delete">
                                                                        <img src="/assets/img/all-images/others/add-img4.png" alt="housa" />
                                                                        <span className="remove-file">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="space30" />
                                                            <h4>Video Option</h4>
                                                            <div className="space40" />
                                                            <div className="row">
                                                                <div className="col-lg-6 co-md-6">
                                                                    <div className="input-area">
                                                                        <h5>video</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="video link" />
                                                                    </div>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="col-lg-12">
                                                                    <div className="btn-area1 text-end">
                                                                        <button className="vl-btn1" onClick={() => setTab(3)}>
                                                                            Update To Next Step
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )}

                                                {tab === 3 && (
                                                    <div className="">
                                                        <div className="upload-main-boxarea">
                                                            <div className="space48" />
                                                            <h4>Listing Property Location</h4>
                                                            <div className="space32" />
                                                            <div className="input-area">
                                                                <h5>Address</h5>
                                                                <div className="space16" />
                                                                <input value={propertyForm.address} onChange={(e) => setPropertyForm({...propertyForm, address: e.target.value})} type="text" placeholder="Property Address" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Country Name</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.country} onChange={(e) => setPropertyForm({...propertyForm, country: e.target.value})} type="text" placeholder="Country Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Property City</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.city} onChange={(e) => setPropertyForm({...propertyForm, city: e.target.value})} type="text" placeholder="Property City" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>State Location</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.state} onChange={(e) => setPropertyForm({...propertyForm, state: e.target.value})} type="text" placeholder="State Location" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>ZIP Code*</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.zipCode} onChange={(e) => setPropertyForm({...propertyForm, zipCode: e.target.value})} type="text" placeholder="Zip Code" />
                                                                    </div>
                                                                </div>
                            
                                                                <div className="col-lg-12">
                                                                    <div className="space48" />
                                                                    <div className="mapouter">
                                                                        <div className="gmap_canvas">
                                                                            <iframe
                                                                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
                                                                                title="Property location map"
                                                                                style={{ border: 0, width: "100%", height: "100%", minHeight: 220 }}
                                                                                allowFullScreen
                                                                                loading="lazy"
                                                                                referrerPolicy="no-referrer-when-downgrade"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-6 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Latitude</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="Latitude" />
                                                                    </div>
                                                                </div> */}
                                                                {/* <div className="col-lg-6 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Longitude</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="Longitude*" />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-12">
                                                                    <div className="space40" />
                                                                    <div className="btn-area1 text-end">
                                                                        <button className="vl-btn1" onClick={()=> setTab(4)}>
                                                                            Update To Next Step
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )}

                                                {tab === 4 && (
                                                    <div className="">
                                                        <div className="upload-main-boxarea">
                                                            <div className="space48" />
                                                            <h4>Listing Details</h4>
                                                            <div className="space4" />
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Size in ft (only numbers)</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.propertySize} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, propertySize: e.target.value}})} type="text" placeholder="Size in ft (only numbers)" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Land size in ft (only numbers)</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.landArea} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, landArea: e.target.value}})} type="text" placeholder="Lot size in ft (only numbers)" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Room</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.rooms} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, rooms: parseInt(e.target.value) || 0}})} type="text" placeholder="Room" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Bedrooms</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.bedrooms} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, bedrooms: parseInt(e.target.value) || 0}})} type="text" placeholder="Bedrooms" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Bethrooms</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.bathrooms} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, bathrooms: parseInt(e.target.value) || 0}})} type="text" placeholder="Bethrooms" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Custom Id (Text)</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.customId} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, customId: e.target.value}})} type="text" placeholder="Custom Id (Text)" />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Garages</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.garages} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, garages: parseInt(e.target.value) || 0}})} type="text" placeholder="Garages" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Garages Size</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.garageSize} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, garageSize: e.target.value}})} type="text" placeholder="Garages Size" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Year Built</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.yearBuilt} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, yearBuilt: e.target.value}})} type="text" placeholder="Year Built" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Available from (date)</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="Available from (date)" />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Basement</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="Basement" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Extra details</h5>
                                                                        <div className="space16" />
                                                                        <input type="text" placeholder="Extra details" />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Roofing</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.roofing} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, roofing: e.target.value}})} type="text" placeholder="Roofing" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Exterior Material</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.exteriorMaterial} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, exteriorMaterial: e.target.value}})} type="text" placeholder="Exterior Material" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Structure type</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.structureType} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, structureType: e.target.value}})} type="text" placeholder="Structure type" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Floors no</h5>
                                                                        <div className="space16" />
                                                                        <input value={propertyForm.additionalInformation.floorsNo} onChange={(e) => setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, floorsNo: parseInt(e.target.value) || 0}})} type="text" placeholder="Floors no" />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>For Rent/Sale</h5>
                                                                        <div className="space16" />

                                                                            <select className="nice-select" value={propertyForm.for} onChange={(e) => setPropertyForm({...propertyForm, for: e.target.value})}>
                                                                                <option value="rent">For Rent</option>
                                                                                <option value="sale">For Sale</option>
                                                                            </select>

                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-lg-4 col-md-6">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Energy index in kWh/m2a</h5>
                                                                        <div className="space16" />
                                                                        <div className="nice-select" tabIndex={0}>
                                                                            <span className="current">Choose</span>
                                                                            <ul className="list">
                                                                                <li data-value={1} className="option">
                                                                                    New Listing
                                                                                </li>
                                                                                <li data-value={2} className="option selected">
                                                                                    Open House
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <div className="row">
                                                                {/* <div className="col-lg-12 col-md-12">
                                                                    <div className="space28" />
                                                                    <div className="input-area">
                                                                        <h5>Owner/ Agent nots (not visible on front end)</h5>
                                                                        <div className="space16" />
                                                                        <textarea placeholder="There are many variations of passages" defaultValue={""} />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-lg-12">
                                                                    <div className="space40" />
                                                                    <div className="btn-area1 text-end">
                                                                        <button className="vl-btn1" onClick={() => setTab(5)}>
                                                                            Update To Next Step
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                        
                                                {tab === 5 && (
                                                    <div className="">

                                                            {/* <div className="upload-main-boxarea">
                                                    <h3 className="text-start">Enable Floor Plan</h3>
                                                    <div className="space16" />

                                                    <div className="row">
                                                        {propertyForm.floors.map((floor, index) => (
                                                            <div key={index} className="border rounded p-3 mb-4">

                                                            <h4 className="mb-3 text-start">Floor {index + 1}</h4>

                                                            <div className="row">

                                                            
                                                                <div className="col-lg-12 col-md-12">
                                                                <div className="space28" />
                                                                <div className="input-area">
                                                                    <h5 className="text-start">Floor Number*</h5>
                                                                    <div className="space16" />

                                                                    <input
                                                                    value={floor.floorNumber}
                                                                    onChange={(e) => {
                                                                        const updatedFloors = [...propertyForm.floors];

                                                                        updatedFloors[index].floorNumber = Number(e.target.value);

                                                                        setPropertyForm({
                                                                        ...propertyForm,
                                                                        floors: updatedFloors,
                                                                        });
                                                                    }}
                                                                    type="number"
                                                                    placeholder="Floor Name*"
                                                                    />
                                                                </div>
                                                                </div>

                                                                
                                                                <div className="col-lg-6 col-md-6">
                                                                <div className="space28" />
                                                                <div className="input-area">
                                                                    <h5 className="text-start">Floor Price</h5>
                                                                    <div className="space16" />

                                                                    <input
                                                                    value={floor.floorPrice}
                                                                    onChange={(e) => {
                                                                        const updatedFloors = [...propertyForm.floors];

                                                                        updatedFloors[index].floorPrice = Number(e.target.value);

                                                                        setPropertyForm({
                                                                        ...propertyForm,
                                                                        floors: updatedFloors,
                                                                        });
                                                                    }}
                                                                    type="number"
                                                                    placeholder="#"
                                                                    />
                                                                </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-6">
                                                                <div className="space28" />
                                                                <div className="input-area">
                                                                    <h5 className="text-start">Floor Size</h5>
                                                                    <div className="space16" />

                                                                    <input
                                                                    value={floor.floorSize}
                                                                    onChange={(e) => {
                                                                        const updatedFloors = [...propertyForm.floors];

                                                                        updatedFloors[index].floorSize = Number(e.target.value);

                                                                        setPropertyForm({
                                                                        ...propertyForm,
                                                                        floors: updatedFloors,
                                                                        });
                                                                    }}
                                                                    type="number"
                                                                    placeholder="#"
                                                                    />
                                                                </div>
                                                                </div>

                                                            
                                                                <div className="col-lg-6 col-md-6">
                                                                <div className="space28" />
                                                                <div className="input-area">
                                                                    <h5 className="text-start">Bedrooms</h5>
                                                                    <div className="space16" />

                                                                    <input
                                                                    value={floor.bedrooms}
                                                                    onChange={(e) => {
                                                                        const updatedFloors = [...propertyForm.floors];

                                                                        updatedFloors[index].bedrooms = Number(e.target.value);

                                                                        setPropertyForm({
                                                                        ...propertyForm,
                                                                        floors: updatedFloors,
                                                                        });
                                                                    }}
                                                                    type="number"
                                                                    placeholder="#"
                                                                    />
                                                                </div>
                                                                </div>

                                                            
                                                                <div className="col-lg-6 col-md-6">
                                                                <div className="space28" />
                                                                <div className="input-area">
                                                                    <h5 className="text-start">Bathrooms</h5>
                                                                    <div className="space16" />

                                                                    <input
                                                                    value={floor.bathrooms}
                                                                    onChange={(e) => {
                                                                        const updatedFloors = [...propertyForm.floors];

                                                                        updatedFloors[index].bathrooms = Number(e.target.value);

                                                                        setPropertyForm({
                                                                        ...propertyForm,
                                                                        floors: updatedFloors,
                                                                        });
                                                                    }}
                                                                    type="number"
                                                                    placeholder="#"
                                                                    />
                                                                </div>
                                                                </div>

                                                    </div>

                                                
                                                    {propertyForm.floors.length > 1 && (
                                                        <button
                                                        type="button"
                                                        onClick={() => {
                                                            const updatedFloors = propertyForm.floors.filter(
                                                            (_, i) => i !== index
                                                            );

                                                            setPropertyForm({
                                                            ...propertyForm,
                                                            floors: updatedFloors,
                                                            });
                                                        }}
                                                        style={{background: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', width: '150px'}}
                                                        className="btn btn-danger mt-3"
                                                        >
                                                        Remove Floor
                                                        </button>
                                                    )}
                                                    </div>
                                                ))}
                                                </div>

                                            
                                                <button
                                                type="button"
                                                onClick={() => {
                                                    setPropertyForm({
                                                    ...propertyForm,
                                                    floors: [
                                                        ...propertyForm.floors,
                                                        {
                                                        floorNumber: 0,
                                                        floorImage: "",
                                                        floorPrice: 0,
                                                        floorSize: 0,
                                                        bedrooms: 0,
                                                        bathrooms: 0,
                                                        },
                                                    ],
                                                    });
                                                }}
                                                style={{background: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', width: '150px', marginBottom: '20px'}}
                                                
                                                >
                                                + Add Floor
                                                </button>

                                                </div> */}






                                                        <div className="upload-main-boxarea">
                                                            <div className="space48" />
                                                            <h4>Amenities*</h4>
                                                            <div className="space16" />
                                                            <div className="row">
                                                        {amenitiesList.map((item) => (
                                                        <div className="col-lg-2 col-md-6" key={item}>
                                                        <fieldset className="checkbox-item style-1 text-start ">
                                                            <label>
                                                            <input
                                                                type="checkbox"
                                                                checked={propertyForm.amenities.includes(item)}
                                                                onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    // Add amenity
                                                                    setPropertyForm({
                                                                    ...propertyForm,
                                                                    amenities: [...propertyForm.amenities, item],
                                                                    });
                                                                } else {
                                                                    // Remove amenity
                                                                    setPropertyForm({
                                                                    ...propertyForm,
                                                                    amenities: propertyForm.amenities.filter(
                                                                        (amenity) => amenity !== item
                                                                    ),
                                                                    });
                                                                }
                                                                }}
                                                            />

                                                            <span className="btn-checkbox" />

                                                            <span className="text-4">
                                                                {item.replace(/([A-Z])/g, " $1")}
                                                            </span>
                                                            </label>
                                                        </fieldset>
                                                        </div>
                                                    ))}
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="space40" />
                                                                    <div className="btn-area1 text-end">
                                                                        <button onClick={()=> {mode === 'add' ? postData() : updateData()}} disabled={loading} className="vl-btn1">
                                                                            {mode === 'add' ? (loading ? 'Adding...' : 'Add Property') : (loading ? 'Updating...' : 'Update Property')}
                                                                            <span className="arrow1 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                            <span className="arrow2 ms-2">
                                                                                <i className="fa-solid fa-arrow-right" />
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
            )}
        </>
    );
}
