import React from 'react'
import LocationAndCategory from '@/components/elements/LocationAndCategory'

interface CategoryPageProps {
  params: Promise<{
    location: string;
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const { location, category } = await params;

  const decodedLocation = decodeURIComponent(location);
  const decodedCategory = decodeURIComponent(category);

  return {
    title: `${decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)} in ${
      decodedLocation.charAt(0).toUpperCase() + decodedLocation.slice(1)
    }`,
    alternates: {
      canonical: `/${decodedCategory.replace(/\s+/g, "-")}-in-${decodedLocation.replace(/\s+/g, "-")}`,
    },
  };
}


const Page = () => {
  return (
    <div>
      <LocationAndCategory/>
    </div>
  )
}

export default Page
