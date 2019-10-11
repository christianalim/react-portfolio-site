import React from 'react';



const Home = () => {

    return(
        <div style={styles.container}>
            <div style={styles.leftCloudHolder}>
                <img src={require('../assets/images/cloud.png')} style={styles.leftCloud} />
            </div>
            <div style={styles.centerCloudHolder}>
                <img src={require('../assets/images/cloud.png')} style={styles.centerCloud} />
            </div>
            <div style={styles.leftMountainHolder}>
                <img src={require('../assets/images/leftmountain.png')} style={styles.mountains}/>
            </div>        
            <div style={styles.card}>
                    <h1 style={styles.title}>Christian A. Lim</h1>
                    <h6 style={styles.subtitle}>Software Engineer</h6>
                    <div style={styles.cardBottomDetail}></div>
                    <div style={styles.cardBottomDetail2}></div>
            </div>
            <div style={styles.rightMountainHolder}>
                <img src={require('../assets/images/rightmountain.png')} style={styles.mountains}/>
            </div> 
            <div style={styles.rightCloudHolder}>
                <img src={require('../assets/images/cloud.png')} style={styles.rightCloud} />
            </div>  
            <div style={styles.nav}>
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Resume</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

const styles = {
    container:{
        display: 'grid',
        gridTemplateColumns: '30% 40% 30%',
        gridTemplateRows: '33% 33% 33%',
        width: '100%',
        backgroundColor: '#9BC4CB',
    },
    title:{
        color:'#F7F7F2',
        fontSize: 65,
        margin: 0,
    },
    subtitle:{
        color:'#F7F7F2',
        fontSize: 40,
        margin: 10,
    },
    card:{
        textAlign:'center',
        gridColumnStart:2,
        gridRowStart: 2,
        placeSelf: 'center',
        borderStyle: 'solid',
        borderWidth: '2px 0px 0px 0px',
        borderColor: '#F7F7F2',
    },
    cardBottomDetail:{
        width:'100%',
        marginBottom:5,
        borderStyle: 'solid',
        borderWidth: '0px 0px 2px 0px',
        borderColor: '#F7F7F2',
    },
    cardBottomDetail2:{
        display:'inline-block',
        width:'80%',
        marginBottom:5,
        borderStyle: 'solid',
        borderWidth: '0px 0px 2px 0px',
        borderColor: '#F7F7F2',
    },
    mountains:{
        height: '147%',
        width: '100%',
        
    },
    leftMountainHolder:{
        gridColumnStart: 1,
        gridRowStart: 3,
        justifySelf:'end',
        
    },
    rightMountainHolder:{
        gridColumnStart: 3,
        gridRowStart:3,
        justifySelf:'end',
    },
    leftCloud:{
        height: '50%',
        width: '50%'
    },
    leftCloudHolder:{
        gridColumnStart: 1,
        gridRowStart: 2,
        justifySelf:'center',
    },
    centerCloud:{
        height: '40%',
        width: '40%',
    },
    centerCloudHolder:{
        gridColumnStart: 2,
        gridRowStart: 1,
        alignSelf:'start'
    },
    rightCloud:{
        height: '20%',
        width:'20%'
    },
    rightCloudHolder:{
        gridColumnStart: 3,
        gridRowStart: 2,
        alignSelf:'end',
        justifySelf:'center',
    },
    nav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        color:'#F7F7F2',
        gridColumnStart: 3,
        gridRowStart: 1
    }
    
}


export default Home;