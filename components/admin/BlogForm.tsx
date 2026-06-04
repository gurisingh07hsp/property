"use client";

import { useState, useEffect, useRef } from "react";
import TiptapEditor from "../TipTapEditor";

// ─── Types ────────────────────────────────────────────────────────
interface BlogFormData {
  _id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate?: string;
  category: string;
  image: string;
  featuredImage?: string;
  readTime: number;
  tags: string[];
  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  slug?: string;
  canonicalUrl?: string;
}

interface TourFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BlogFormData) => void;
  initialData?: Partial<BlogFormData>;
  mode?: "create" | "edit";
}

const EMPTY_FORM: BlogFormData = {
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    image: '',
    featuredImage: '',
    readTime: 5,
    tags: [] as string[],
    // SEO Fields
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    slug: '',
    canonicalUrl: '',
};

// ─── Field Config ─────────────────────────────────────────────────
const fields = [
  { name: "title",       label: "Tour Title",       type: "text",   icon: "✈️",  placeholder: "",  span: 2,  required: true },
  { name: "image",       label: "Image URL",        type: "url",    icon: "🖼️",  placeholder: "https://...",  span: 2,  required: true },
  { name: "description", label: "Description",      type: "textarea",   icon: "📍",  placeholder: "", span: 2,  required: true },
  { name: "content",     label: "Content",          type: "textarea", icon: "🌍",  placeholder: "", span: 2,  required: true },
  { name: "category",    label: "Category",         type: "select", icon: "💵",  placeholder: "Select a category", span: 1,  required: true },
  { name: "slug",        label: "Slug",             type: "text",  icon: "📝", placeholder: "", span: 2,  required: true },
//   { name: "isPublished", label: "isPublished",      type: "checkbox",   icon: "🕐",  placeholder: "", span: 1,  required: false },
] as const;

type FieldName = typeof fields[number]["name"];

const CATEGORIES = ['House','Villa','Buying Guide','Experience']

