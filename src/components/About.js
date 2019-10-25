import React from 'react'


const About = () => {
    
    return (
        <div style={styles.container}>
            <div style={styles.profile}>
                <h1>Hi. I'm Christian.</h1>
                <img src={require("../assets/images/profile.jpg")} style={styles.profileImage} alt="profile"/>

                <div style={styles.info}>
                    <p> I'm a full-stack software engineer with experience using React, Redux, and Ruby on Rails. I found web development through working with others to create unique solutions for problems in my finance career. With a background in trading, I am accustomed to working under pressure and having to think quickly and critically to succeed. I strive to bring my abundant curiosity and passion for solving interesting problems to web development.</p>
                    <div style={styles.resumeHolder}>
                        <h4>Download Resume</h4>
                        <a href="/christian_lim_resume.pdf" download>
                            <img src={require("../assets/images/resume.png")} style={styles.resume} alt="link to Christian Lim's resume" />
                        </a>
                    </div>
                </div>
                <div style={styles.technologies}>
                    <h4>Here are a few technologies I've been working with:</h4>
                    <div style={styles.techList}>
                        <div>
                            <img src={require("../assets/images/webIcons/javascripticon.png")} style={styles.techIcons} alt="javascript"/>
                            <h6>JavaScript (ES6+)</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/reactjs.png")} style={styles.techIcons} alt="react"/>
                            <h6>React</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/reactjs.png")} style={styles.techIcons} alt="react native"/>
                            <h6>React Native</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/redux.png")} style={styles.techIcons} alt="redux"/>
                            <h6>Redux</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/html.png")} style={styles.techIcons} alt="html5"/>
                            <h6>HTML5</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/css.png")} style={styles.techIcons} alt="css"/>
                            <h6>CSS3</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/ruby.png")} style={styles.techIcons} alt="ruby"/>
                            <h6>Ruby</h6>
                        </div>
                        <div>
                            <img src={require("../assets/images/webIcons/rails.png")} style={styles.techIcons} alt="rails"/>
                            <h6>Rails</h6>
                        </div>
                        <div>
                        <img src={require("../assets/images/webIcons/postgres.png")} style={styles.techIcons} alt="postgres"/>
                            <h6>PostgreSQL</h6>
                        </div>
                        <div>
                        <img src={require("../assets/images/webIcons/git.png")} style={styles.techIcons} alt="git"/>
                            <h6>Git</h6>
                        </div>
                    </div>
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
        textAlign:'center',
        borderStyle: 'solid',
        borderWidth: '0px 0px 2px 0px',
        borderColor: 'black',
    
    },
    ul:{
        listStyleType: 'none',
    },
    techList:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
        width:'100%',

    },
    techIcons:{
        height: '5rem',
        width:'5rem'
    },
    resume:{
        height: '5rem',
        width:'5rem'
    }
}



export default About;
