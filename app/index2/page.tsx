import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Hero2 from "@/components/sections/Hero2";
import Service2 from "@/components/sections/Service2";
import Properties2 from "@/components/sections/Properties2";
import Case1 from "@/components/sections/Case1";
import PropertyLocation2 from "@/components/sections/PropertyLocation2";
import Testimonial2 from "@/components/sections/Testimonial2";
import Category1 from "@/components/sections/Category1";
import Properties3 from "@/components/sections/Properties3";
import Team2 from "@/components/sections/Team2";
export default function Home2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Hero2 />
                <Service2 />
                <About2 />
                <Properties2 />
                <Case1 />
                <Category1 />
                <Properties3 />
                <Team2 />
                <Testimonial2 />
                <PropertyLocation2 />
            </Layout>
        </>
    );
}
