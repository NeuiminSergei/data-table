'use client'

import { useEffect, useState } from "react"
import { ContentTable } from "../components/ContentTable/ContentTable"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchData } from "../store/reducers/ActionCreators"
import { Navigation } from "../components/Navigation/Navigation"
import { pageSlice } from "../store/reducers/PageSlice"
import { MainInput } from "../components/UI/MainInput/MainInput"
import { useData, useSort } from "../hooks/useSort"

interface Props {
  params: {
    page: string
  }
}

export default function Page({ params: { page } }: Props) {

  const { setPage } = pageSlice.actions
  const { data } = useAppSelector(state => state.dataReducer)
  const dispatch = useAppDispatch()

  const [inpValue, setInpValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchData(10, Number(page)))
    dispatch(setPage(Number(page)))
  }, [])

  const sortedData = useData(inpValue)

  return (
    <>
      <MainInput value={inpValue} onChange={handleChange} placeholder='Поиск' />
      <ContentTable data={sortedData} />
      <Navigation />
    </>
  )
}