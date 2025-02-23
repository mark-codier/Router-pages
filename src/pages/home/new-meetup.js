import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
export default function newMeetUp(){
    return (
        <Layout>
            <NewMeetupForm onAddMeetup={(prop)=>{console.log(prop)}}/>
        </Layout>
    )
}