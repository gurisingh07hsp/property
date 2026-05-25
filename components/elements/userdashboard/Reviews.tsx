import InnerHeader from "@/components/layout/InnerHeader";
import DashboardReviews from "@/components/sections/DashboardReviews";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Reviews() {
    return (
        <>
                 {/* <Layout headerStyle={5}> */}
                            <InnerHeader title="Reviews" currentpage="Reviews" />
                            <DashboardReviews />
                            <div className="space30"></div>
                        {/* </Layout> */}
        </>
    );
}
