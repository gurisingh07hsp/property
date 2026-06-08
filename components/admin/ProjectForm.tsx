"use client";

import { useState, useEffect } from "react";
import { Info, MapPin, Layers, Calendar, ChevronLeft, Building, Tag, CheckCircle, Globe, Search, Image as ImageIcon, Trash2 } from "lucide-react";
import TiptapEditor from "../TipTapEditor";

interface ProjectFormData {
    title: string;
    location: string;
    city: string;
    price: string;
    tag: string;
    developer: string;
    description: string;
    projectUnits: string;
    areaUnit: string;
    projectArea: string;
    sizes: string;
    projectSize: string;
    launchDate: string;
    avgPrice: string;
    possessionStatus: string;
    configuration: string;
    reraId: string;
    locality: string;
    noOfTowers: string;
    image: string;
    featuredImage: string;
    // SEO Fields
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    slug?: string;
}

interface ProjectFormProps {
    onSubmit: (data: ProjectFormData) => void;
    onCancel: () => void;
    initialData?: Partial<ProjectFormData>;
    mode?: "create" | "edit";
}

const EMPTY_FORM: ProjectFormData = {
    title: '',
    location: '',
    city: '',
    price: '',
    tag: 'Luxury',
    developer: '',
    description: '',
    projectUnits: '',
    areaUnit: 'sq.ft.',
    projectArea: '',
    sizes: '',
    projectSize: '',
    launchDate: '',
    avgPrice: '',
    possessionStatus: 'Ready to Move',
    configuration: '',
    reraId: '',
    locality: '',
    noOfTowers: '',
    image: '',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    slug: ''
};

