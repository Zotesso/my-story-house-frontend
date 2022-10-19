import { AppProps } from "next/app"
import PrimaryButton from "../Button/primary-button-style"
import NavbarWrapper from "./navbar-style"
import Image from 'next/image'
import styles from './navbar.module.css';
import BookService from "../../lib/services/Book.service";

function Navbar() {
  const handleLikeBook = () => {
    const bookService = new BookService();
    const result = bookService.likeBook(4);
    console.log('resultado', result);
  }

  return (
    <>
      <NavbarWrapper>
        <PrimaryButton onClick={handleLikeBook} className="ml-auto" icon="">Explorar</PrimaryButton>
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
