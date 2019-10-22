import React from "react";


const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftCloudHolder}>
        <img
          src={require("../assets/images/cloud.png")}
          style={styles.leftCloud}
          alt=""
        />
      </div>
      <div style={styles.centerCloudHolder}>
        <img
          src={require("../assets/images/cloud.png")}
          style={styles.centerCloud}
          alt=""
        />
      </div>
      <div style={styles.leftMountainHolder}>
        <img
          src={require("../assets/images/leftmountain.png")}
          style={styles.leftmountains}
          alt=""
        />
      </div>
      <div style={styles.card}>
        <h1 style={styles.title}>Christian A. Lim</h1>
        <h6 style={styles.subtitle}>Software Engineer</h6>
        <div style={styles.cardBottomDetail}></div>
        <div style={styles.cardBottomDetail2}></div>
      </div>
      <div style={styles.rightMountainHolder}>
        <img
          src={require("../assets/images/rightmountain.png")}
          style={styles.rightmountains}
          alt=""
        />
      </div>
      <div style={styles.rightCloudHolder}>
        <img
          src={require("../assets/images/cloud.png")}
          style={styles.rightCloud}
          alt=""
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "30% 40% 30%",
    gridTemplateRows: "33% 33% 33%",
    width: "100%",
    backgroundColor: "#9BC4CB",
    overflow: "hidden"
  },
  title: {
    color: "#F7F7F2",
    fontSize: 65,
    margin: 0
  },
  subtitle: {
    color: "#F7F7F2",
    fontSize: 40,
    margin: 10
  },
  card: {
    textAlign: "center",
    gridColumnStart: 2,
    gridRowStart: 2,
    placeSelf: "center",
    borderStyle: "solid",
    borderWidth: "2px 0px 0px 0px",
    borderColor: "#F7F7F2"
  },
  cardBottomDetail: {
    width: "100%",
    marginBottom: 5,
    borderStyle: "solid",
    borderWidth: "0px 0px 2px 0px",
    borderColor: "#F7F7F2"
  },
  cardBottomDetail2: {
    display: "inline-block",
    width: "80%",
    marginBottom: 5,
    borderStyle: "solid",
    borderWidth: "0px 0px 2px 0px",
    borderColor: "#F7F7F2"
  },
  leftmountains: {
    height: "150%",
    width: "150%"
  },
  rightmountains: {
    height: "150%",
    width: "150%"
  },
  leftMountainHolder: {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 3,
    justifySelf: "start",
    transform: "translate(-150px)"
  },
  rightMountainHolder: {
    gridColumnStart: 3,
    gridRowStart: 3,
    gridRowend: 2,
    justifySelf: "end",
    transform: "translate(-10px, -10px)"
  },
  leftCloud: {
    height: "50%",
    width: "70%"
  },
  leftCloudHolder: {
    gridColumnStart: 1,
    gridRowStart: 2,
    justifySelf: "center"
  },
  centerCloud: {
    height: "40%",
    width: "40%"
  },
  centerCloudHolder: {
    gridColumnStart: 2,
    gridRowStart: 1,
    alignSelf: "start"
  },
  rightCloud: {
    height: "20%",
    width: "20%"
  },
  rightCloudHolder: {
    gridColumnStart: 3,
    gridRowStart: 2,
    alignSelf: "end",
    justifySelf: "center"
  },
  nav: {
    float: "right",
    display: "flex",
    flexDirection:'row',
    alignItems:'space-around',
    color: "#f2f2f2",
    padding: "14px",
    position: "fixed"
  }
};

export default Home;
