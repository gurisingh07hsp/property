import Layout from "@/components/layout/Layout";
import Hero4 from "@/components/sections/Hero4";
import Team4 from "@/components/sections/Team4";
import Properties5 from "@/components/sections/Properties5";
import Properties6 from "@/components/sections/Properties6";
import Blog3 from "@/components/sections/Blog3";
import Cta2 from "@/components/sections/Cta2";
import PropertyLocation3 from "@/components/sections/PropertyLocation3";
import Others2 from "@/components/sections/Others2";
import Testimonial4 from "@/components/sections/Testimonial4";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import FeaturedDevelopers from "@/components/sections/FeaturedDevelopers";
import ModernTestimonial from "@/components/sections/ModernTestimonial";
export default function Home2() {
    return (
        <>
            {/* <Layout headerStyle={4} footerStyle={4}> */}
                <div className="homepage4-hero-shell">
                    <Hero4 />
                </div>
                <PropertyLocation3 />
                <Properties5 />
                <FeaturedProjects />
                <FeaturedDevelopers />
                {/* <Properties6 /> */}
                {/* <Team4 /> */}
                {/* <Others2 /> */}
                <ModernTestimonial />
                <Blog3 />
                <Cta2 />
            {/* </Layout> */}
        </>
    );
}
