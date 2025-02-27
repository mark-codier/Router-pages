import MeetupDetail from "@/components/meetups/MeetupDetails";
import Layout from "@/components/layout/Layout";
import getSpecifiedDummy from "@/helpers/getSpecifiedDummy";
import getDummies from "@/helpers/getDummies";
export async function getStaticPaths() {
    const { props } = await getDummies(); // Fetch all meetups

    const paths = props.meetups.map(meetup => ({
        params: { ID: meetup._id }, // Define all available meetup IDs
    }));

    return {
        paths, // [ { params: { meetup: 'm1' } }, { params: { meetup: 'm2' }, { params: { meetup: 'm3' } }, { params: { meetup: 'm4' }  } ]
        fallback: "blocking", // Generates new pages dynamically if not pre-rendered
    };
}

export async function getStaticProps(context) {
    console.log(context);
    const meetupId = context.params.ID; // Get the meetup ID from the URL
    const meetup = await getSpecifiedDummy(meetupId);

    if (!meetup) {
        return { notFound: true }; // Show 404 if ID is invalid
    }

    return {
        props: { meetup },
        revalidate: 10, // Regenerate page every 10 seconds
    };
}

export default function MeetupDetails({ meetup }) {
    return (
        <Layout>
            <MeetupDetail meetup={meetup} />
        </Layout>
    );
}