// ─── Modal Component ──────────────────────────────────────────────
export default function BlogFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode = "create",
}: TourFormModalProps) {
  const [form, setForm] = useState<BlogFormData>({ ...EMPTY_FORM, ...initialData });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync initial data
  useEffect(() => {
    if (isOpen) {
      setForm({ ...EMPTY_FORM, ...initialData });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen, initialData]);


  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  };

    const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      metaTitle: prev.metaTitle || title, // Auto-fill meta title if empty
      slug: prev.slug || generateSlug(title) // Auto-generate slug if empty
    }));
  };

  // Image preview debounce
  useEffect(() => {
    const t = setTimeout(() => setImagePreview(form.image), 500);
    return () => clearTimeout(t);
  }, [form.image]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<FieldName, string>> = {};
    if (!form.title.trim()) newErrors.title = "Blog title is required";
    if (form.image && !/^https?:\/\/.+/.test(form.image))
      newErrors.image = "Please enter a valid URL";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleChange = (name: FieldName, value: string) => {
  //   setForm((p) => ({ ...p, [name]: value }));
  //   if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  // };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(form);
    setTimeout(() => { setSubmitted(false); onClose(); }, 1600);
  };

  // const handleOverlayClick = (e: React.MouseEvent) => {
  //   if (e.target === overlayRef.current) onClose();
  // };

    const addTag = (tag: string) => {
    if (tag && !form.tags.includes(tag)) {
      setForm(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

    const resetForm = () => {
    setForm({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      image: '',
      featuredImage: '',
      readTime: 5,
      tags: [],
      metaTitle: '',
      metaDescription: '',
      focusKeyword: '',
      slug: '',
      canonicalUrl: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #f59e0b44; border-radius: 4px; }
        .modal-scroll::-webkit-scrollbar-thumb:hover { background: #f59e0b88; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-enter { animation: slideUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
        .overlay-enter { animation: fadeIn 0.25s ease forwards; }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .check-pop { animation: checkPop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
      `}</style> */}

      {/* <div
      >
       
        <div
          className="modal-enter relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden"
        >
       
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />
          <div className="relative shrink-0 px-8 pt-8 pb-6 border-b border-white/[0.07]">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 border border-amber-500/20 rounded-full px-3 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  <span className="text-[10px] tracking-[0.18em] uppercase font-semibold">
                    {mode === "edit" ? "Edit Blog" : "New Blog"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {mode === "edit" ? "Update Blog" : "Create Blog"}
                </h2>
                <p className="text-xs mt-1 font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Fill in the details below to {mode === "edit" ? "update the" : "add a new"} blog
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all text-lg leading-none"
              >
                ×
              </button>
            </div>
          </div>

          <div className="modal-scroll flex-1 overflow-y-auto px-8 py-6">

          
            {imagePreview && (
              <div className="mb-6 rounded-2xl overflow-hidden h-36 relative border border-black">
                <img src={imagePreview} alt="preview" className="w-full h-full object-cover"
                  onError={() => setImagePreview("")} />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-wider font-semibold">Preview</span>
              </div>
            )}

      
            <div className="grid grid-cols-2 gap-4">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={field.span === 2 ? "col-span-2" : "col-span-2 sm:col-span-1"}
                >
                  <label
                    className="flex items-center gap-1.5 text-black/50 text-[11px] tracking-[0.12em] uppercase font-semibold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {field.label}
                    {field.required && <span className="text-red-400 ml-0.5">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      placeholder={field.placeholder}
                      value={form[field.name as FieldName] as string}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full resize-none rounded-xl px-4 py-3 text-sm placeholder-black/20 transition-all outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors[field.name as FieldName] ? "1px solid black" : "1px solid",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid black"; }}
                      onBlur={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid black"; }}
                    />
                  ) : field.type === "select" ? (
                    <select
                      value={form[field.name as FieldName] as string}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all outline-none appearance-none"
                      style={{
                    
                        border: "1px solid black",
                        color: form[field.name as FieldName] ? "black" : "black",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <option value="">
                        {field.placeholder}
                      </option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as FieldName] as string}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm placeholder-black/20 transition-all outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors[field.name as FieldName] ? "1px solid black" : "1px solid black",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid black"; }}
                      onBlur={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid black"; }}
                    />
                  )}

         
                  {errors[field.name as FieldName] && (
                    <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors[field.name as FieldName]}
                    </p>
                  )}
                </div>
              ))}
             <div>
            <label className="text-black/50 text-[11px] tracking-[0.12em] uppercase font-semibold mr-2 mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >Published</label>
                  <input type="checkbox" checked={form.isPublished} onChange={(e)=> setForm({...form, isPublished: e.target.checked})} />
                </div>
            </div>
          </div>

          <div className="shrink-0 px-8 py-5 border-t border-white/[0.07] flex items-center justify-between gap-3">
            <p className="text-black/50 text-[11px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-red-400">*</span> Required fields
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 cursor-pointer rounded-xl border border-black/10 text-black/40 hover:border-white/20 text-sm font-medium transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif", padding: "0.625rem 1.25rem", borderRadius: '14px' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitted}
                className="relative cursor-pointer px-7 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden"
                style={{
                  background: submitted ? "rgba(245,158,11,0.15)" : "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: submitted ? "rgba(245,158,11,0.7)" : "#000",
                  border: submitted ? "1px solid rgba(245,158,11,0.3)" : "none",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: submitted ? "none" : "0 4px 20px rgba(245,158,11,0.3)",
                  padding: "0.625rem 1.25rem",
                  borderRadius: '14px'
                }}
              >
                {submitted ? (
                  <span className="check-pop inline-flex items-center gap-2">
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="16 5 8 14 4 10" />
                    </svg>
                    Saved!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {mode === "edit" ? "✎ Update Blog" : "+ Create Blog"}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div> */}


        <div className="bg-white mt-4 rounded-xl shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {mode === 'edit' ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                      required
                    />
                  </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Buying Guide">Buying Guide</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Budget Properties">Budget Properties</option>
                  <option value="Luxury Properties">Luxury Properties</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (minutes)</label>
                <input
                  type="number"
                  value={form.readTime}
                  onChange={(e) => setForm(prev => ({ ...prev, readTime: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Featured Image Upload */}
            <div>
              <div>


        {/* Featured Images */}
        <div>
          <label className="block mt-4 text-sm font-medium text-gray-700 mb-1">
            Featured Images
          </label>
          <input 
            type='text'
            placeholder="https://example.com/image.jpg"
            onChange={(e) => setForm(prev => ({ ...prev, featuredImage: e.target.value }))} 
            className="border rounded-lg px-3 py-2 w-full focus:ring-1 focus:ring-[#1800ad]" 
          />
          
          {/* Existing uploaded images */}
          {form.featuredImage && (
            <div>
              <p className="text-xs text-gray-500 mt-2">Uploaded Images:</p>
              <div className="flex gap-2 mt-2 overflow-x-auto">
                  <div className="relative group">
                    <img 
                      src={form.featuredImage} 
                      alt="uploaded" 
                      className="w-20 h-20 object-cover rounded border-2 border-green-500" 
                    />
                    <button
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, featuredImage: '' }))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
              </div>
            </div>
          )}
          
          {/* Preview new images */}
          {/* {featuredPreviews.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 mt-2">New Images (not uploaded yet):</p>
              <div className="flex gap-2 mt-2 overflow-x-auto">
                {featuredPreviews.map((src, idx) => (
                  <div key={idx} className="relative group">
                    <img 
                      src={src} 
                      alt="preview" 
                      className="w-20 h-20 object-cover rounded border-2 border-blue-500" 
                    />
                    <button
                      type="button"
                      onClick={() => removePreviewImage(idx,'featuredImage')}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>



                {/* Exterior Images */}
        <div>
          <label className="block mt-4 text-sm font-medium text-gray-700 mb-1">
            Content Image
          </label>
          <input 
            type='text'
            placeholder='https://example.com/image.jpg'
            onChange={(e) => setForm(prev => ({ ...prev, image: e.target.value }))} 
            className="border rounded-lg px-3 py-2 w-full focus:ring-1 focus:ring-[#1800ad]" 
          />
          
          {form.image && (
            <div>
              <p className="text-xs text-gray-500 mt-2">Uploaded Images:</p>
              <div className="flex gap-2 mt-2 overflow-x-auto">
                  <div className="relative group">
                    <img 
                      src={form.image} 
                      alt="uploaded" 
                      className="w-20 h-20 object-cover rounded border-2 border-green-500" 
                    />
                    <button
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, image: '' }))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
              </div>
            </div>
          )}
          
          {/* {imagePreviews.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 mt-2">New Images (not uploaded yet):</p>
              <div className="flex gap-2 mt-2 overflow-x-auto">
                {imagePreviews.map((src, idx) => (
                  <div key={idx} className="relative group">
                    <img 
                      src={src} 
                      alt="preview" 
                      className="w-20 h-20 object-cover rounded border-2 border-blue-500" 
                    />
                    <button
                      type="button"
                      onClick={() => removePreviewImage(idx, 'image')}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>


              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <TiptapEditor
                value={form.content}
                onChange={(content: any) => setForm({ ...form, content: content })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a tag and press Enter"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag(e.currentTarget.value.trim());
                    e.currentTarget.value = '';
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* SEO Settings Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                SEO Settings
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Meta Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta Title
                    <span className="text-gray-500 text-xs ml-1">({form?.metaTitle?.length}/60)</span>
                  </label>
                  <input
                    type="text"
                    value={form.metaTitle}
                    onChange={(e) => setForm(prev => ({ ...prev, metaTitle: e.target.value }))}
                    placeholder="SEO title for search engines"
                    maxLength={60}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-[#1800ad] ${
                      (form?.metaTitle?.length || 0) > 60 ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  <p className={`text-xs mt-1 ${
                    (form?.metaTitle?.length || 0) > 60 ? 'text-red-500' : 
                    (form?.metaTitle?.length || 0) > 50 ? 'text-yellow-500' : 'text-gray-500'
                  }`}>
                    {(form?.metaTitle?.length || 0) > 60 ? 'Title too long!' : 
                     (form?.metaTitle?.length || 0) > 50 ? 'Good length' : 'Recommended: 50-60 characters'}
                  </p>
                </div>

                {/* Focus Keyword */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Focus Keyword</label>
                  <input
                    type="text"
                    value={form.focusKeyword}
                    onChange={(e) => setForm(prev => ({ ...prev, focusKeyword: e.target.value }))}
                    placeholder="Main keyword for this post"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                  />
                </div>
              </div>

              {/* Meta Description */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                  <span className="text-gray-500 text-xs ml-1">({form?.metaDescription?.length}/160)</span>
                </label>
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => setForm(prev => ({ ...prev, metaDescription: e.target.value }))}
                  placeholder="Brief description for search engine results"
                  maxLength={160}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-[#1800ad] ${
                    (form?.metaDescription?.length || 0) > 160 ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                <p className={`text-xs mt-1 ${
                  (form?.metaDescription?.length || 0) > 160 ? 'text-red-500' : 
                  (form?.metaDescription?.length || 0) > 150 ? 'text-yellow-500' : 'text-gray-500'
                }`}>
                  {(form?.metaDescription?.length || 0) > 160 ? 'Description too long!' : 
                   (form?.metaDescription?.length || 0) > 150 ? 'Good length' : 'Recommended: 150-160 characters'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* URL Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">/blog/</span>
                    <input
                      type="text"
                      value={form.slug}
                      onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="url-friendly-slug"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                    />
                    <button
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, slug: generateSlug(prev.title) }))}
                      className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                    >
                      Auto
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    URL-friendly version of your title
                    {form.slug && (
                      <span className="block mt-1 text-blue-600">
                        Full URL: /blog/{form.slug}
                      </span>
                    )}
                  </p>
                </div>

                {/* Canonical URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                  <input
                    type="url"
                    value={form.canonicalUrl}
                    onChange={(e) => setForm(prev => ({ ...prev, canonicalUrl: e.target.value }))}
                    placeholder="https://example.com/blog/post-url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1800ad]"
                  />
                  <p className="text-xs text-gray-500 mt-1">Preferred URL for this content (optional)</p>
                </div>
              </div>

              {/* SEO Preview */}
              {(form.metaTitle || form.metaDescription) && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Search Engine Preview:</h4>
                  <div className="border border-gray-200 rounded p-3 bg-white">
                    <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                      {form.metaTitle || form.title}
                    </div>
                    <div className="text-green-600 text-sm">
                      {form.canonicalUrl || `https://autodeal.com/blog/${form.slug || generateSlug(form.title)}`}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {form.metaDescription || form.excerpt}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                style={{borderRadius: '10px'}}
                disabled={submitted}
                className="bg-[#1800ad] text-white px-4 py-2 rounded-sm font-medium transition-colors"
              >
                {mode === 'edit' ? submitted ? 'Updating...' : 'Update Blog' : submitted ? 'Creating...' : 'Create Blog'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                style={{borderRadius: '10px'}}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
    </>
  );
}

