'use client'
import { Search, Plus, Edit, Trash2, Building, Calendar, MapPin, CheckCircle, X } from "lucide-react";
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
            reraId: "PBRERA-SAS81-PR0496"
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
        // In a real app, this would be an API call
        const newProject = {
            id: projects.length + 1,
            ...projectForm
        };
        setProjects([...projects, newProject]);
        setOpen(false);
        alert("Project added successfully (Mockup)");
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Project Management</h1>
                    <p className="text-gray-500">Manage and add new projects to the website</p>
                </div>
                <button 
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 bg-[#1800ad] text-white px-4 py-2 rounded-lg hover:bg-[#150091] transition-colors"
                >
                    <Plus size={20} />
                    Add Project
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center gap-3 border border-gray-100">
                <Search className="text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search projects..." 
                    className="flex-1 outline-none text-gray-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Projects List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-bottom border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Project Name</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Developer</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Location</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Rera ID</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{project.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{project.developer}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{project.city}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 font-semibold">{project.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-mono">{project.reraId}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={18} /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Project Modal */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-height-[90vh] overflow-y-auto p-8 shadow-2xl">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h2 className="text-xl font-bold text-gray-800">Add New Project</h2>
                            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
                        </div>
                        
                        <form onSubmit={handleAddProject} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Basic Info */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#1800ad] flex items-center gap-2"><Building size={18} /> Basic Information</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                                        <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" 
                                            value={projectForm.title} onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Developer Name</label>
                                        <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100"
                                            value={projectForm.developer} onChange={(e) => setProjectForm({...projectForm, developer: e.target.value})} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                            <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. ₹6.15 K/sq.ft"
                                                value={projectForm.price} onChange={(e) => setProjectForm({...projectForm, price: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
                                            <select className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100"
                                                value={projectForm.tag} onChange={(e) => setProjectForm({...projectForm, tag: e.target.value})}>
                                                <option>Luxury</option>
                                                <option>Premium</option>
                                                <option>Modern</option>
                                                <option>Affordable</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Info */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#1800ad] flex items-center gap-2"><MapPin size={18} /> Location Details</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Locality</label>
                                        <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. Sector 121, Mohali"
                                            value={projectForm.locality} onChange={(e) => setProjectForm({...projectForm, locality: e.target.value})} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                            <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100"
                                                value={projectForm.city} onChange={(e) => setProjectForm({...projectForm, city: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Location</label>
                                            <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100"
                                                value={projectForm.location} onChange={(e) => setProjectForm({...projectForm, location: e.target.value})} />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Specs */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#1800ad] flex items-center gap-2"><CheckCircle size={18} /> Project Specifications</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Units</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. 3084"
                                                value={projectForm.projectUnits} onChange={(e) => setProjectForm({...projectForm, projectUnits: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Area Unit</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. sq.ft."
                                                value={projectForm.areaUnit} onChange={(e) => setProjectForm({...projectForm, areaUnit: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Area</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. 25 Acres"
                                                value={projectForm.projectArea} onChange={(e) => setProjectForm({...projectForm, projectArea: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">No. of Towers</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. 11"
                                                value={projectForm.noOfTowers} onChange={(e) => setProjectForm({...projectForm, noOfTowers: e.target.value})} />
                                        </div>
                                    </div>
                                </div>

                                {/* Status Info */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#1800ad] flex items-center gap-2"><Calendar size={18} /> Status & IDs</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Launch Date</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. Nov, 2021"
                                                value={projectForm.launchDate} onChange={(e) => setProjectForm({...projectForm, launchDate: e.target.value})} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Possession Status</label>
                                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100" placeholder="Ready to Move"
                                                value={projectForm.possessionStatus} onChange={(e) => setProjectForm({...projectForm, possessionStatus: e.target.value})} />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">RERA ID</label>
                                            <input required type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-100 font-mono"
                                                value={projectForm.reraId} onChange={(e) => setProjectForm({...projectForm, reraId: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 border-t pt-6">
                                <button type="button" onClick={() => setOpen(false)} className="px-6 py-2.5 border rounded-lg font-semibold text-gray-600 hover:bg-gray-50">Cancel</button>
                                <button type="submit" className="px-6 py-2.5 bg-[#1800ad] text-white rounded-lg font-semibold hover:bg-[#150091]">Save Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectManagement;
