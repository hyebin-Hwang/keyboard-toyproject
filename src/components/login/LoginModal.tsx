import styled, { createGlobalStyle } from "styled-components"
import React, { useEffect } from "react"
import Image from "next/image"
import LogoIcon from "../../../public/statics/header/VB.svg"
import KakaoLogo from "../../../public/statics/login/kakao-logo.png"
import GithubLogo from "../../../public/statics/login/github-logo.png"
import CancelBtn from "../../../public/statics/login/cancel-btn.png"
import { useDispatch } from "react-redux"
import { useSelector } from "src/hooks/useSelector"
import { onClickLoginModalExitBtn } from "src/redux/reducer/modalReducer"
import SocialLoginBtn from "../common/SocialLoginBtn"
import envs from "src/config/dotenv"

interface GlobalStyleProps {
  modal: boolean
}

export default function LoginModal() {
  const dispatch = useDispatch()
  const modal = useSelector(({ modal }) => modal.isOpenLogin)

  const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    body {
      overflow: ${(props) => props.modal && "hidden"}
    }
  `

  const onClickcloseModal = () => {
    dispatch(onClickLoginModalExitBtn())
  }

  React.useEffect(() => {
    const naver = window.naver

    const login = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 1,
          height: "60",
        },
      })

      naverLogin.init()
    }

    login()
  }, [])

  return (
    <>
      <GlobalStyle modal={modal} />
      <LoginModalContainer>
        <div className="modal-background" onClick={onClickcloseModal}></div>
        <div className="modal-white-box">
          <div className="modal-cancel-btn" onClick={onClickcloseModal}>
            <Image src={CancelBtn} />
          </div>
          <div className="social-login-container">
            <div className="logo">
              <LogoIcon />
            </div>
            <div className="text-content">
              <h1>Value Board로 중고거래 시작하기</h1>
              <p>간편하게 가입하고 상품을 확인하세요</p>
            </div>
            <div className="social-login-btn">
              <div className="social-login-btn-container">
                {/* <button className="kakao">
                  <a
                    className="kakao-logo"
                    href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
                  >
                    <Image src={KakaoLogo} />
                  </a>
                  <span>카카오로 이용하기</span>
                </button> */}
                <SocialLoginBtn
                  href={`https://kauth.kakao.com/oauth/authorize?client_id=${envs.kakaoClientId}&redirect_uri=${envs.kakaoRedirecUri}&response_type=code`}
                  social="카카오"
                  img={KakaoLogo}
                />
                <button className="naver">
                  <a className="naver-logo">
                    <div id="naverIdLogin" />
                  </a>
                  <span>네이버로 이용하기</span>
                </button>
                <button className="github">
                  <a
                    className="github-logo"
                    href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`}
                  >
                    <Image src={GithubLogo} />
                  </a>
                  <span>깃허브로 이용하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="customer-service">
            <p>
              도움이 필요하면<span>이메일</span> 또는 고객센터1670-2910로 문의 부탁드립니다.고객센터
              운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </p>
          </div>
        </div>
      </LoginModalContainer>
    </>
  )
}

const LoginModalContainer = styled.div`
  .modal-background {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  .modal-white-box {
    position: fixed;
    top: 15%;
    left: 35%;
    z-index: 200;
    padding: 40px 20px 20px 20px;
    background-color: rgb(247, 247, 247);
    width: 420px;
    border-radius: 8px;

    .modal-cancel-btn {
      cursor: pointer;
      display: flex;
      justify-content: right;
      img {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .social-login-container {
      .logo {
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
      }
      .text-content {
        h1 {
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 15px;
          text-align: center;
          font-weight: bold;
        }
        p {
          line-height: 1.5;
          margin-bottom: 35px;
          text-align: center;
          font-size: 14px;
        }
      }
      .social-login-btn {
        padding: 0 50px;

        &-container {
          .kakao,
          .naver,
          .github {
            padding: 0;
            width: 100%;
            height: 38px;
            box-shadow: rgb(0 0 0 / 5%) 0px 1px 7px 0px;
            background: rgb(255, 255, 255);
            text-align: center;
            border-radius: 4px;
            margin-bottom: 12px;
            position: relative;

            &-logo {
              position: absolute;
              top: calc(50% - 12px);
              left: 35px;
              width: 24px;
              height: 24px;
              background-size: cover;
              background-repeat: no-repeat;
            }

            span {
              display: block;
              font-size: 14px;
            }
          }
          .naver {
            #naverIdLogin {
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .customer-service {
      padding: 3.5rem 1em 0.5rem;
      font-size: 12px;
      line-height: 1.5;
      color: rgb(153, 153, 153);
      > p {
        width: 100%;
        border-top: 1px solid rgb(229, 229, 229);
        padding-top: 1rem;
        span {
          text-decoration: underline;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
`
