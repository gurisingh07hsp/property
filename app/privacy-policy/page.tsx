import Layout from "@/components/layout/Layout";
import InnerHeader from "@/components/layout/InnerHeader";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
export default function Home() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <InnerHeader title="Privacy Policy" currentpage="Privacy Policy" />
                <PrivacyPolicy />
                <div className="space30"></div>
            </Layout>
        </>
    );
}
