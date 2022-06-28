import React from "react"
import styled from "styled-components"

type ProductDetailInfoType = {
  detail: string
}

export default function ProductDetailInfo({ detail }: ProductDetailInfoType) {
  return (
    <StyledDetailInfoContainer>
      <div className="detailProductInfoContainer">
        <div className="detailProductInfoWrapper">
          <StyledDetailSubInfoWrapper>
            <span className="detailProductDetailTitle">상세정보</span>
          </StyledDetailSubInfoWrapper>
          <p className="detailProductInfo">
            {detail}
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
          </p>
        </div>
      </div>
    </StyledDetailInfoContainer>
  )
}

const StyledDetailSubInfoWrapper = styled.div`
  padding: 0.5rem 0;
  span {
    font-size: 0.8rem;
    color: rgb(150, 142, 177);
  }
  .detailProductDetailTitle {
    font-size: 1rem;
    color: black;
    margin-right: 1rem;
  }
`

const StyledDetailInfoContainer = styled.section`
  .detailProductInfoContainer {
    flex: 0 0 70%;
    padding-right: 1.5rem;
  }
  .detailProductInfoWrapper {
    padding-bottom: 1.5rem;
  }
`
