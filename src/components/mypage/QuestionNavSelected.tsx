import styled from "styled-components"
import React from "react"
import { Flex } from "../shared/Flex"
import Link from "next/link"

const QuestionNavSelected = () => {
  return (
    <QuestionNavSelectedContainer>
      <QuestionNavSelectedHeader />
      <QuestionNavSelectedContent />
    </QuestionNavSelectedContainer>
  )
}

const QuestionNavSelectedContainer = styled.div`
  ${({ theme }) => theme.minMedia.mobile} {
    width: 1140px;
    margin: 0 auto;
    border: none;
  }
`

export default QuestionNavSelected

const QuestionNavSelectedHeader = () => {
  return (
    <QuestionNavSelectedHeaderContainer>
      <div>
        <Link href="/questions" passHref>
          <StyledLink>나의 질문</StyledLink>
        </Link>
        <Link href="/reply_questions" passHref>
          <StyledLink>나의 답변</StyledLink>
        </Link>
      </div>
      <Button>질문과답변 바로가기</Button>
    </QuestionNavSelectedHeaderContainer>
  )
}

const QuestionNavSelectedHeaderContainer = styled(Flex).attrs({
  space: "between",
  alignment: "center",
})`
  margin: 40px 15px;
  padding: 0px 0px 10px;
  border-bottom: 1px solid rgb(237, 237, 237);
`

const StyledLink = styled.a`
  display: inline-block;
  padding: 5px;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
  &:nth-child(1) {
    color: rgb(53, 197, 240);
  }
`

const Button = styled.button`
  padding: 9px 10px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  background-color: #35c5f0;
  color: #fff;
`
const QuestionNavSelectedContent = () => {
  return (
    <QuestionNavSelectedContentContainer>
      <div>
        <h1>
          인테리어에 대해
          <br /> 궁금한 점이 있으신가요?
        </h1>
        <p>
          오늘의 집 질문과 답변에서 인테리어
          <br /> 고수들과 전문가들에게 조언을 받으세요.
        </p>
      </div>
    </QuestionNavSelectedContentContainer>
  )
}

const QuestionNavSelectedContentContainer = styled.div`
  padding: 70px 0px 70px;
  text-align: center;
  h1 {
    margin: 0px 0px 5px;
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    color: rgb(41, 41, 41);
  }
  p {
    margin: 0px 0px 2px;
    font-size: 15px;
    line-height: 25px;
    color: rgb(117, 117, 117);
  }
`
