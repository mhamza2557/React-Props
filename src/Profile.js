import React from 'react';

const Profile = (props) => {
    return (
        <div style={{
            border: '2px solid',
            padding: '6px',
            margin: '2px 0px',
            display: 'table'
        }}>
            Name: {props.name}
            <br />
            Education : {props.education}
            <br />
            Age : {props.age}
        </div>
    );
};

export default Profile;