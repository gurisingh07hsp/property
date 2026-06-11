import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
    },
    developerName: {
        type: String
    },
    price: {type: String},
    category: {type: String},
    featuredImage: {type: String},
    galleryImage: {type: String},
    discription: {type: String},
    address: {type: String},
    city: {type: String},
    launchDate: {type: String},
    status: {type: String},
    reraId: {type: String},
    totalUnit: {type: String},
    areaUnit: {type: String},
    projectArea: {type: String},
    numOfTowers: {type: String},
    metaTitle: {type: String},
    slug: {type: String},
    metaDescription: {type: String}
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);