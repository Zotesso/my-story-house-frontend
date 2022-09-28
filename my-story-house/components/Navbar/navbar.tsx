import { AppProps } from "next/app"
import PrimaryButton from "../Button/primary-button-style"
import NavbarWrapper from "./navbar-style"
import Image from 'next/image'
import styles from './navbar.module.css';

function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <PrimaryButton className="ml-auto" icon="">Explorar</PrimaryButton>
        <input className={styles.navbarSearch} type="text" placeholder="Procurar..." />
        <PrimaryButton icon="/assets/feather.svg">Upload</PrimaryButton>

        <section className={`${styles.userSection} mr-auto`}>
          <Image className={styles.userPicture} src="/assets/user.svg" width={32} height={32} alt="User Picture" />
          <h1 className={`${styles.userName} primary-text`}>Fulano</h1>
        </section>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
