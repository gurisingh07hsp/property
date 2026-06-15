import { notFound } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import Properties1Details from "@/components/sections/Properties1Details";
import PropertyInner from "@/components/sections/PropertyInner";
import PropertyBottom from "@/components/sections/PropertyBottom";
import propertyData from '@/data/property.json';
import axios from 'axios';

// interface PageProps {
//     params: Promise<{
//         slug: string;
//     }>;
// }

// async function validateProperty(params: { slug: string }) {
//     const id = params.slug?.toString().split('-').pop();
//     const response = await axios.get(`/api/properties/${id}`);
//     let property = null;
//     if(response.status == 200){
//         console.log("Property : ", property);
//         property = response.data
//     }
//     if (!property) {
//         notFound();
//     }
// }

export default async function PropertyDetails() {
    // const resolvedParams = await params;
    // await validateProperty(resolvedParams);

    return (
        <>
            <Layout>
                <InnerHeader title="Properties Details" currentpage="Properties Details" />
                <Properties1Details />
                <PropertyInner block_extend="d-none" />
                <div className="space30"></div>
                <PropertyBottom />
                <div className="space30"></div>
            </Layout>
        </>
    );
}