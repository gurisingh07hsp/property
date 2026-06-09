"use client";

import axios from "axios";
import { ChevronDown, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface place_data {
  class: string;
  type: string;
  display_place: string;
}

const houseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
            d="M2 20H4M4 20H10M4 20V11.452C4 10.918 4 10.651 4.065 10.402C4.12256 10.1819 4.21725 9.97322 4.345 9.78497C4.49 9.57197 4.691 9.39497 5.093 9.04397L9.894 4.84197C10.64 4.18997 11.013 3.86397 11.432 3.73997C11.802 3.62997 12.197 3.62997 12.567 3.73997C12.987 3.86397 13.361 4.18997 14.107 4.84397L18.907 9.04397C19.309 9.39597 19.51 9.57197 19.655 9.78397C19.783 9.9753 19.8763 10.1813 19.935 10.402C20 10.651 20 10.918 20 11.452V20M10 20H14M10 20V16C10 15.4695 10.2107 14.9608 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9608 14 15.4695 14 16V20M20 20H14M20 20H22"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

type HeroTab = "buy" | "rent" | "commercial" | "plots";

function HeroSearchPanel() {
    const [activeTab, setActiveTab] = useState<HeroTab>("buy");
    const [query, setQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const locationRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [filteredCities, setFilteredCities] = useState<string[]>([]);
    const [location, setLocation] = useState('');
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const tabs: { id: HeroTab; label: string; isNew?: boolean }[] = [
        { id: "buy", label: "Buy" },
        { id: "rent", label: "Rent" },
        { id: "commercial", label: "Commercial", isNew: true },
        { id: "plots", label: "Plots/Land" },
    ];

  const handleSearch = () => {
    if (location && searchQuery !== 'All Categories' && searchQuery !== '') {
      const locationPath = location.toLowerCase().replace(/\s+/g, '-');
      const categoryPath = searchQuery.toLowerCase().replace(/\s+/g, '-').replace('/', '-');
      // window.location.href = `/${locationPath}/${categoryPath}`;
      window.location.href = `/sidebar-grid/${locationPath}-in-${categoryPath}`;
    }
  };

  const handleLocationSelect = (selectedCity: string) => {
    setLocation(selectedCity);
    setShowLocationDropdown(false);
  };

  const handleLocationFocus = () => {
    setShowLocationDropdown(true);
  };

  const handleLocationChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    if(e.target.value !== ' ' && e.target.value !== ''){ 
      const response = await axios.get(`/api/places?input=${e.target.value}`);
      console.log(response.data);
      setFilteredCities(
        response.data.predictions
          ?.filter((place: place_data) => (place.class === "place" || place.class === 'boundary'))
          .map((place: place_data) => place.display_place)
      );
    }

    setShowLocationDropdown(true);
  };

  const [suggestions, setSuggestions] = useState<string[]>(['Kothi', 'Villa', 'Farm House']);

  const handleSearchQueryChange = (value: string) => {
    console.log('category : ', value);
    setSearchQuery(value);
    setShowSearchSuggestions(false);
  }

    const Categories = ['Kothi', 'Villa', 'Luxury Homes', 'Farm House', 'Single Family', 'House', 'Apartment']

    const fetchSuggestions = async(value: string) => {
    try{
      setSearchQuery(value);
      const filteredSuggestions = Categories.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
        // const response = await axios.get(`/api/places?q=${value}`);

      if(value !== '')
        {
          setSuggestions(filteredSuggestions);
        }
            else{
        setSuggestions(['Kothi', 'Villa', 'Farm House']);
      }
    }catch(error){
      console.error(error);
    }
  }

    return (
        <div className="hero4-search-panel">
            <div className="hero4-search-tabs" role="tablist" aria-label="Property type">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        className={`hero-tab${activeTab === tab.id ? " is-active" : ""}${tab.isNew ? " is-new" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <form
                className="hero4-search-row"
                onSubmit={(e) => {
                    e.preventDefault();
                    // const params = new URLSearchParams();
                    // if (query.trim()) params.set("q", query.trim());
                    // params.set("type", activeTab);
                      if (location && searchQuery !== 'All Categories' && searchQuery !== '') {
                      const locationPath = location.toLowerCase().replace(/\s+/g, '-');
                      const categoryPath = searchQuery.toLowerCase().replace(/\s+/g, '-').replace('/', '-');
                      // window.location.href = `/sidebar-grid?${params.toString()}`;
                      window.location.href = `/sidebar-grid/${categoryPath}_in_${locationPath}?type=${activeTab}`;
                      }
                }}
                // onSubmit={handleSearch}
            >

            <div className="relative flex-1 min-w-0" ref={locationRef}>
              <input
                type="text"
                placeholder={"Enter Location"}
                value={location}
                onChange={handleLocationChange}
                onFocus={handleLocationFocus}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              
              
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {filteredCities.length > 0 ? (
                    filteredCities.filter((city, index, arr) => arr.indexOf(city) === index).map((city, index) => (
                      <button
                        key={index}
                        onClick={() => handleLocationSelect(city)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-800">{city}</span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      No cities found
                    </div>
                  )}
                </div>
              )}
            </div>

            <div onClick={(e) => e.stopPropagation()} ref={categoryRef} className="relative flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search city, locality, project…"
                onFocus={()=>setShowSearchSuggestions(true)}
                value={searchQuery}
                onChange={(e) => fetchSuggestions(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />

              {showSearchSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchQueryChange(item)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <span className="text-gray-800">{item}</span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      No item found
                    </div>
                  )}
                </div>
              )}
            </div>

                <button type="submit" className="hero4-search-btn" aria-label="Search properties">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </form>
            <p className="hero4-owner-cta">
                Are you a property owner? <Link href="/contact">Post property for FREE</Link>
            </p>
        </div>
    );
}

export default function Hero4() {
    return (
        <div className="hero4-slider-sectionarea">
            <div
                className="hero4-slider-area swiper-slide-active"
                style={{
                    backgroundImage: "url(/assets/img/all-images/hero/hero-img6.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <img src="/assets/img/all-images/bg/h-bg1.png" alt="" className="h-bg1" aria-hidden />
                <img src="/assets/img/elements/elements5.png" alt="" className="elements5" aria-hidden />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-10">
                            <div className="hero2-header heading2 hero-content-visible">
                                <h1>Start Your Property Journey With PROPUTY</h1>
                                <HeroSearchPanel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
