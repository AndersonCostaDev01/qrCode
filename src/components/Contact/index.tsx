// importação de bibliotecas externas
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

// importação de arquivos locais
import * as S from './styles'
import { useState } from 'react'

const Contacnt = () => {
  const [active, setActive] = useState(false)
  return (
    <S.Contacnt className={active ? 'active' : ''}>
      <FaWhatsapp onClick={() => setActive(true)} />
      <S.ContacntContainer active={active}>
        <S.CloseButton>
          <MdClose onClick={() => setActive(false)} />
        </S.CloseButton>
        <h3>Formas de me contatar 👇</h3>
        <S.ContacntLinks>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5583991651441"
          >
            <FaWhatsapp /> Entre em contato pelo WhatsApp
          </a>
          <a target="_blank" href="https://discord.com/users/anderson_costa01">
            <FaDiscord /> Entre em contato pelo Discord
          </a>
          <a target="_blank" href="https://www.instagram.com/ander_tk/">
            <FaInstagram /> Veja meu Instagram e me conheça melhor
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anderson-costa-870b48233/"
          >
            <FaLinkedinIn /> Veja meu LinkedIn para saber mais sobre meus
            trabalhos
          </a>
          <a target="_blank" href="https://github.com/AndersonCostaDev01">
            <FaGithub /> Veja todos os meus trabalhos no meu GitHub
          </a>
        </S.ContacntLinks>
      </S.ContacntContainer>
    </S.Contacnt>
  )
}

export default Contacnt
