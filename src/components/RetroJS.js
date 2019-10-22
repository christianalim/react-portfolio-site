import React from 'react';

const RetroJS = () => {
    return(
        <div style={styles.projectOne}>
            <div style={styles.projectInfo}>
                <div style={styles.imageHolder}>
                    <img src={require("../assets/images/retroJSpic.png")} style={styles.image} alt="retroPic"/>
                </div>
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
    image:{
        height:'70%',
        width:'70%'
    },
    imageHolder:{
        display:'flex',
        justifyContent:'center'
    }
}



export default RetroJS;