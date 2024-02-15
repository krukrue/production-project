import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config'

const AppRouter = () => {
  return (
    <Routes>
      {
          Object.values(routeConfig).map(({ element, path }) => {
            return <Route key={path} path={path} element={element} />
          })
        }
    </Routes>
  )
}

export default AppRouter
