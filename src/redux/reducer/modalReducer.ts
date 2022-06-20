import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  isOpenLogin: boolean
  isOpenReport: boolean
}

const initialState: ModalState = {
  isOpenLogin: false,
  isOpenReport: false,
}

const modalslice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onClickLoginModalOpenBtn: (state) => {
      state.isOpenLogin = true
    },
    onClickLoginModalExitBtn: (state) => {
      state.isOpenLogin = false
    },
    onClickReportModalOpenBtn: (state) => {
      state.isOpenReport = true
    },
    onClickReportExitBtn: (state) => {
      state.isOpenReport = false
    },
  },
})

export default modalslice
export const {
  onClickLoginModalOpenBtn,
  onClickLoginModalExitBtn,
  onClickReportModalOpenBtn,
  onClickReportExitBtn,
} = modalslice.actions
