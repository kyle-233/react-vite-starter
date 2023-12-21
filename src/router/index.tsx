// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { RouterViews } from './baseConfig'
import { AppLayout } from '../layouts'

export const RouterView = (): JSX.Element => (
  <BrowserRouter>
    <AppLayout>
      <RouterViews />
    </AppLayout>
  </BrowserRouter>
)
