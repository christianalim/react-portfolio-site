import React from 'react'


const About = () => {
    
    return (
        <div style={styles.container}>
            <h1>About</h1>
            <h2>Hi. I'm Christian.</h2>
            <img src={require("../assets/images/profile.jpg")} height="100" width="100" />
            <p> I'm a full-stack software engineer with experience using React, Redux, and Ruby on Rails. I found web development through working with others to create unique solutions for problems in my finance career. With a background in trading, I am accustomed to working under pressure and having to think quickly and critically to succeed. I strive to bring my abundant curiosity and passion for solving interesting problems to web development.</p>

        </div>
    )
}

const styles = {
    container:{
        display:'grid',
        gridTemplateColumns: '30% 40% 30%',
        gridTemplateRows: '33% 33% 33%',
        width: '100%',
        backgroundColor: '#F7F7F2',
    }
}



export default About;
