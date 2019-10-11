import React from 'react';



const Home = () => {

    return(
        <div style={styles.container}>
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
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        height: 700,
        width: '100%',
        backgroundColor: '#9BC4CB',
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row',
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
        flex: 1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width: '30%',
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
        width:'80%',
        marginBottom:5,
        borderStyle: 'solid',
        borderWidth: '0px 0px 2px 0px',
        borderColor: '#F7F7F2',
    },
    mountains:{
        height: 450,
        width: 450,
        overflow:'hidden',
    },
    leftMountainHolder:{
        flex:1,
        paddingTop: 550,
    },
    rightMountainHolder:{
        flex:1,
        paddingTop: 500,
    }
}


export default Home;