import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Card = styled.article`
  ${fadeIn({ time: '.5s' })}
  background-color: #fff;
  border: .5px solid #bbbbbb;
  margin-bottom: 1em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  max-width: 500px;
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Title = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  background-color: rgba(0, 0, 0, .75);
  color: #fff;
  font-size: 1.3em;
  font-weight: 400;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding-left: 5px;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  padding: 8px;
  cursor: pointer;
  & svg {
    color: #262626;
  }
`
export const WrapperDescription = styled.div`
  padding: 8px;
  color: #262626;
`
export const DescriptionItem = styled.div`
  margin-bottom: .7em;
  & span {
    font-weight: 600;
  }
`
