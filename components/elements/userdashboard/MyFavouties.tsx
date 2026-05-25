import InnerHeader from "@/components/layout/InnerHeader";
import Layout from "@/components/layout/Layout";
import DashboardArea from "@/components/sections/DashboardArea";
import Link from "next/link";
export default function MyFavorites() {
    return (
        <>
             {/* <Layout headerStyle={5}> */}
                           <InnerHeader title="My Favourite" currentpage="My Favourite" />
                           <DashboardArea />
                           <div className="space30"></div>
                       {/* </Layout> */}
        </>
    );
}
