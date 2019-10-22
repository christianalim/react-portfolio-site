import React from 'react'
import StudyHub from './StudyHub';
import Tickr from './Tickr';
import RetroJS from './RetroJS';



const Work = () => {

        return (
            <div style={styles.container}>
                <div style={styles.title}>
                    <h1>Here's some things I've built:</h1>
                </div>
                <StudyHub />
                <Tickr />
                <RetroJS />

            </div>
        )
}

const styles = {
    container:{
        display:'grid',
        gridTemplateColumns: '10% 80% 10%',
        width: '100%',
        backgroundColor: '#9BC4CB',
    },
    title:{
        gridColumnStart: 2,
    },
    
}


export default Work;

