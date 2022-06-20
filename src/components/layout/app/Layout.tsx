import React, { ReactElement } from "react"
import Footer from "../../common/Footer"
import Header from "../../common/Header"

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
