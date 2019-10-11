import styles from './about.css'
import Button from '../../components/Button'
import React from 'react'

class About extends React.Component {
    static async getInitialProps(ctx) {
        console.log()

        return {}
    }

    render() {
        return(
            <div>
                <h2 className={styles.text}>Welcome to About Page</h2>
                <a href="/">To Home</a>
                <Button />
            </div>
        )
    }
}

export const config = { amp: true }

export default About
