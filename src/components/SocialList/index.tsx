import styles from "./SocialList.module.scss";

const SocialList = () => {

    return (
        <ul className={styles.socialIcons}>
            <li>
                <a href="https://www.facebook.com/inpEV" target="_blank" rel="noreferrer" >
                    <img src="./img/social/face.svg" alt='facebook' />
                </a>
            </li>

            <li>
                <a href="https://instagram.com/inpev" target="_blank" rel="noreferrer" >
                    <img src="./img/social/insta.svg" alt='instagram' />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/inpEV" target="_blank" rel="noreferrer" >
                    <img src="./img/social/linkedin.svg" alt='Linkedin' />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/inpEV" target="_blank" rel="noreferrer" >
                    <img src="./img/social/youtube.svg" alt='Youtube' />
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@inpev" target="_blank" rel="noreferrer" >
                    <img src="./img/social/tiktok.svg" alt='Tiktop' />
                </a>
            </li>
        </ul>
    )
}

export default SocialList;