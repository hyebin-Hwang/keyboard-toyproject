import React, { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { onClickReportExitBtn } from "src/redux/reducer/modalReducer"
import styled from "styled-components"

type ReportCategoryListType = {
  category: string
}

export default function Report() {
  return (
    <StyledReportContainer>
      <h3>신고하기</h3>
      <ul>
        <ReportCategoryList category="상품 정보 부정확(상품명, 이미지, 가격 등)" />
        <ReportCategoryList category="허위 매물" />
        <ReportCategoryList category="사기 의심" />
        <ReportCategoryList category="기타(사유)" />
      </ul>
    </StyledReportContainer>
  )
}

function ReportCategoryList({ category }: ReportCategoryListType) {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const onSubmitReportCategory = (event: FormEvent) => {
    event.preventDefault()
    dispatch(onClickReportExitBtn())
    alert("성공적으로 신고가 접수되었습니다.!")
    // 서버로 텍스트 내용 요청보내기!
  }

  const onClickCategoryBtn = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledReportCategoryList isOpen={isOpen}>
      <StyledReportCategoryModalBtn isLast={category === "기타(사유)"} onClick={onClickCategoryBtn}>
        {category} <span>🔽</span>
      </StyledReportCategoryModalBtn>
      <StyledReportCategoryListWrapper isOpen={isOpen} onSubmit={onSubmitReportCategory}>
        <textarea
          rows={4}
          placeholder="신고 내용을 직접 작성해주세요.&#13;&#10;자세하게 적어주시면 신고처리에 큰 도움이 됩니다."
        />
        <button>등록</button>
      </StyledReportCategoryListWrapper>
    </StyledReportCategoryList>
  )
}

const StyledReportContainer = styled.div`
  ul {
    padding: 3rem 0;
    color: rgb(116, 109, 102);
  }
`

const StyledReportCategoryModalBtn = styled.button<{ isLast: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.7rem 0;
  border-top: 1px solid rgb(238, 238, 238);
  font-size: 1rem;
  border-bottom: ${({ isLast }) => isLast && "1px solid rgb(238, 238, 238)"};
  span {
    margin-left: 4px;
  }
`

const StyledReportCategoryList = styled.li<{ isOpen: boolean }>`
  overflow: hidden;
  background: ${({ isOpen }) => (isOpen ? "rgb(249, 249, 249)" : "inherit")};
  transition: 0.3s background;
  textarea {
    padding: 0.3rem;
    width: 100%;
    outline: none;
    resize: none;
  }
`

const StyledReportCategoryListWrapper = styled.form<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? "140px" : "0")};
  transition: 0.3s height;
  padding: 0 1.5rem;
  position: relative;
  overflow: hidden;
  button {
    background: #ffffff;
    padding: 0.2rem 0.7rem;
    font-size: 0.7rem;
    display: flex;
    flex-direction: row-reverse;
    float: right;
  }
`
