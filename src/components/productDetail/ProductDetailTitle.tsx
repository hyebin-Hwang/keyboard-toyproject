import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import handleTimeDiffernce from "src/utils/handleTimeDiffernce"
import styled from "styled-components"
import { Flex } from "../shared/Flex"
import ProductDetailOption from "./ProductDetailOption"
import Thumbnails from "./Thumbnails"

type ProductDetailTitleType = {
  title: string
  cost: number
  likedAt: number
  createdAt: string
  quantity: number
  productStatus: string
  image: { id: number; imageAddress: string; imageName: string }[]
  viewCount: number
  chatCount: number
}

export default function ProductDetailTitle({
  title,
  cost,
  likedAt,
  createdAt,
  quantity,
  productStatus,
  image,
  viewCount,
  chatCount,
}: ProductDetailTitleType) {
  const [isActivedLikeBtn, setIsActivedLikeBtn] = useState(false)

  const router = useRouter()

  const changedCreatedAt = handleTimeDiffernce(createdAt)
  const calculatedLikedAt = isActivedLikeBtn ? likedAt + 1 : likedAt

  const onClickLikeBtn = () => {
    setIsActivedLikeBtn(!isActivedLikeBtn)
  }

  const handleLikeCount = () => {
    console.log("Like Count  + 1")
  }

  const handleMinusLikeCount = () => {
    console.log("Like Count - 1")
  }

  const onClickChatBtn = () => {
    router.push({
      pathname: "/chat",
      query: {
        userId: "123123123",
        pid: "0",
        image: image[0].imageAddress,
        pname: title,
        cost,
        userNickname: "혜빈짱123",
      },
    })
  }

  useEffect(() => {
    return () => {
      if (isActivedLikeBtn) {
        handleLikeCount()
      }
      if (!isActivedLikeBtn) {
        handleMinusLikeCount()
      }
    }
  }, [])

  return (
    <StyledDetailTitleContainer>
      <Thumbnails image={image} />
      <div className="detailTitleTextWrapper">
        <h2>{title}</h2>
        <p className="detailTitleCost">{cost.toLocaleString()}원</p>
        <Flex space="between" className="detailTitleReportWrapper">
          <div>
            <span>💖{calculatedLikedAt} |</span>
            <span> 🕛{changedCreatedAt} |</span>
            <span> 수량: {quantity} |</span>
            <span> 조회: {viewCount} |</span>
            <span> 채팅: {chatCount}</span>
          </div>
          <ProductDetailOption />
        </Flex>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-상품상태:</span>
          <span>{productStatus}</span>
        </div>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-배송비:</span>
          <span>배송비포함</span>
        </div>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-교환여부:</span>
          <span>교환불가능</span>
        </div>
        <div className="detailChatBtnWrapper">
          <StyledLikeBtn onClick={onClickLikeBtn} active={isActivedLikeBtn}>
            관심{calculatedLikedAt}
          </StyledLikeBtn>
          <button className="detailChatBtn" onClick={onClickChatBtn}>
            연락하기
          </button>
        </div>
      </div>
    </StyledDetailTitleContainer>
  )
}
const StyledLikeBtn = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? "rgb(51,51,51)" : "rgb(204, 204, 204)")};
`

const StyledDetailTitleContainer = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  column-gap: 30px;
  ${({ theme }) => theme.maxMedia.mobile} {
    display: block;
  }
  .detailOptionWrapper {
    position: relative;
  }
  .detailTitleTextWrapper {
    position: relative;
    height: 100%;
    width: 100%;
    ${({ theme }) => theme.maxMedia.mobile} {
      padding: 10px 0;
    }
    h2 {
      font-size: 1.5rem;
    }
    .detailTitleCost {
      padding: 0.5rem 0;
      font-size: 1.3rem;
      border-bottom: 1px solid rgb(224, 224, 224);
    }
  }
  .detailTitleReportWrapper {
    padding: 0.5rem 0;
    padding-top: 0.5rem;
    padding-bottom: 2.2rem;
    font-size: 0.9rem;
    position: relative;
    .detailTitleReportBtn {
      font-size: 0.9rem;
      position: absolute;
      right: 0;
    }
    .detailOptionBtn {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 10px;
    }
  }
  .detailTitleTextSubWrapper {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
    .detailTitleTextCategory {
      color: rgb(140, 140, 140);
      display: inline-block;
      width: 70px;
    }
  }
  .detailChatBtnWrapper {
    ${({ theme }) => theme.maxMedia.mobile} {
      position: relative;
      padding-top: 20px;
    }
    position: absolute;
    bottom: 0;
    button {
      font-size: 14px;
      border-radius: 4px;
      font-weight: 400;
      width: 130px;
      height: 45px;
      text-align: center;
      color: #ffffff;
      font-weight: bold;
      margin-right: 20px;
    }
    .detailChatBtn {
      background: rgb(53, 202, 244);
    }
  }
`