export default function ProjectForm({
    onSubmit,
    onCancel,
    initialData,
    mode = "create",
}: ProjectFormProps) {
    const [form, setForm] = useState<ProjectFormData>({ ...EMPTY_FORM, ...initialData });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (initialData) {
            setForm({ ...EMPTY_FORM, ...initialData });
        }
    }, [initialData]);

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleTitleChange = (title: string) => {
        setForm(prev => ({
            ...prev,
            title,
            metaTitle: prev.metaTitle || title,
            slug: prev.slug || generateSlug(title)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        onSubmit(form);
    };

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Form Header */}
            <div className="px-6 md:px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={onCancel}
                        className="p-2 hover:bg-slate-50 rounded-xl transition-all text-slate-400 hover:text-[#1800ad]"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>
                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
                            {mode === 'edit' ? 'Update Project' : 'Create New Project'}
                        </h2>
                        <p className="text-slate-500 text-xs md:text-sm font-medium">Listing your development with premium details</p>
                    </div>
                </div>
                <div className="hidden sm:flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 rounded-xl bg-[#1800ad] text-white text-sm font-bold hover:bg-[#150091] transition-all shadow-lg shadow-blue-100"
                    >
                        {mode === 'edit' ? 'Save Changes' : 'Publish Project'}
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-12">
                {/* Section 1: Basic Information */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[#1800ad] border-b border-blue-50 pb-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Building size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Basic Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Project Title</label>
                            <input 
                                required 
                                type="text" 
                                placeholder="e.g. Azure Heights Villa" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#1800ad] transition-all font-medium" 
                                value={form.title} 
                                onChange={(e) => handleTitleChange(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Developer Name</label>
                            <input 
                                required 
                                type="text" 
                                placeholder="e.g. Skyline Builders" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#1800ad] transition-all font-medium"
                                value={form.developer} 
                                onChange={(e) => setForm({...form, developer: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Price Range</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#1800ad] transition-all font-medium" 
                                placeholder="e.g. ₹6.15 K/sq.ft or $1.2M"
                                value={form.price} 
                                onChange={(e) => setForm({...form, price: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Category Tag</label>
                            <div className="relative">
                                <select 
                                    className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#1800ad] transition-all font-bold text-slate-600 appearance-none cursor-pointer"
                                    value={form.tag} 
                                    onChange={(e) => setForm({...form, tag: e.target.value})}
                                >
                                    <option>Luxury</option>
                                    <option>Premium</option>
                                    <option>Modern</option>
                                    <option>Affordable</option>
                                </select>
                                <Tag className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Media & Images */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-rose-600 border-b border-rose-50 pb-3">
                        <div className="p-2 bg-rose-50 rounded-lg">
                            <ImageIcon size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Media & Images</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Featured Image URL</label>
                            <input 
                                type="text" 
                                placeholder="https://example.com/main-image.jpg"
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium mb-4"
                                value={form.featuredImage}
                                onChange={(e) => setForm({...form, featuredImage: e.target.value})}
                            />
                            {form.featuredImage && (
                                <div className="relative group rounded-2xl overflow-hidden aspect-video border-2 border-slate-100 shadow-sm">
                                    <img src={form.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                                    <button 
                                        type="button"
                                        onClick={() => setForm({...form, featuredImage: ''})}
                                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-rose-600 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Gallery Image URL</label>
                            <input 
                                type="text" 
                                placeholder="https://example.com/gallery-image.jpg"
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium mb-4"
                                value={form.image}
                                onChange={(e) => setForm({...form, image: e.target.value})}
                            />
                            {form.image && (
                                <div className="relative group rounded-2xl overflow-hidden aspect-video border-2 border-slate-100 shadow-sm">
                                    <img src={form.image} alt="Gallery" className="w-full h-full object-cover" />
                                    <button 
                                        type="button"
                                        onClick={() => setForm({...form, image: ''})}
                                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-rose-600 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Section 3: Detailed Description */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-3">
                        <div className="p-2 bg-slate-100 rounded-lg">
                            <Info size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Project Description</h3>
                    </div>
                    <div className="prose-slate max-w-none">
                        <TiptapEditor 
                            value={form.description}
                            onChange={(content: string) => setForm({...form, description: content})}
                        />
                    </div>
                </div>

                {/* Section 4: Location Details */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-emerald-600 border-b border-emerald-50 pb-3">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <MapPin size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Location Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Locality / Sector</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all font-medium" 
                                placeholder="e.g. Sector 121, Mohali"
                                value={form.locality} 
                                onChange={(e) => setForm({...form, locality: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">City</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all font-medium"
                                placeholder="e.g. Miami"
                                value={form.city} 
                                onChange={(e) => setForm({...form, city: e.target.value})} 
                            />
                        </div>
                    </div>
                </div>

                {/* Section 5: Status & Identity */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-rose-600 border-b border-rose-50 pb-3">
                        <div className="p-2 bg-rose-50 rounded-lg">
                            <Calendar size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Status & Identity</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Launch Date</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium" 
                                placeholder="e.g. Nov, 2021"
                                value={form.launchDate} 
                                onChange={(e) => setForm({...form, launchDate: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Possession Status</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium" 
                                placeholder="e.g. Ready to Move"
                                value={form.possessionStatus} 
                                onChange={(e) => setForm({...form, possessionStatus: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">RERA ID</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-mono font-bold text-slate-600" 
                                placeholder="PBRERA-XXXXX-XXXX"
                                value={form.reraId} 
                                onChange={(e) => setForm({...form, reraId: e.target.value})} 
                            />
                        </div>
                    </div>
                </div>

                {/* Section 6: Technical Specifications */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-purple-600 border-b border-purple-50 pb-3">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <Layers size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">Project Specifications</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Total Units</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium" 
                                placeholder="e.g. 3084"
                                value={form.projectUnits} 
                                onChange={(e) => setForm({...form, projectUnits: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Area Unit</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium" 
                                placeholder="sq.ft."
                                value={form.areaUnit} 
                                onChange={(e) => setForm({...form, areaUnit: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Project Area</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium" 
                                placeholder="25 Acres"
                                value={form.projectArea} 
                                onChange={(e) => setForm({...form, projectArea: e.target.value})} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">No. of Towers</label>
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium" 
                                placeholder="11"
                                value={form.noOfTowers} 
                                onChange={(e) => setForm({...form, noOfTowers: e.target.value})} 
                            />
                        </div>
                    </div>
                </div>

                {/* Section 7: SEO Settings */}
                <div className="border-t border-slate-100 pt-10">
                    <div className="flex items-center gap-2 text-blue-600 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Globe size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-bold uppercase tracking-wider text-xs">SEO & Search Optimization</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                                Meta Title
                                <span className="text-slate-400 text-[10px] ml-2">({form.metaTitle?.length}/60)</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Search engine title..."
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all font-medium"
                                value={form.metaTitle}
                                onChange={(e) => setForm({...form, metaTitle: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">URL Slug</label>
                            <input 
                                type="text" 
                                placeholder="project-url-slug"
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all font-medium"
                                value={form.slug}
                                onChange={(e) => setForm({...form, slug: e.target.value})}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                                Meta Description
                                <span className="text-slate-400 text-[10px] ml-2">({form.metaDescription?.length}/160)</span>
                            </label>
                            <textarea 
                                rows={3}
                                placeholder="Brief summary for search results..."
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all font-medium resize-none"
                                value={form.metaDescription}
                                onChange={(e) => setForm({...form, metaDescription: e.target.value})}
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons (Mobile only or sticky footer) */}
                <div className="flex sm:hidden flex-col gap-3 pt-6 border-t border-slate-100">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 rounded-2xl bg-[#1800ad] text-white font-bold hover:bg-[#150091] transition-all shadow-lg shadow-blue-100"
                    >
                        {mode === 'edit' ? 'Save Changes' : 'Publish Project'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
