import React from 'react';
import YouTube from 'react-youtube';



const RetroJS = () => {
    return(
        <div style={styles.projectOne}>
            <div style={styles.projectInfo}>
                <h2>RetroJS</h2>
                <a href="https://retrojs-frontend.herokuapp.com">Live Demo</a>
                <a href="https://github.com/christianalim/retroJS">Github</a>
                <p>RetroJS is a 2D table-tennis game made using JavaScript and Ruby on Rails. 

                </p>
                <ul>
                    <li>
                        Generated Rails API backend to track players and games
                    </li>
                    <li>
                        Employed HTML5 Canvas to render/animate play field and characters
                    </li>
                    <li>
                        Designed and implemented game states and animation in JavaScript to allow  customizable gameplay
                    </li>
                </ul>
            </div>
             <div style={styles.videoHolder}>
                <YouTube
                    videoId="2g811Eo7K8U"
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
        flexDirection:'column',
        backgroundColor:'#f2f2f2',
        borderRadius: 10,
        padding: 10,
        margin: 10
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

export default RetroJS;