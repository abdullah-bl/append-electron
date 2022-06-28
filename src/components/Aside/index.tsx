import { Heading, Box } from 'theme-ui'

export const Aside = () => {
	return (
		<Box
			as='aside'
			sx={{
				width: ['15em'],
				bg: 'slategray',
				height: '100vh',
				overflow: 'scroll',
				borderLeft: '1px solid #eee',
			}}
		>
			<Heading> Aside </Heading>
		</Box>
	)
}
