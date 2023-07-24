import { useAppDispatch, useAppSelector } from "@/app/hooks/redux"
import Link from "next/link"
import style from './pagination.module.scss'
import { pageSlice } from "@/app/store/reducers/PageSlice"


export const Pagination = () => {

  const { currentPage, totalPages } = useAppSelector(state => state.pageReducer)
  const { setPage } = pageSlice.actions
  const dispatch = useAppDispatch()

  const pagesArray: number[] = []

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1)
  }

  const rootClasses = [style.link, style.active]

  return (
    <div>
      {pagesArray.map(link =>
        <Link
          className={link === currentPage ? rootClasses.join(' ') : style.link}
          onClick={() => dispatch(setPage(link))}
          href={`/${link}`}
          key={link}>
          {link}
        </Link>)}
    </div>
  )
}