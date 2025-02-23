import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import getDummies from "@/helpers/getDummies";
export async function getStaticProps(){
    const meetups = await getDummies();
    return {
        props: {
            meetups
        },
        revalidate: 10
    }
}
export default function Home({meetups}){
    console.log(meetups)
    return (
        <Layout>
            <MeetupList meetups={meetups} />
        </Layout>
    )
}