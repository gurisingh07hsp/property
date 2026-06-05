"use client";

import { useEffect, useState } from "react";
import { PropertyListItem } from "@/types/types";
import { X } from "lucide-react";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import AddProperty from "../sections/AddProperty";
export default function PropertyFormModal({initialForm , mode, open, setOpen}:{initialForm: PropertyListItem, mode: 'add' | 'edit' , open: boolean, setOpen: (open: boolean) => void}) {
    const {user} = useUser();
  const [propertyForm, setPropertyForm] = useState<PropertyListItem>(initialForm);


  useEffect(()=> {
    if(mode === 'edit'){
        setPropertyForm(initialForm);
    }
  },[initialForm]);

      const postData = async()=> {
          const response = await axios.post('/api/properties', propertyForm, {withCredentials: true});
          if(response.status == 200){
              alert('Property Added!')
              console.log(response.data);
          }
      }

      const updateData = async()=> {
            const response = await axios.put(`/api/properties/${propertyForm._id}`, propertyForm, {withCredentials: true});
            if(response.status == 200){
                alert('Property Updated!')
                console.log(response.data);
            }
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

      {/* Modal */}
      {open && (
        <div onClick={(e)=> setOpen(false)} style={{zIndex: '2147483647'}} className="fixed inset-0 z-2147483647 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          {/* Modal Box */}
          <div onClick={(e)=> e.stopPropagation()} style={{zIndex: '2147483647'}} className="bg-white w-full max-w-5xl mt-24 rounded-2xl shadow-2xl z-2147483647 relative overflow-y-auto max-h-[95vh]">

            {/* Header */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', padding: '16px 24px'}}>
              <h2 className="text-2xl font-semibold text-center">
                Property Details
              </h2>

              <button
                style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px'}}
                onClick={() => setOpen(false)}
                className="text-black border"
              >
                <X size={16}/>
              </button>
            </div>

            {/* Body */}
            

                    {/* <AddProperty propertyForm={propertyForm} setPropertyForm={setPropertyForm} /> */}
          </div>
        </div>
      )}
    </>
  );
}