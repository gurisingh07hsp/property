'use client';
import Layout from "@/components/layout/Layout";
import { useContext } from "react";
// import { useUser } from "@/context/UserContext";
import Link from "next/link";
import InnerHeader from "@/components/layout/InnerHeader";
import DashboardMessage from "@/components/sections/DashboardMessage";
export default function Message() {
    // const {user} = useUser();
    return (
        <>
             {/* <Layout headerStyle={5}> */}
                            <InnerHeader title="All Message" currentpage="All Message" />
                            <DashboardMessage />
                            <div className="space30"></div>
                        {/* </Layout> */}
        </>
    );
}
