import React from 'react';


const StudyHub = () => {
    return(
        <div style={styles.projectOne}>
            <div style={styles.projectInfo}>
                <div style={styles.imageHolder}>
                    <img src={require("../assets/images/studyhubscreen.png")} style={styles.image} alt="studyhubscreenshot"/>
                </div>
                <div style={styles.description}>
                    <h2>StudyHub</h2>
                    <a href="https://www.youtube.com/watch?v=_i2snhJvMtQ">Demo Video</a>
                    <a href="https://github.com/christianalim/studyhub-frontend">Github Front-end</a>
                    <a href="https://github.com/christianalim/studyhub-backend">Github Back-end</a>
                    <p>StudyHub is an iOS app that empowers people to find public workspaces. I built it using React Native and Redux for the front-end, and Ruby on Rails with PostgreSQL for the back end. This project also utilizes Google Maps and Cloudinary APIs for location services and image hosting.
                    </p>
                    <ul>
                        <li>
                            Created and designed user interface using React Native and Redux
                        </li>
                        <li>
                            Developed Rails API and PostgreSQL backend with endpoints for users, reviews, hubs, and images
                        </li>
                        <li>
                            Utilized Google Maps API and Cloudinary API for location services and cloud image hosting to display user/hubs locations
                        </li>
                        <li>
                            Employed use of JSON Web Tokens and AsyncStorage to store encrypted user information client-side
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

const styles= {
    projectOne:{
        display:'flex',
        flexDirection:'row',
        gridColumnStart: 2,
        
    },
    projectInfo:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#f2f2f2',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    description:{
        width:'60%'
    },
    image:{
        height:'70%',
        width:'70%'
    },
    imageHolder:{
        display:'flex',
        justifyContent:'center'
    }
}


export default StudyHub;