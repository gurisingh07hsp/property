import React from 'react'
import LocationAndCategory from '@/components/elements/LocationAndCategory'

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);
  console.log('Slug : ', decodedSlug);

  return {
    title: `${decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1)}`,
    alternates: {
      canonical: `/${decodedSlug.replace(/_/g, "-")}`,
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
