import styled from 'styled-components'
import { cores } from '../../global.styles'

type ContacntProps = {
  active: boolean
}

export const Contacnt = styled.div`
  position: fixed;
  bottom: 55px;
  right: 50px;
  display: flex;
  width: 50px;
  height: 50px;
  border: 1px solid #fcfcfc;
  background-color: ${cores.darkFundo};
  border-radius: 25%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
  transition: all 0.8s ease-in-out;
  svg {
    font-size: 30px;
  }
  @media (max-width: 1025px) {
    bottom: 35px;
    right: 10px;
    width: 40px;
    height: 40px;
    svg {
      font-size: 25px;
    }
  }

  &.active {
    height: 500px;
    width: 350px;
    border-radius: 15px;
    cursor: default;

    > svg {
      display: none;
    }
  }
`
export const ContacntContainer = styled.div<ContacntProps>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
`
export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;

  svg {
    color: ${cores.ligthFundo};
    font-size: 30px;
    cursor: pointer;
  }
`
export const ContacntLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 25px;

  a {
    text-decoration: none;
    color: ${cores.ligthFundo};
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${cores.darkFundo};
    padding: 10px;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    svg {
      width: 30px;
    }
  }
`
