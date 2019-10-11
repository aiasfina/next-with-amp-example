import styles from './index.css'

function Home() {
    return(
        <div>
            <h2 className="text">Welcome to Next.js!</h2>
            <a href="/about">To About</a>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Home
