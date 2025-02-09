import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  padding: 2rem;
`
export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
`
export const Button = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #0077ff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0066cc;
    }
  }
  a {
    color: #0077ff;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #0066cc;
    }
  }
`
export const QrCodeContainer = styled.img`
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }
`
export const Footter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 5px;
  padding: 2rem;
  text-align: center;
`
