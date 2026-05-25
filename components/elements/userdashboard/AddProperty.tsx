'use client'
import InnerHeader from "@/components/layout/InnerHeader";
import AddProperty from "@/components/sections/AddProperty";
import Layout from "@/components/layout/Layout";
// import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useUser } from "@/context/UserContext";

interface PropertyForm {
    name: string;
    images: any[];
    video: string;
    description: string;
    address: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    sold: boolean;
    status: string;
    agent: string;
    propertyPrices: {
        propertyPrice: number;
        unitPrice: number;
        beforePriceLabel: number;
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

export default function AddPropertyPage() {
    // const {user} = useUser();
    // const [propertyForm, setPropertyForm] = useState<PropertyForm>({
    //     name: '',
    //     images: [],
    //     video: '',
    //     description: '',
    //     address: '',
    //     zipCode: '',
    //     country: '',
    //     state: '',
    //     city: '',
    //     sold: false,
    //     status: '',
    //     agent: user?._id || '',
    //     propertyPrices: {
    //         propertyPrice: 0,
    //         unitPrice: 0,
    //         beforePriceLabel: 0,
    //         afterPriceLabel: 0,
    //     },
    //     additionalInformation: {
    //         propertySize: '',
    //         landArea: '',
    //         rooms: 0,
    //         bedrooms: 0,
    //         bathrooms: 0,
    //         garages: 0,
    //         garageSize: '',
    //         yearBuilt: ''
    //     },
    //     amenities: [],
    //     floors: [{
    //         floorNumber: 0,
    //         floorImage: '',
    //         floorPrice: 0,
    //         floorSize: 0,
    //         bedrooms: 0,
    //         bathrooms: 0,
    //     }],
    // })

    // useEffect(()=> {
    //     if(user){
    //         setPropertyForm({...propertyForm, agent: user._id || ""})
    //     }
    // },[user]);


    // const postData = async()=> {
    //     const response = await axios.post('/api/properties', propertyForm, {withCredentials: true});
    //     if(response.status == 200){
    //         alert('Property Added!')
    //         console.log(response.data);
    //     }
    // }

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
              {/* <Layout headerStyle={5}> */}
            <InnerHeader title="Add New Property" currentpage="Add New Property" />
            <AddProperty />
            <div className="space30"></div>
                        {/* </Layout> */}
        </>
    );
}
