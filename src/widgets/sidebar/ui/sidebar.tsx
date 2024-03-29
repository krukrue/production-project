import React from 'react'
import { classNames } from 'shared/lib/classnames/class-names'
import styles from './sidebar.module.scss'
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher'
import { ThemeSwitcher } from 'shared/ui'

interface SideBarProps {
  className?: string
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const onToggle = () => {
    setCollapsed(s => !s)
  }

  return (
    <div data-testid="sidebar" className={classNames(styles.sidebar as string, { [styles.collapsed]: collapsed }, [props.className])} >
      <button data-testid="ToggleButton" onClick={onToggle}>Toggle</button>
      <div className={classNames(styles.switchers as string)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}

export default SideBar
