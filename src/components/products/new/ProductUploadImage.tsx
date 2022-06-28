import React, { Dispatch, SetStateAction, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { UploadImageType } from "src/pages/products/new/index"

type ProductUploadImage = {
  addUploadImageList: (image: UploadImageType) => void
  uploadImageList: UploadImageType[]
  onClickUploadImageDeleteBtn: (id: number) => void
}

type UploadImageListType = {
  image: UploadImageType
  onClickUploadImageDeleteBtn: (id: number) => void
  index: number
  setCurrentImageLength: Dispatch<SetStateAction<number>>
}

export default function ProductUploadImage({
  addUploadImageList,
  uploadImageList,
  onClickUploadImageDeleteBtn,
}: ProductUploadImage) {
  const [currentImageLength, setCurrentImageLength] = useState(0)

  const handleFiles = (file: File, index: number) => {
    const reader = new FileReader()
    const fileInfo = {
      id: index,
      imageName: file.name,
      imageAddress: "",
    }
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      fileInfo.imageAddress = reader.result as string
      addUploadImageList(fileInfo)
    }
  }

  const onChangeImageUploadInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget
    const clickedImageLegnth = files!.length
    if (files && clickedImageLegnth + currentImageLength <= 6) {
      const filesArray = Array.from(files)
      filesArray.forEach((file, index) => {
        handleFiles(file, currentImageLength + index)
      })
      setCurrentImageLength(currentImageLength + clickedImageLegnth)
    } else {
      alert("이미지는 최대 6개까지 가능합니다.")
    }
  }

  return (
    <StyledUploadImageWrapper>
      <StyledImageLengthContainer>
        <p>키보드 이미지({currentImageLength}/6)</p>
      </StyledImageLengthContainer>
      <StyledImageListContainer>
        <StyledImageListWrapper>
          <StyledImageListUploadInput>
            <label htmlFor="photo">
              <Image src="/statics/products/photoIcon.svg" width="30" height="30" />
              <p className="uploadImageTitle">사진 등록하기</p>
              <p className="uploadImageMaxText">(권장사이즈는 640 x 640 입니다.)</p>
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              multiple
              onChange={onChangeImageUploadInput}
            />
          </StyledImageListUploadInput>
          {uploadImageList.length
            ? uploadImageList.map((image, index) => (
                <UploadImageList
                  key={image.id}
                  image={image}
                  index={index}
                  onClickUploadImageDeleteBtn={onClickUploadImageDeleteBtn}
                  setCurrentImageLength={setCurrentImageLength}
                />
              ))
            : ""}
        </StyledImageListWrapper>
        <StyledImageDetailWrapper>
          <p>- 상품 이미지는 640 x 640에 최적화 되어 있습니다.</p>
          <p>- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.</p>
          <p>- 최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</p>
        </StyledImageDetailWrapper>
      </StyledImageListContainer>
    </StyledUploadImageWrapper>
  )
}

function UploadImageList({
  image,
  onClickUploadImageDeleteBtn,
  index,
  setCurrentImageLength,
}: UploadImageListType) {
  const { imageAddress, imageName, id } = image
  const clickUploadImageDeleteBtn = () => {
    onClickUploadImageDeleteBtn(id)
    setCurrentImageLength((prev) => prev - 1)
  }
  return (
    <StyledImageList>
      <Image src={imageAddress} layout="fill" objectFit="fill" alt={imageName} />
      <button onClick={clickUploadImageDeleteBtn}>X</button>
      {index === 0 && <span>대표이미지</span>}
    </StyledImageList>
  )
}

const StyledImageLengthContainer = styled.div`
  flex: 0 0 15%;
`

const StyledImageListContainer = styled.div`
  flex-grow: 1;
`
const StyledImageDetailWrapper = styled.div`
  padding: 0.4rem;
  font-size: 0.8rem;
  color: rgb(74, 164, 255);
`

const StyledImageListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const StyledImageList = styled.li`
  width: 20%;
  position: relative;
  height: 172px;
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 33%;
  }
  img {
    padding: 0.5rem !important;
  }
  button {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    right: 12px;
    top: 12px;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1px;
    width: 20px;
    height: 20px;
    border-radius: 3px;
  }
  span {
    position: absolute;
    left: 14px;
    top: 14px;
    font-size: 0.6rem;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    padding: 0.2rem;
    border-radius: 9px;
  }
`

const StyledImageListUploadInput = styled.li`
  width: 20%;
  padding: 0.5rem;
  height: 172px;
  color: rgb(155, 153, 169);
  text-align: center;
  font-size: 0.8rem;
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 33%;
  }
  label {
    background: rgb(250, 250, 253);
    border: 1px solid rgb(230, 229, 239);
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding: 0.3rem;
    width: 100%;
    height: 100%;
  }
  .uploadImageTitle {
    font-weight: 500;
  }
  .uploadImageMaxText {
    font-size: 0.6rem;
  }
  input {
    display: none;
  }
  img {
    filter: invert(96%) sepia(3%) saturate(642%) hue-rotate(206deg) brightness(92%) contrast(93%);
  }
`

const StyledUploadImageWrapper = styled.article`
  display: flex;
  padding: 1rem 0;
`
