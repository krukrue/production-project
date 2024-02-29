import './styles/index.scss'
import React from 'react'
import { classNames } from '../shared/lib/classnames/class-names'
import { useTheme } from './providers/theme-provider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { SideBar } from 'widgets/sidebar'
import { PageLoader } from 'widgets/page-loader/page-loader'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', undefined, [theme])}>
      <React.Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <SideBar/>
          <div className="page-wrapper">
            <React.Suspense fallback={<PageLoader />}>
              <AppRouter />
            </React.Suspense>
          </div>
        </div>
      </React.Suspense>
    </div>
  )
}

export default App
