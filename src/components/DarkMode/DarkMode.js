import React, { useState } from 'react'

const DarkMode = () => {

    const [ dark, setDark ] = useState(false)

    const toggleDark = () => {
        setDark(!dark)
    }


    return (
        <button className="btn btn-primary" style={styles.darkMode} onClick={toggleDark}>
        {
            !dark ?  <i class="far fa-moon" style={styles.moon}></i> 
                  :  <i class="far fa-sun" style={styles.sun}></i>
        }
            
        </button>
    )
}

const styles = {
    darkMode: {
        right: 50,
        position: "absolute",
        width: 45,
        borderRadius: 30 
    },
    moon: {
        fontSize: 30,
        right: 1,
        position: "relative",
    },
    sun: {
        fontSize: 30,
        right: 1,
        position: "relative",
    }
}
export default DarkMode
