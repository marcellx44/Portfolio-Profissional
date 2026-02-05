import "./about.styles.css"
export const About = () => {
    return (
        <div className="container-section-sobre">
            <div className="container-content-sobre">
                <div className="photo-sobre">
                    <img src="./images/image-profile.jpeg" alt="" />
                </div>
                <div className="section-content">
                    <p>Sobre mim</p>
                    <div className="social-media">
                        <ul className="social-media-list">
                            <li>GitHub</li>
                            <li>Linkedin</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    )
}