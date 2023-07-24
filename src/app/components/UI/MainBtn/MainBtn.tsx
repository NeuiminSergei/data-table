import style from './mainBtn.module.scss'

interface IMainBtnProps {
  children: React.ReactNode
  onclick: () => void
  purpose?: string
}

export const MainBtn = ({ children, purpose, onclick }: IMainBtnProps) => {

  const rootClasses = [style.btn]
  if (purpose === 'navigation') {
    rootClasses.push(style.nav_btn)
  }

  if (purpose === 'table') {
    rootClasses.push(style.table_btn)
  }

  return (
    <button onClick={onclick} className={rootClasses.join(' ')}>
      {children}
      {purpose === 'table' && <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
        <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
      </svg>
      }
    </button>
  )
}