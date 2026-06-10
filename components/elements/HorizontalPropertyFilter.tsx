"use client";

import { addBedrooms, addCity, addKeyword, addPrice, addPropertyType, addState, addStatus, resetFilters } from "@/features/filter/filterSlice";
import { clearAmenityFilters } from "@/features/property/propertySlice";
import type { RootState } from "@/features/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function HorizontalPropertyFilter() {
    const dispatch = useDispatch();
    const { propertyFilter } = useSelector((state: RootState) => state.filter);
    const propertyState = useSelector((state: RootState) => state.property);
    const properties = propertyState.properties || [];

            const {slug} = useParams();
            const category = slug?.toString().split('_')[0].replace(/-/g, " ");
            const location = slug?.toString().split('_').pop()?.replace(/-/g," ");
            // console.log('slug : ', slug);
            // console.log('category : ', category);
            // console.log('location : ', location);


        useEffect(() => {
    if (location) dispatch(addCity(location));
    if (category) dispatch(addPropertyType(category));
}, [location, category, dispatch]);

    // Get unique values for filters
    // const propertyTypes = React.useMemo(() => 
    //     Array.from(new Set(properties.map(p => p.type))).filter(Boolean).sort(), 
    // [properties]);
    const propertyTypes = ['Apartment','Kothi', 'Farm','House', 'Luxury Homes', 'Single Family', 'villa']

    const cities = React.useMemo(() => 
        Array.from(new Set(properties.map(p => p.city))).filter(Boolean).sort(), 
    [properties]);

    const statuses = React.useMemo(() => 
        Array.from(new Set(properties.map(p => p.status))).filter(Boolean).sort(), 
    [properties]);

    const handleFilterChange = (type: string, value: any) => {
        switch(type) {
            case 'keyword': dispatch(addKeyword(value)); break;
            case 'city': dispatch(addCity(value)); break;
            case 'status': dispatch(addStatus(value)); break;
            case 'type': dispatch(addPropertyType(value)); break;
            case 'bedrooms': dispatch(addBedrooms({ min: parseInt(value) || 0, max: 10 })); break;
            case 'price': {
                const parts = value.split('-');
                dispatch(addPrice({ min: parseInt(parts[0]) || 0, max: parseInt(parts[1]) || 5000000 }));
                break;
            }
        }
    };

    return (
        <div className="horizontal-filter-bar">
            <style jsx>{`
                .horizontal-filter-bar {
                    background: #fff;
                    padding: 16px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    margin-bottom: 30px;
                    border: 1px solid #f0f0f0;
                }
                .filter-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                }
                .filter-item {
                    flex: 1;
                    min-width: 120px;
                }
                .filter-item select, .filter-item input {
                    width: 100%;
                    height: 40px;
                    padding: 0 10px;
                    border: 1px solid #e0e0e0;
                    border-radius: 6px;
                    background-color: #fff;
                    font-size: 13px;
                    color: #333;
                    cursor: pointer;
                    appearance: none;
                    transition: all 0.2s;
                }
                .filter-item select {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 10px center;
                }
                .filter-item input:focus, .filter-item select:focus {
                    outline: none;
                    border-color: #1800ad;
                    box-shadow: 0 0 0 2px rgba(24, 0, 173, 0.1);
                }
                .search-btn {
                    padding: 0 20px;
                    height: 40px;
                    background: #1800ad;
                    border: none;
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .search-btn:hover {
                    background: #14008a;
                }
                .reset-btn {
                    padding: 0 12px;
                    height: 40px;
                    background: #f5f5f5;
                    border: none;
                    border-radius: 6px;
                    font-size: 13px;
                    color: #666;
                    cursor: pointer;
                }
                @media (max-width: 1199px) {
                    .filter-item { min-width: 150px; }
                }
            `}</style>
            <div className="filter-row">
                <div className="filter-item">
                    <select value={propertyFilter.propertyType} onChange={(e) => handleFilterChange('type', e.target.value)}>
                        <option value="">Property Type</option>
                        {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                <div className="filter-item">
                    <select value={propertyFilter.bedrooms.min || ""} onChange={(e) => handleFilterChange('bedrooms', e.target.value)}>
                        <option value="">BHK Type</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4+ BHK</option>
                    </select>
                </div>
                <div className="filter-item">
                    <select value={`${propertyFilter.price.min}-${propertyFilter.price.max}`} onChange={(e) => handleFilterChange('price', e.target.value)}>
                        <option value="0-5000000">Budget</option>
                        <option value="0-500000">Under 5Lac</option>
                        <option value="500000-1000000">5Lac - 10Lac</option>
                        <option value="1000000-2000000">10Lac - 20Lac</option>
                        <option value="2000000-5000000">20Lac+</option>
                    </select>
                </div>
                <div className="filter-item">
                    <select value={propertyFilter.status} onChange={(e) => handleFilterChange('status', e.target.value)}>
                        <option value="">Sale Type</option>
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div className="filter-item">
                    <select value={propertyFilter.city} onChange={(e) => handleFilterChange('city', e.target.value)}>
                        <option value="">City</option>
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="filter-item" style={{ flex: '2', minWidth: '200px' }}>
                    <input 
                        type="text" 
                        placeholder="Search by keyword, project..." 
                        value={propertyFilter.keyword}
                        onChange={(e) => handleFilterChange('keyword', e.target.value)}
                    />
                </div>
                <button className="reset-btn" onClick={() => {
                    dispatch(resetFilters());
                    dispatch(clearAmenityFilters());
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

