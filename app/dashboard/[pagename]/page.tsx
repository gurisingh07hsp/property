'use client'
import { useParams } from "next/navigation";
import MyProperty from "@/components/elements/userdashboard/MyProperty";
import Message from "@/components/elements/userdashboard/Message";
import MyFavorites from "@/components/elements/userdashboard/MyFavouties";
import Reviews from "@/components/elements/userdashboard/Reviews";
import MyProfile from "@/components/elements/userdashboard/MyProfile";
import AddPropertyPage from "@/components/elements/userdashboard/AddProperty";
import ProjectManagement from "@/components/admin/ProjectManagement";
export default function Page() {
    const {pagename} = useParams();
    console.log("dashborad page: ", pagename);

  return (
    <>
      {pagename == 'my-property' && <MyProperty/>}
      {pagename == 'message' && <Message/>}
      {pagename == 'my-favorites' && <MyFavorites/>}
      {pagename == 'reviews' && <Reviews/>}
      {pagename == 'my-profile' && <MyProfile/>}
      {pagename == 'add-property' && <AddPropertyPage/>}
      {pagename == 'add-project' && <ProjectManagement/>}
    </>
  );
}
