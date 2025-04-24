import { Link } from "react-router-dom"
function HomePage() {
    return (
        <section className="hero-section">
            <article className="hero-article">
                <img src="/mlbLogo.png" alt="" className="hero-logo" />
                <h1>Welcome to <br />Fantasy Baseball Zone</h1>
                <p>Your home to everything baseball related</p>
                <Link className="cta-btn">Get Started</Link>
            </article>
        </section>
    )
}

export default HomePage