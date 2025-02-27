import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import createDummy from "@/helpers/createDummy";
export default function newMeetUp(){
    return (
        <Layout>
            <NewMeetupForm onAddMeetup={createDummy}/>
        </Layout>
    )
}