import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "src/hooks/useSelector"
import { onClickReportExitBtn, onClickReportModalOpenBtn } from "src/redux/reducer/modalReducer"
import Modal from "../common/Modal"
import Portal from "../common/Portal"
import Report from "../common/Report"
import styled from "styled-components"
import { useRouter } from "next/router"

export default function ProductDetailOption() {
  const [isOpenDetailOption, setIsOpenDetailOption] = useState(false)
  const [isProductOwner, setIsProductOwner] = useState(false)
  const onClickDetailOptionBtn = () => {
    setIsOpenDetailOption(!isOpenDetailOption)
  }

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      // 서버에 요청보내기
      const currentUserId = localStorage.getItem("userId")
      if (currentUserId === "123") {
        setIsProductOwner(true)
      }
    }
  }, [])

  return (
    <div className="detailOptionWrapper">
      <button className="detailOptionBtn" onClick={onClickDetailOptionBtn}>
        ...
      </button>
      {isOpenDetailOption && (
        <Portal>
          <Modal onClickExitBtn={onClickDetailOptionBtn}>
            <h3>옵션 보기</h3>
            <StyledDetailOptionWrapper>
              {isProductOwner ? <ProductOwnerOption /> : <ProductNotOwnerOption />}
            </StyledDetailOptionWrapper>
          </Modal>
        </Portal>
      )}
    </div>
  )
}

function ProductOwnerOption() {
  const router = useRouter()
  const { productId } = router.query

  const onClickProductUpdateBtn = () => {
    // 글쓰는 화면으로 넘겨주기
    router.push({ pathname: "/products/new", query: { productId } })
  }

  const onClickProductDeleteBtn = () => {
    if (confirm("게시글을 삭제하시겠습니까?")) {
      alert(`${productId}번글이 삭제되었습니다.`)
      router.push("/products")
    } else {
      alert("취소!")
    }
  }

  return (
    <>
      <li>
        <button onClick={onClickProductUpdateBtn}>게시글 수정</button>
      </li>
      <li>
        <button onClick={onClickProductDeleteBtn}>삭제</button>
      </li>
    </>
  )
}

function ProductNotOwnerOption() {
  const isOpenReport = useSelector(({ modal }) => modal.isOpenReport)
  const dispatch = useDispatch()

  const clickReportOpenBtn = () => {
    dispatch(onClickReportModalOpenBtn())
  }
  const clickReportExitBtn = () => {
    dispatch(onClickReportExitBtn())
  }

  return (
    <>
      <li>
        <button className="detailTitleReportBtn" onClick={clickReportOpenBtn}>
          신고하기
        </button>
      </li>
      {isOpenReport && (
        <Portal>
          <Modal onClickExitBtn={clickReportExitBtn}>
            <Report />
          </Modal>
        </Portal>
      )}
    </>
  )
}

const StyledDetailOptionWrapper = styled.ul`
  li {
    width: 100%;
    padding: 0.7rem 0;
    transition: 0.3s color;
    &: hover {
      color: rgb(53, 202, 244);
    }
    button {
      width: 100%;
    }
  }
`
