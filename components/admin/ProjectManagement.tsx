'use client'
import { Search, Plus, Edit, Trash2, Building, Calendar, MapPin, CheckCircle, X, Info, Tag, Layers, Home } from "lucide-react";
import { useState } from "react";

interface ProjectForm {
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
}

const ProjectManagement = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Initial mock data for display
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Azure Heights Villa",
            developer: "Skyline Builders",
            city: "Miami",
            price: "$1,250,000",
            reraId: "PBRERA-SAS81-PR0496",
            tag: "Luxury"
        }
    ]);

    const [projectForm, setProjectForm] = useState<ProjectForm>({
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
        noOfTowers: ''
    });

    const handleAddProject = (e: React.FormEvent) => {
        e.preventDefault();
        const newProject = {
            id: projects.length + 1,
            ...projectForm
        };
        setProjects([...projects, newProject]);
        setOpen(false);
    };

    return (
        <div className="p-4 md:p-8 bg-[#f8fafc] min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Project Management</h1>
                    <p className="text-slate-500 mt-1 text-sm md:text-base font-medium">Create, edit and manage your real estate projects</p>
                </div>
                <button 
                    onClick={() => setOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1800ad] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl hover:bg-[#150091] transition-all shadow-lg shadow-blue-200 font-bold active:scale-95 text-sm md:text-base"
                >
                    <Plus className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                    Add New Project
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 md:p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Building className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-semibold text-slate-500">Total Projects</p>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{projects.length}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 md:p-3 bg-amber-50 text-amber-600 rounded-xl">
                            <Tag className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-semibold text-slate-500">Luxury Tier</p>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                {projects.filter(p => p.tag === 'Luxury').length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 md:p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-semibold text-slate-500">Active Cities</p>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                {new Set(projects.map(p => p.city)).size}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Search & Filter Bar */}
                <div className="p-4 md:p-6 border-b border-slate-50 flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1800ad] transition-colors w-4 h-4 md:w-5 md:h-5" />
                        <input 
                            type="text" 
                            placeholder="Search projects..." 
                            className="w-full pl-11 pr-4 py-2.5 md:py-3 bg-slate-50 rounded-xl outline-none text-slate-600 text-sm md:text-base font-medium focus:ring-2 focus:ring-blue-100 border border-transparent focus:border-blue-200 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Projects Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 md:px-8 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Project Info</th>
                                <th className="px-4 md:px-6 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Developer</th>
                                <th className="px-4 md:px-6 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                                <th className="px-4 md:px-6 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Pricing</th>
                                <th className="px-4 md:px-6 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">RERA ID</th>
                                <th className="px-6 md:px-8 py-4 md:py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-slate-50/80 transition-all group">
                                    <td className="px-6 md:px-8 py-4 md:py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm md:text-base">
                                                {project.title.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-bold text-slate-900 text-sm md:text-base truncate">{project.title}</div>
                                                <div className="text-[10px] md:text-xs font-semibold text-[#1800ad] bg-blue-50 px-2 py-0.5 rounded inline-block mt-0.5 md:mt-1">{project.tag}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 md:py-5">
                                        <div className="text-xs md:text-sm font-semibold text-slate-600">{project.developer}</div>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 md:py-5">
                                        <div className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate-500">
                                            <MapPin size={14} className="flex-shrink-0" />
                                            <span className="truncate">{project.city}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 md:py-5">
                                        <div className="text-xs md:text-sm font-bold text-slate-900">{project.price}</div>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 md:py-5">
                                        <div className="text-[10px] md:text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200">
                                            {project.reraId}
                                        </div>
                                    </td>
                                    <td className="px-6 md:px-8 py-4 md:py-5 text-right">
                                        <div className="flex justify-end gap-1 md:gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 md:p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit className="w-4 h-4 md:w-[18px] md:h-[18px]" /></button>
                                            <button className="p-1.5 md:p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4 md:w-[18px] md:h-[18px]" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Project Modal */}
            {open && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-3 md:p-4">
                    <div className="bg-white rounded-[24px] md:rounded-[32px] w-full max-w-5xl h-fit max-h-[95vh] md:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="px-6 md:px-8 py-4 md:py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Add New Project</h2>
                                <p className="text-slate-500 text-xs md:text-sm font-medium">Fill in the details to list a new property development</p>
                            </div>
                            <button onClick={() => setOpen(false)} className="p-1.5 md:p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                            </button>
                        </div>
                        
                        {/* Modal Body */}
                        <form onSubmit={handleAddProject} className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6 md:gap-y-8">
                                {/* Section 1: Basic Information */}
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-2 text-[#1800ad] border-b border-blue-50 pb-2">
                                        <Info className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                        <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Basic Information</h3>
                                    </div>
                                    <div className="space-y-3 md:space-y-4">
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Project Title</label>
                                            <input required type="text" placeholder="e.g. Azure Heights Villa" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium text-sm md:text-base" 
                                                value={projectForm.title} onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Developer Name</label>
                                            <input required type="text" placeholder="e.g. Skyline Builders" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium text-sm md:text-base"
                                                value={projectForm.developer} onChange={(e) => setProjectForm({...projectForm, developer: e.target.value})} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Price Range</label>
                                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium text-sm md:text-base" placeholder="₹6.15 K/sq.ft"
                                                    value={projectForm.price} onChange={(e) => setProjectForm({...projectForm, price: e.target.value})} />
                                            </div>
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Category Tag</label>
                                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all font-bold text-slate-600 appearance-none cursor-pointer text-sm md:text-base"
                                                    value={projectForm.tag} onChange={(e) => setProjectForm({...projectForm, tag: e.target.value})}>
                                                    <option>Luxury</option>
                                                    <option>Premium</option>
                                                    <option>Modern</option>
                                                    <option>Affordable</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Location Details */}
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-2 text-emerald-600 border-b border-emerald-50 pb-2">
                                        <MapPin className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                        <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Location Details</h3>
                                    </div>
                                    <div className="space-y-3 md:space-y-4">
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Locality / Sector</label>
                                            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all font-medium text-sm md:text-base" placeholder="e.g. Sector 121, Mohali"
                                                value={projectForm.locality} onChange={(e) => setProjectForm({...projectForm, locality: e.target.value})} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">City</label>
                                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all font-medium text-sm md:text-base"
                                                    value={projectForm.city} onChange={(e) => setProjectForm({...projectForm, city: e.target.value})} />
                                            </div>
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">State / Region</label>
                                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all font-medium text-sm md:text-base"
                                                    value={projectForm.location} onChange={(e) => setProjectForm({...projectForm, location: e.target.value})} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Technical Specifications */}
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-2 text-purple-600 border-b border-purple-50 pb-2">
                                        <Layers className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                        <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Project Specifications</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Total Units</label>
                                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium text-sm md:text-base" placeholder="3084"
                                                value={projectForm.projectUnits} onChange={(e) => setProjectForm({...projectForm, projectUnits: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Area Unit</label>
                                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium text-sm md:text-base" placeholder="sq.ft."
                                                value={projectForm.areaUnit} onChange={(e) => setProjectForm({...projectForm, areaUnit: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Project Area</label>
                                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium text-sm md:text-base" placeholder="25 Acres"
                                                value={projectForm.projectArea} onChange={(e) => setProjectForm({...projectForm, projectArea: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">No. of Towers</label>
                                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all font-medium text-sm md:text-base" placeholder="11"
                                                value={projectForm.noOfTowers} onChange={(e) => setProjectForm({...projectForm, noOfTowers: e.target.value})} />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4: Status & Identity */}
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-2 text-rose-600 border-b border-rose-50 pb-2">
                                        <Calendar className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                        <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Status & Identity</h3>
                                    </div>
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Launch Date</label>
                                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium text-sm md:text-base" placeholder="Nov, 2021"
                                                    value={projectForm.launchDate} onChange={(e) => setProjectForm({...projectForm, launchDate: e.target.value})} />
                                            </div>
                                            <div>
                                                <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">Possession</label>
                                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-medium text-sm md:text-base" placeholder="Ready to Move"
                                                    value={projectForm.possessionStatus} onChange={(e) => setProjectForm({...projectForm, possessionStatus: e.target.value})} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1 ml-1">RERA Identification ID</label>
                                            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 md:p-3 outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all font-mono font-bold text-slate-600 text-sm md:text-base" placeholder="PBRERA-XXXXX-XXXX"
                                                value={projectForm.reraId} onChange={(e) => setProjectForm({...projectForm, reraId: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Modal Footer */}
                        <div className="px-6 md:px-8 py-4 md:py-6 border-t border-slate-100 flex justify-end gap-3 md:gap-4 bg-slate-50/50">
                            <button 
                                type="button" 
                                onClick={() => setOpen(false)} 
                                className="px-5 md:px-8 py-2 md:py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-all active:scale-95 text-sm md:text-base"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleAddProject}
                                className="px-6 md:px-10 py-2 md:py-3 bg-[#1800ad] text-white rounded-xl font-bold hover:bg-[#150091] shadow-lg shadow-blue-200 transition-all active:scale-95 text-sm md:text-base"
                            >
                                Save Project
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </div>
    );
};

export default ProjectManagement;
