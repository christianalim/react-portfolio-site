import React from 'react';


const Tickr = () => {
    return(
        <div style={styles.projectOne}>
            
            <div style={styles.projectInfo}>
                <div style={styles.imageHolder}>
                    <img src={require("../assets/images/tickr.png")} style={styles.image} alt="tickr"/>
                </div>
                <h2>Tickr</h2>
                <a href="https://tickr-stock.herokuapp.com/">Live Demo</a>
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



export default Tickr;