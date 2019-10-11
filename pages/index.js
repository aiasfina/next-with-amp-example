import styles from './index.css'

function Home() {
    return(
        <div>
            <h2 className={styles.text}>Welcome to Next.js!</h2>
            <a href="/about">To About</a>
        </div>
    )
}

export default Home
