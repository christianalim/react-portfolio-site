import React from 'react'

const Contact = () => {

   

    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <h1>Contact Me</h1>
            </div>
            <div style={styles.formHolder}>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/christiananthonylim1@gmail.com" method="post" style={styles.form}>
                    <fieldset id="fs-frm-inputs" style={styles.fieldset}>
                        <div style={styles.formInputHolder}>
                            {/* <label for="full-name">Name</label> */}
                            <input style={styles.formInput} type="text" name="name" id="full-name" placeholder="Name" required="" />
                            {/* <label for="email-address">Email Address</label> */}
                            <input style={styles.formInput} type="email" name="_replyto" id="email-address" placeholder="email" required="" />
                        </div>
                        <br/>
                        <label for="message">Message</label>
                        <br />

                        <textarea style={styles.textarea} rows="5" name="message" id="message" placeholder="Please enter message here" required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                        <br/>
                        <br/>
                        <input style={styles.submit} type="submit" value="Submit" />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

const styles = {
    container:{
        display:'grid',
        gridTemplateColumns: '10% 80% 10%',
        
        backgroundColor:'#F7F7F2',
    },
    formHolder:{
        display:'flex',
        gridColumnStart: 2,
        gridColumnEnd: 2,
        gridRowStart: 2,
        width:'100%',
        justifyContent:'center',
        paddingBottom: 30
    },
    form:{
        width:'60%'
    },
    title:{
        gridColumnStart: 2,
        display:'flex',
        justifyContent:'center',
    },
    textarea:{
        width: '100%',
        borderRadius: 10
    },
    fieldset:{
        borderRadius: 10,
        backgroundColor:'white',
        width:'100%'
    },
    formInput:{
        borderBottomStyle: 'solid',
        borderLeftStyle: 'none',
        borderRightStyle:'none',
        borderTopStyle:'none'
    },
    formInputHolder:{
        display:'flex',
        justifyContent: 'space-around'
    },
    submit:{
        width:'100%',
        height: 30,
        backgroundColor:'#9BC4CB'
    }
}

export default Contact;