'use client';
import InnerHeader from "@/components/layout/InnerHeader";
import Layout from "@/components/layout/Layout"
import Profile1 from "@/components/sections/Profile1";
import Link from "next/link"
import { useEffect, useState } from "react";
export default function MyProfile() {


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