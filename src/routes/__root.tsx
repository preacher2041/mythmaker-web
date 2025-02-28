import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { MainNav } from '@/components'

export const Route = createRootRoute({
  component: () => (
    <>
      <MainNav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})