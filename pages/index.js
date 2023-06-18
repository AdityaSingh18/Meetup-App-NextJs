import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react';


const DUMMY_MEETUPS = [
  {
  id: "m1",
  title: 'A First Meetup',
  image: 'https://thumbs.dreamstime.com/b/beautiful-shot-architectural-budling-london-191060517.jpg',
  address: 'DownTown New York',
  description: 'This is the first meetup'
  },
  {
  id: "m2",
  title: 'Second Meetup',
  image: 'https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=',
  address: '123 Main Street, Cityville',
  description: 'This is the second meetup'
  },
  {
  id: "m3",
  title: 'Third Meetup',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWapQvBiW7a_R2OIISDFriLnQ8QwiEF9kYrg&usqp=CAU',
  address: '456 Elm Street, Townsville',
  description: 'This is the third meetup'
  }
  ];

 

export default function HomePage(props) {

  const [loadedMeetups,setLoadedMeetups] = useState([]);
  useEffect(()=>{
  setLoadedMeetups(DUMMY_MEETUPS)
  },[]);
  return (
<MeetupList meetups={props.meetups}/>
  )
}

// export async function getServerSideProps(context){

//   const req = context.req;
//   const res = context.res;
//    return {
//     meetups:DUMMY_MEETUPS
//    }
// }

export async function getStaticProps(){
  return {
    props:{
      meetups:DUMMY_MEETUPS
    }
    ,
    revalidate:10
  }
    }
