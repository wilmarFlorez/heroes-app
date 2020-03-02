import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {
  ImgWrapper,
  Img, Button,
  Title,
  WrapperDescription,
  DescriptionItem,
  Card
} from './styles'

const SIZE_ICON = '30px'

export const HeroCard = ({ id, picture, name, info, publisher }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const FavoriteIcon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Card>
      <Link to={`/heroe/${id}`}>
        <ImgWrapper>
          <Img src={picture} alt='Hero image' />
          <Title>{name}</Title>
        </ImgWrapper>
      </Link>
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
