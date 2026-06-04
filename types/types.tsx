export interface PropertyListItem {
    _id?: string;
    name: string;
    images: string[];
    video: string;
    description: string;
    address: string;
    zipCode: string;
    country: string;
    category: string;
    listedIn: string;
    state: string;
    city: string;
    sold: boolean;
    status: string;
    agent: string;
    for: string;
    propertyPrices: {
        propertyPrice: number;
        yearlyTaxRate: number;
        afterPriceLabel: number;
    },
    additionalInformation: {
        propertySize: string;
        landArea: string;
        rooms: number;
        bedrooms: number;
        bathrooms: number;
        garages: number;
        garageSize: string;
        yearBuilt: string;
        basement: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
    },
    amenities: string[],
    floors: {
        floorNumber: number;
        floorImage: string;
        floorPrice: number;
        floorSize: number;
        bedrooms: number;
        bathrooms: number;
    }[],
}

export interface BlogType {
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