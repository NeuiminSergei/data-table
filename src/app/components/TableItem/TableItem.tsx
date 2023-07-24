import style from './tableItem.module.scss'

interface ITableItemProps {
  id: number
  title: string
  body: string
}

export const TableItem = ({ id, title, body }: ITableItemProps) => {

  return (
    <tr>
      <td className={style.item}>{id}</td>
      <td className={style.item}>{title}</td>
      <td className={style.item}>{body}</td>
    </tr>
  )
}