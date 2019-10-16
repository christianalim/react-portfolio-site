import React from 'react';
import YouTube from 'react-youtube';



const Tickr = () => {
    return(
        <div style={styles.projectOne}>
             <div style={styles.videoHolder}>
                <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={_onReady}
                />
            </div>
            <div style={styles.projectInfo}>
                <h2>Tickr</h2>
                <a href="#">Live Demo</a>
                <a href="https://github.com/christianalim/Tickr-frontend">Github Front-End</a>
                <a href="https://github.com/christianalim/Tickr-backend">Github Back-End</a>
                <p>TICKR is a web application that allows users to track their stock portfolio's performance in real time. It was built with React and Ruby on Rails.

                </p>
                <ul>
                    <li>
                    Built complex Rails API backend with PostgreSQL using JWT authorization to establish user and portfolio relationships
                    </li>
                    <li>
                    Produced React JS frontend with Material UI to showcase portfolio information and news
                    </li>
                    <li>
                    Created data visualization for stocks showcasing time and price data using Recharts API
                    </li>
                    <li>
                    Incorporated multiple third-party APIs to fetch real-time stock price data and stock-specific news
                    </li>
                </ul>
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
      autoplay: 0
    }
};
const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

export default Tickr;