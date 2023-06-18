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

export default MeetupDetails;
