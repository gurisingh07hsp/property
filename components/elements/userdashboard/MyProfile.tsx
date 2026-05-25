'use client';
import InnerHeader from "@/components/layout/InnerHeader";
import Layout from "@/components/layout/Layout"
import Profile1 from "@/components/sections/Profile1";
import Link from "next/link"
import { useEffect, useState } from "react";
// import { useUser } from "@/context/UserContext";
// import axios from "axios";
export default function MyProfile() {
	// const {user} = useUser();
	// const [form, setForm] = useState(user);

	// const updateProfile = async() => {
	// 	try{
	// 		const response = await axios.put(`/api/auth/profile/${user?._id}`, form);
	// 		if(response.status === 200){
	// 			alert('Profile Updated!');
	// 		}
	// 	}catch(error){
	// 		console.log(error);
	// 	}
	// }

	// useEffect(()=> {
	// 	setForm(user);
	// },[user]);

	return (
		<>
			 {/* <Layout headerStyle={5}> */}
							<InnerHeader title="My Profile" currentpage="My Profile" />
							<Profile1 />
							<div className="space30"></div>
						{/* </Layout> */}
		</>
	)
}