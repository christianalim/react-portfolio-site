import React from 'react';
import YouTube from 'react-youtube';



const StudyHub = () => {
    return(
        <div style={styles.projectOne}>
            <div style={styles.projectInfo}>
                <h2>StudyHub</h2>
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
            <div style={styles.videoHolder}>
                <YouTube
                    videoId="i2snhJvMtQ"
                    opts={opts}
                    onReady={_onReady}
                />
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
        flexDirection:'column'
    },
    videoHolder:{
        display:'flex',
        justifyContent: 'center'
    }
}

//For youtube players
const opts = {
    height: '400rem',
    width: '500rem',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
};
const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

export default StudyHub;