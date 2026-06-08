'use client'
import { Search, Plus, Edit, Trash2, Building, MapPin, Tag } from "lucide-react";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

interface ProjectData {
    id: number;
    title: string;
    developer: string;
    city: string;
    price: string;
    reraId: string;
    tag: string;
    location?: string;
    locality?: string;
    projectUnits?: string;
    areaUnit?: string;
    projectArea?: string;
    noOfTowers?: string;
    launchDate?: string;
    possessionStatus?: string;
}

const ProjectManagement = () => {
    const [view, setView] = useState<'list' | 'form'>('list');
    const [mode, setMode] = useState<'create' | 'edit'>('create');
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState<Partial<ProjectData> | undefined>();
    
    const [projects, setProjects] = useState<ProjectData[]>([
        {
            id: 1,
            title: "Azure Heights Villa",
            developer: "Skyline Builders",
            city: "Miami",
            price: "$1,250,000",
            reraId: "PBRERA-SAS81-PR0496",
            tag: "Luxury",
            location: "Florida",
            locality: "Palm Coast",
            projectUnits: "3084",
            areaUnit: "sq.ft.",
            projectArea: "25 Acres",
            noOfTowers: "11",
            launchDate: "Nov, 2021",
            possessionStatus: "Ready to Move"
        }
    ]);

    const handleEditClick = (project: ProjectData) => {
        setMode('edit');
        setSelectedProject(project);
        setView('form');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddClick = () => {
        setMode('create');
        setSelectedProject(undefined);
        setView('form');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (data: any) => {
        if (mode === 'create') {
            const newProject = {
                id: projects.length + 1,
                ...data
            };
            setProjects([...projects, newProject]);
        } else {
            setProjects(projects.map(p => p.id === selectedProject?.id ? { ...p, ...data } : p));
        }
        setView('list');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (view === 'form') {
        return (
            <div className="p-4 md:p-8 bg-[#f8fafc] min-h-screen">
                <ProjectForm 
                    mode={mode}
                    initialData={selectedProject}
                    onSubmit={handleSubmit}
                    onCancel={() => setView('list')}
                />
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 bg-[#f8fafc] min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Project Management</h1>
                    <p className="text-slate-500 mt-1 text-sm md:text-base font-medium">Create, edit and manage your real estate projects</p>
                </div>
                <button 
                    onClick={handleAddClick}
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
                                            <button onClick={() => handleEditClick(project)} className="p-1.5 md:p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit className="w-4 h-4 md:w-[18px] md:h-[18px]" /></button>
                                            <button className="p-1.5 md:p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4 md:w-[18px] md:h-[18px]" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
