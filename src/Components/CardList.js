import React from 'react';
import ProfileCard from './UserProfile';
import Profile1 from '../Profile/Profile1.png';
import Profile2 from '../Profile/Profile2.png';
import Profile3 from '../Profile/Profile3.png';
import Profile4 from '../Profile/Profile4.png';

function CardList(){
    const cardListStyle={
        width:"100%",
        height:"600px",
        display:"flex",
        // flexWrap:"wrap",
        justifyContent:"space-between",
        margin:"10px",
        backgroundColor:"white",
    }
    const userData=[
        {   
            id:"1",
            name:"Mr. Dog",
            age:"44",
            email:"MrDog@123",
            image:Profile1,
        },
        {   
            id:"2",
            name:"Mr. Topper",
            age:"18",
            email:"Topper@123",
            image:Profile2,
        },
        {   
            id:"3",
            name:"Cute Lady",
            age:"14",
            email:"Cutie@123",
            image:Profile3,
        },
        {
            id:"4",
            name:"Onichan",
            age:"21",
            email:"onichan@123",
            image:Profile4,
        }
    ];

    
return (
    <div style={cardListStyle}>
        {
            userData.map((user)=>{
                return <ProfileCard name={user.name} age={user.age} email={user.email} imgSrc={user.image} />
            })
        }
    </div>
);

}
export default CardList;