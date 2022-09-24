import { AppProps } from "next/app"
import PrimaryButton from "../Button/primary-button-style"
import NavbarWrapper from "./navbar-style"
import Image from 'next/image'

function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <PrimaryButton>Explorar</PrimaryButton>
        <input type="text" placeholder="Procurar..." />
        <PrimaryButton>Upload</PrimaryButton>

        <section className='user-section'>
          <Image className='user-picture' src="" alt="User Picture" />
          <h1 className='user-name'>Fulano</h1>
        </section>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
