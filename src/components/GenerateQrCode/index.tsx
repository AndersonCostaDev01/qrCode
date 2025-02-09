/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import QRCodeLink from 'qrcode'
import * as S from './styles'
import qrbase from '../../assets/qrcode (1).png'

const GenerateQrCode = () => {
  const [link, setLink] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  // Gera a URL da imagem do QR Code para download
  const handleGenerate = async (link_url: string) => {
    if (!link_url) return
    try {
      const url = await QRCodeLink.toDataURL(link_url, {
        width: 600,
        margin: 3,
      })
      setQrCodeUrl(url) // Salva a URL gerada no estado
    } catch (err) {
      console.error('Erro ao gerar QR Code:', err)
    }
  }

  // Atualiza o estado do link e gera o QR Code
  const handleQrCode = (e: any) => {
    const newLink = e.target.value
    setLink(newLink)
    handleGenerate(newLink)
  }

  // Função para baixar a imagem
  const handleDownload = () => {
    if (!qrCodeUrl) return
    const link = document.createElement('a')
    link.href = qrCodeUrl
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <S.Container>
      <header>
        <h2>Gerador de QR Code</h2>
      </header>
      <S.Input
        type="text"
        placeholder="Digite o link"
        value={link}
        onChange={handleQrCode}
      />
      <S.Button>
        <button onClick={handleDownload} disabled={!qrCodeUrl}>
          Baixar imagem
        </button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Endereço do QR Code
        </a>
      </S.Button>
      {qrCodeUrl ? (
        <S.QrCodeContainer src={qrCodeUrl} alt="QR Code gerado" />
      ) : (
        <>
          <S.QrCodeContainer src={qrbase} alt="protifolio do criador" />
        </>
      )}
      <S.Footter>
        <p>Todos os direitos reservados &copy; 2025</p>{' '}
        <strong>Anderson Costa dev</strong>
      </S.Footter>
    </S.Container>
  )
}

export default GenerateQrCode
