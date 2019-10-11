import React from 'react'


const About = () => {
    
    return (
        <div style={styles.container}>
            <div style={styles.profile}>
                <h1>Hi. I'm Christian.</h1>
                <img src={require("../assets/images/profile.jpg")} style={styles.profileImage} />

                <div style={styles.info}>
                    <p> I'm a full-stack software engineer with experience using React, Redux, and Ruby on Rails. I found web development through working with others to create unique solutions for problems in my finance career. With a background in trading, I am accustomed to working under pressure and having to think quickly and critically to succeed. I strive to bring my abundant curiosity and passion for solving interesting problems to web development.</p>
                </div>
                <div style={styles.technologies}>
                    <h4>Here are a few technologies I've been working with:</h4>
                    <ul style={styles.ul}>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>HTML5 & CSS</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

const styles = {
    container:{
        display:'grid',
        gridTemplateColumns: '15% 70% 15%',
        gridTemplateRows: '50% 50%',
        width: '100%',
        backgroundColor: '#F7F7F2',
    },
    profile:{
        gridColumnStart: 2,
        gridRowStart: 1,
        textAlign:'center',
    },
    profileImage:{
        height: '20rem',
        width: '20rem',
        borderRadius: 10,
    },
    info:{
        textAlign:'start',
        borderStyle: 'solid',
        borderWidth: '0px 0px 2px 0px',
        borderColor: 'black',
    },
    ul:{
        listStyleType: 'none',
    }
}



export default About;
