import { useRouter } from "next/navigation"
import { Pagination } from "../Pagination/Pagination"
import { MainBtn } from "../UI/MainBtn/MainBtn"
import style from './navigation.module.scss'
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux"
import { pageSlice } from "@/app/store/reducers/PageSlice"

export const Navigation = () => {

  const router = useRouter()

  const { currentPage, totalPages } = useAppSelector(state => state.pageReducer)
  const { setPage } = pageSlice.actions
  const dispatch = useAppDispatch()

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1))
      router.push(`/${currentPage + 1}`)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1))
      router.push(`/${currentPage - 1}`)
    }
  }

  return (
    <div className={style.wrapper}>
      <MainBtn onclick={previousPage} purpose="navigation">Назад</MainBtn>
      <Pagination />
      <MainBtn onclick={nextPage} purpose="navigation">Далее</MainBtn>
    </div>
  )
}