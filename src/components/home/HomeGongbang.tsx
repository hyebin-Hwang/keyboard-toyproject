import React from "react"
import styled from "styled-components"
import Link from "next/link"
import HomeGongbangGrid from "./HomeGongbangGrid"
import { Flex } from "../shared/Flex"

export default function HomeGongbang() {
  return (
    <HomeGongbangContainer>
      <HomeGongbangHeader>
        <h2>공방 강의 리스트</h2>
        <Link href="/craftmap">
          <a>전체보기</a>
        </Link>
      </HomeGongbangHeader>
      <HomeGongbangGrid />
    </HomeGongbangContainer>
  )
}

const HomeGongbangContainer = styled.section`
  padding-bottom: 4rem;
`

const HomeGongbangHeader = styled(Flex).attrs({
  space: "between",
  axis: "horizontal",
  alignment: "center",
})`
  a {
    color: #919191;
    text-decoration: underline;
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.7rem;
  }
`
