import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {type: String, required: true, trim: true},
  excerpt: {type: String, required: true, trim: true},
  content: {type: String, required: true, trim: true},
  author: {type: String, required: true, trim: true},
  category: {type: String, required: true, trim: true},
  image: {type: String},
  featuredImage: {type: String},
  readTime: {type: Number, trim: true},
  tags: [{type: String}],
  // SEO Fields
  metaTitle: {type: String, trim: true},
  metaDescription: {type: String},
  focusKeyword: {type: String},
  slug: {type: String, required: true, trim: true},
  canonicalUrl: {type: String, trim: true},
  publishDate: { type: Date, default: Date.now() }
});

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);