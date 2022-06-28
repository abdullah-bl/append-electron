import { ReactNode } from 'react'
import { Box } from 'theme-ui'
import { Aside } from '../Aside'

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Box as={'main'} sx={{ display: 'flex', justifyItems: 'baseline' }}>
			<Aside />
			{children}
		</Box>
	)
}
