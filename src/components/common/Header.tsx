import styled from "styled-components"
import React from "react"
import { useSelector } from "src/hooks/useSelector"
import { Flex } from "../shared/Flex"
import { Navbar } from "./Navbar"
import { Loginbar } from "./Loginbar"
import ModalPortal from "./ModalPortal"
import LoginModal from "../login/LoginModal"
import { Center } from "../shared/Center"
import MobileNav from "./MobileNav"

const Header: React.FC = () => {
  const modalSwitch = useSelector(({ modal }) => modal.isOpenLogin)

  return (
    <HeaderContainer>
      <HeaderCenter variant="xwide">
        <Flex space="evenly" axis="horizontal" alignment="center">
          <Navbar />
          <Loginbar />
          <MobileNav />
          {modalSwitch && (
            <ModalPortal>
              <LoginModal />
            </ModalPortal>
          )}
        </Flex>
      </HeaderCenter>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: sticky;
  background: white;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #ededed;
  padding: 10px 0;
`
const HeaderCenter = styled(Center).attrs({ variant: "xwide" })`
  ${({ theme }) => theme.maxMedia.notebook} {
    max-width: ${({ theme }) => theme.size.large};
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    max-width: ${({ theme }) => theme.size.middle};
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    max-width: ${({ theme }) => theme.size.small};
  }
  ${({ theme }) => theme.maxMedia.smallMobile} {
    max-width: ${({ theme }) => theme.size.xsmall};
    padding-right: 1rem;
    padding-left: 1rem;
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
  }
`

export default Header
