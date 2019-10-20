import React from 'react'

const Resume = () => {

    return (
        <div style={styles.container}>
            <h1>Resume</h1>
            <a href="/resume.pdf" download>Download Resume!</a>
            
        </div>
    )
}

const styles = {
    container:{
        display:'flex',
        alignItems:'center'
    }
}


export default Resume;