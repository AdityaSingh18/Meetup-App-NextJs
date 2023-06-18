import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://thumbs.dreamstime.com/b/beautiful-shot-architectural-budling-london-191060517.jpg"
      title="First Meetup"
      address="some street,some City"
      description="this is first meetup"
    />
  );
}
export function getStaticPaths() {
  return {
    fallback:false,
    paths: [{ params: { meetupId: "m1" } },
    { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://thumbs.dreamstime.com/b/beautiful-shot-architectural-budling-london-191060517.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "some street,some City",
        description: "this is first meetup",
      },
    },
  };
}
export default MeetupDetails;
