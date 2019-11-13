import React from 'react';


const Tickr = () => {
    return(
        <div style={styles.projectOne}>
            
            <div style={styles.projectInfo}>
                <div style={styles.imageHolder}>
                    <img src={require("../assets/images/tickr.png")} style={styles.image} alt="tickr"/>
                </div>
                <h2>Tickr</h2>
                <div style={styles.linkHolder}>
                    <a href="https://tickr-stock.herokuapp.com/"
                    style={styles.a}
                    >
                        <img src={require("../assets/images/webIcons/browser.png")} style={styles.techIcons} alt="browser icon"/>

                        Live Demo
                    </a>
                    <a href="https://github.com/christianalim/Tickr-frontend" style={styles.a}>
                        <img src={require("../assets/images/webIcons/github.png")} style={styles.techIcons} alt="github frontend"/>
                        Github Front-End
                    </a>
                    <a href="https://github.com/christianalim/Tickr-backend" style={styles.a}>
                        <img src={require("../assets/images/webIcons/github.png")} style={styles.techIcons} alt="github backend"/>
                        Github Back-End
                    </a>
                </div>
                <div style={styles.listHolder}>

                
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
        alignItems:'center',
        backgroundColor:'#f2f2f2',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    image:{
        height:'70%',
        width:'70%',
        borderRadius: 10,
        border: '1px solid #ddd'
    },
    imageHolder:{
        display:'flex',
        justifyContent:'center'
    },
    linkHolder:{
        display:'flex',
        width:'80%',
        justifyContent:'space-around'
    },
    techIcons:{
        height: '3rem',
        width:'3rem'
    },
    a:{
        textDecoration: 'none',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    listHolder:{
        width:'80%',
        
    }
}



export default Tickr;