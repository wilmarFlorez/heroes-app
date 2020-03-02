import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import {
  ImgWrapper,
  Img, Button,
  Title,
  WrapperDescription,
  DescriptionItem,
  Card
} from './styles'

const DEFAULT_IMAGE = 'https://www.superherodb.com/pictures2/portraits/10/100/10451.jpg'
const NAME = 'Purple Man'
const INFO = 'Formerly Purple Children (leader and father), Villains for Hire, Hoods gang, partner of Electro, his own band of criminals'
const PUBLISHER = 'Marvel Comics'
const SIZE_ICON = '30px'

export const HeroCard = ({ id, likes = 0, picture = DEFAULT_IMAGE, name = NAME, info = INFO, publisher = PUBLISHER }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const FavoriteIcon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Card>
      <a href={`/hero/${id}`}>
        <ImgWrapper>
          <Img src={picture} alt='Hero image' />
          <Title>{name}</Title>
        </ImgWrapper>
      </a>
      <Button onClick={() => setLiked(!liked)}>
        <FavoriteIcon size={SIZE_ICON} />
      </Button>
      <WrapperDescription>
        <DescriptionItem><span>Description: </span>{info}</DescriptionItem>
        <DescriptionItem><span>Publisher:</span> {publisher}</DescriptionItem>
      </WrapperDescription>
    </Card>
  )
}
