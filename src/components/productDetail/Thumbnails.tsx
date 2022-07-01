import React, { useState } from "react"
import styled from "styled-components"
import Image from "next/image"
import userDefaultImage from "public/statics/user/user_default.webp"

type ThumbnailsType = {
  image: { id: number; imageAddress: string; imageName: string }[]
}

type ThumbnailListType = {
  imageAddress: string
  imageName: string
  id: number
  hoveredImg: number
  onMouseEnterThumbnailList: (id: number) => void
}

export default function Thumbnails({ image }: ThumbnailsType) {
  const [hoveredImg, setHoveredImg] = useState(0)

  const onMouseEnterThumbnailList = (id: number) => {
    setHoveredImg(id)
  }
  return (
    <StyledThumbnailContainer>
      <ThumbnailImgListWrapper>
        {image.map((item) => (
          <ThumbnailImgList
            id={item.id}
            imageAddress={item.imageAddress}
            imageName={item.imageName}
            key={item.id}
            onMouseEnterThumbnailList={onMouseEnterThumbnailList}
            hoveredImg={hoveredImg}
          />
        ))}
      </ThumbnailImgListWrapper>
      <div>
        <Image
          src={image[hoveredImg].imageAddress}
          alt={image[hoveredImg].imageName}
          layout="fill"
        />
      </div>
    </StyledThumbnailContainer>
  )
}

function ThumbnailImgList({
  id,
  imageAddress,
  imageName,
  onMouseEnterThumbnailList,
  hoveredImg,
}: ThumbnailListType) {
  const mouseEnterThumbnailList = () => {
    onMouseEnterThumbnailList(id)
  }
  return (
    <StyledThumbnailImgList onMouseEnter={mouseEnterThumbnailList} active={id === hoveredImg}>
      <Image src={imageAddress} alt={imageName} layout="fill" />
    </StyledThumbnailImgList>
  )
}

const ThumbnailImgListWrapper = styled.ul`
  padding-right: 0.3rem;
  ${({ theme }) => theme.maxMedia.tablet} {
    display: flex;
    margin-top: 5px;
  }
`

const StyledThumbnailImgList = styled.li<{ active: boolean }>`
  width: 56px;
  height: 56px;
  margin-bottom: 3px;
  position: relative;
  border-radius: 5px;
  border: ${({ active }) => active && "2px solid rgb(53, 197, 240) !important"};
  &:hover {
    border: 2px solid rgb(53, 197, 240) !important;
  }
  img {
    border-radius: 5px;
    margin-left: -0.5px !important;
    margin-top: -0.5px !important;
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    margin-right: 5px;
  }
`

const StyledThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.maxMedia.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
  div {
    position: relative;
    width: 100%;
    height: 354px;
    margin-left: 0.5rem;
    ${({ theme }) => theme.maxMedia.tablet} {
      margin: 0;
    }
    img {
      border-radius: 10px;
    }
  }
`
