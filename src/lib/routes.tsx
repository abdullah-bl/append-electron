import { HomeIcon } from '@radix-ui/react-icons'
import { ReactElement } from 'react'

export type RouteType = {
	label: string
	path: string
	icon: ReactElement
}

export const routes: RouteType[] = [
	{
		label: 'Home',
		path: '/',
		icon: <HomeIcon />,
	},
]
