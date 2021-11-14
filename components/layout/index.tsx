import Head from 'next/head';
import {Box, Container, Grid, GridItem, VStack, useBreakpointValue} from '@chakra-ui/react';
import {ReactNode} from 'react';

import Sidebar from '../nav/Sidebar';

type Props = {
	children: ReactNode
}

const Layout = ({children}: Props) => {
	const isMobile = useBreakpointValue({base: true, md: false});

	return (
		<div>
			<Head>
				<meta name="description" content="Just some web tools" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<VStack spacing={6}>
				<Box bg="gray.100" p={4} w="full">Toolkit</Box>
				<Container maxW="container.xl">
					<Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)" gap={6}>
						{!isMobile && (
							<GridItem rowSpan={1} colSpan={1}>
								<Sidebar />
							</GridItem>
						)}
						<GridItem rowSpan={2} colSpan={{base: 5, md: 4}}>
							<Box p={4}>
								{children}
							</Box>
						</GridItem>
					</Grid>
				</Container>
			</VStack>
		</div>
	);
};

export default Layout;
