import React from 'react';


function ProfileCard({name, age, email, imgSrc}){
    
    const cardStyle={
        width: '150px',
        height: '160px',
        borderRadius: '0px',
        border: '3px solid black',
        margin: '10px',
        padding: '10px'
    }

    const imgStyle={
        width:'100%',
        height:'100px',
        
    };
    const descStyle={
        height: '100px',
        width: '100%',
        borderRadius: '0px',
        // border: '3px solid black',
        // margin: '10px',
        // padding: '10px'
        textAlign: 'left'
    }
    
    const h1Style={
        fontSize: '16px',
        color: 'black',
        margin: '2px',
        textAlign: 'left'
    }
    const pStyle={
        fontSize: '8px',
        color: 'black',
        margin: '2px',
        textAlign: 'left'
    }
    return(
        <div style={cardStyle}>
            <img style={imgStyle} src={imgSrc}  />
           <div style={descStyle}>
            <h1 style={h1Style}>{name}</h1>
            <p style={pStyle}>{age}</p>
            <p style={pStyle}>{email}</p>
           </div>
            
        </div>
    )
}

export default ProfileCard;