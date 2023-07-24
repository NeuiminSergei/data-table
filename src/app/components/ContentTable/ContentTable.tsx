import { IData } from '@/app/model'
import { MainBtn } from '../UI/MainBtn/MainBtn'
import style from './contentTable.module.scss'
import { TableItem } from '../TableItem/TableItem'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux'
import { dataSlice } from '@/app/store/reducers/DataSlise'

interface IContentTableProps {
  data: IData[]
}

export const ContentTable = ({ data }: IContentTableProps) => {

  const { isLoading, error } = useAppSelector(state => state.dataReducer)
  const { setSort } = dataSlice.actions
  const dispatch = useAppDispatch()

  return (
    <table className={style.table} cellPadding={0} cellSpacing={0}>
      <thead className={style.table_header}>
        <tr>
          <td className={style.table_col}><MainBtn purpose='table' onclick={() => dispatch(setSort('id'))}>ID </MainBtn></td>
          <td className={style.table_col}><MainBtn purpose='table' onclick={() => dispatch(setSort('title'))}>Заголовок</MainBtn></td>
          <td className={style.table_col}><MainBtn purpose='table' onclick={() => dispatch(setSort('body'))}>Описание</MainBtn></td>
        </tr>
      </thead>
      <tbody>
        {error && <tr><td>{error}</td></tr>}
        {data.map(item => <TableItem id={item.id} title={item.title} body={item.body} key={item.id} />)}
      </tbody>
    </table >
  )
}