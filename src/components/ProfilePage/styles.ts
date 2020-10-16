import styled, { css } from 'styled-components'

import Button from '../Button'
import { LocationOn, Cake } from '../Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  //scrollbar firefox
  scrollbar-width: none;
  //scrollbar chrome
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Banner = styled.div`
  flex-shrink: 0; // Para não encolher

  width: 100%;
  height: min(33vw, 200px);
  background: var(--twitter);

  position: relative;
`
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
  }

  > a {
    text-decoration: none;
    color: var(--twitter);
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`

const iconsCSS = css`
  width: 20px;
  height: 20px;

  cursor: pointer;
  fill: var(--gray);
`
export const LocationIcon = styled(LocationOn)`
  ${iconsCSS}
`
export const CakeIcon = styled(Cake)`
  ${iconsCSS}
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    // o proximo span depois dele mesmo
    & + span {
      margin-left: 20px;
    }
  }
`

export const EditButtom = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 5px 15px;
  font-size: 15px;

  @media (min-width: 320px) {
    top: 30px;
    padding: 10px 20px;
  }
`
