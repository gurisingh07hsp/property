'use client';
import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import AddProperty from "@/components/sections/AddProperty";
import { useState } from "react";

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

export default function Home() {
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
    return (
        <>
            {/* <Layout headerStyle={5}> */}
                {/* <InnerHeader title="Add New Property" currentpage="Add New Property" /> */}
                <AddProperty initialForm={propertyForm} mode={'add'} open={true} setOpen={setOpen}/>
                {/* <div className="space30"></div> */}
            {/* </Layout> */}
        </>
    );
}
