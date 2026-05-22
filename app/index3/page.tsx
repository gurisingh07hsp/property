import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Hero3 from "@/components/sections/Hero3";
import Step1 from "@/components/sections/Step1";
import Listing1 from "@/components/sections/Listing1";
import PropertyLocation2 from "@/components/sections/PropertyLocation2";
import Testimonial3 from "@/components/sections/Testimonial3";
import Category2 from "@/components/sections/Category2";
import Properties3 from "@/components/sections/Properties3";
import Team3 from "@/components/sections/Team3";
import Properties4 from "@/components/sections/Properties4";
import About3 from "@/components/sections/About3";
import Blog2 from "@/components/sections/Blog2";
import Cta1 from "@/components/sections/Cta1";
import SearchBox from "@/components/sections/SearchBox";

export default function Home2() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Hero3 />
                <div className="search-box-3">
                    <SearchBox />
                </div>
                <About3 />
                <Step1 />
                <Properties4 />
                <Category2 />
                <Listing1 />
                <Team3 />
                <Testimonial3 />
                <Blog2 />
                <Cta1 />
            </Layout>
        </>
    );
}
