import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { Flex } from "../shared/Flex"
import HomeProductGrid from "./HomeProductGrid"

export default function HomeProduct() {
  return (
    <HomeProductContainer>
      <HomeProductHeader>
        <h2>최신 상품</h2>
        <Link href="/products">
          <a>전체보기</a>
        </Link>
      </HomeProductHeader>
      <HomeProductGrid />
    </HomeProductContainer>
  )
}

const HomeProductContainer = styled.section`
  padding: 2rem 0;
`

const HomeProductHeader = styled(Flex).attrs({
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
