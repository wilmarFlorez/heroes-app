import React from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import {
  ImgWrapper,
  Img, Button,
  Title,
  WrapperDescription,
  DescriptionItem
} from './styles'

const DEFAULT_IMAGE = 'https://www.superherodb.com/pictures2/portraits/10/100/10451.jpg'
const NAME = 'Purple Man'
const INFO = 'Formerly Purple Children (leader and father), Villains for Hire, Hoods gang, partner of Electro, his own band of criminals'
const PUBLISHER = 'Marvel Comics'
const SIZE_ICON = '25px'

export const HeroCard = ({ id, likes = 0, picture = DEFAULT_IMAGE, name = NAME, info = INFO, publisher = PUBLISHER }) => {
  return (
    <article>
      <a href={`/hero/${id}`}>
        <ImgWrapper>
          <Img src={picture} alt='Hero image' />
          <Title>{name}</Title>
        </ImgWrapper>
        <Button>
          <FaRegThumbsUp size={SIZE_ICON} />
        </Button>
        <Button>
          <FaRegThumbsDown size={SIZE_ICON} />
        </Button>
        <WrapperDescription>
          <DescriptionItem>{likes} Me gusta</DescriptionItem>
          <DescriptionItem><span>Description: </span>{info}</DescriptionItem>
          <DescriptionItem><span>Publisher:</span> {publisher}</DescriptionItem>
        </WrapperDescription>
      </a>
    </article>
  )
}
