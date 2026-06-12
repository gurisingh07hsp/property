'use client';
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Profile1() {
    	const {user} = useUser();
	const [form, setForm] = useState(user);
    const [loading, setLoading] = useState(false);
	const updateProfile = async() => {
        setLoading(true);
		try{
			const response = await axios.put(`/api/auth/profile/${user?._id}`, form);
			if(response.status === 200){
				alert('Profile Updated!');
			}
		}catch(error){
			console.log(error);
		}
        setLoading(false);
	}

	useEffect(()=> {
		setForm(user);
	},[user]);

    return (
        <>
            {/*===== DASHBOARD AREA STARTS =======*/}
            <div className="profile-section-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="heading1">
                                <h2>My Profile</h2>
                                <div className="space32" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="account-details-boxarea">
                                <h4>Upload Profile Photo</h4>
                                <div className="space24" />
                                <div className="box-agent-avt">
                                    <div className="img-poster">
                                        <img src="/assets/img/all-images/others/others-img11.png" alt="avatar" loading="lazy" />
                                    </div>
                                    <div className="content uploadfile">
                                        <p>Upload a new poster</p>
                                        <div className="space16" />
                                        <div className="box-ip">
                                            <input type="file" className="ip-file" />
                                        </div>
                                        <div className="space16" />
                                        <span>PNG/JPEG (100/100)</span>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="personal-info-area">
                                    <h3>Upload Profile Photo</h3>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="space28" />
                                            <div className="input-area">
                                                <h5>Username*</h5>
                                                <div className="space16" />
                                                <input type="text" value={form?.name} onChange={(e)=> setForm(prev => prev ? { ...prev, name: e.target.value } : prev)} placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="space28" />
                                            <div className="input-area">
                                                <h5>Email*</h5>
                                                <div className="space16" />
                                                <input type="email" value={form?.email} onChange={(e)=> setForm(prev => prev ? { ...prev, email: e.target.value } : prev)} placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="space28" />
                                            <div className="input-area">
                                                <h5>Phone*</h5>
                                                <div className="space16" />
                                                <input type="text" value={form?.phone} onChange={(e)=> setForm(prev => prev ? { ...prev, phone: e.target.value } : prev)} placeholder="Phone*" />
                                            </div>
                                        </div>              
                                        <div className="col-lg-12 col-md-12">
                                            <div className="space28" />
                                            <div className="input-area">
                                                <h5>About Me*</h5>
                                                <div className="space16" />
                                                <textarea placeholder="Your Message" value={form?.description} onChange={(e)=> setForm(prev => prev ? { ...prev, description: e.target.value } : prev)} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="space32" />
                                            <div className="btn-area1 text-end">
                                                <button onClick={updateProfile} className="vl-btn1">
                                                    {loading ? 'Updating...' : 'Update Profile'}
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
                            <div className="space30" />
                            {/* <div className="password-info-area">
                                <h2>Change Your Password</h2>
                                <div className="box">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="box-fieldset">
                                                <label>
                                                    Old Password:<span>*</span>
                                                </label>
                                                <div className="box-password">
                                                    <input type="password" className="form-contact style-1 password-field" placeholder="Password" />
                                                    <span className="show-pass">
                                                        <i className="fa-regular fa-eye" />
                                                        <i className="fa-regular fa-eye-slash" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="box-fieldset">
                                                <label>
                                                    New Password:<span>*</span>
                                                </label>
                                                <div className="box-password">
                                                    <input type="password" className="form-contact style-1 password-field2" placeholder="Password" />
                                                    <div
                                                        data-lastpass-icon-root=""
                                                        style={{
                                                            position: "relative",
                                                            height: "0px !important",
                                                            width: "0px !important",
                                                            float: "left",
                                                        }}
                                                    />
                                                    <span className="show-pass2">
                                                        <i className="fa-regular fa-eye" />
                                                        <i className="fa-regular fa-eye-slash" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="box-fieldset">
                                                <label>
                                                    Confirm Password:<span>*</span>
                                                </label>
                                                <div className="box-password">
                                                    <input type="password" className="form-contact style-1 password-field3" placeholder="Password" />
                                                    <div
                                                        data-lastpass-icon-root=""
                                                        style={{
                                                            position: "relative",
                                                            height: "0px !important",
                                                            width: "0px !important",
                                                            float: "left",
                                                        }}
                                                    />
                                                    <span className="show-pass3">
                                                        <i className="fa-regular fa-eye" />
                                                        <i className="fa-regular fa-eye-slash" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space32" />
                                <div className="btn-area1 text-end">
                                    <Link href="/" className="vl-btn1">
                                        Update Password
                                        <span className="arrow1 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                        <span className="arrow2 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/*===== DASHBOARD AREA ENDS =======*/}
        </>
    );
}
