import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {Box, VStack, Heading, Link} from '@chakra-ui/react';

const Sidebar = () => {
	const router = useRouter();
	const currentPath = router.pathname;
	return (
		<Box as="nav" border="1px solid" borderRadius={4} borderColor="gray.200" p={4}>
			<VStack align="flex-start">
				<Heading size="sm">Tools</Heading>
				<NextLink href="/formatter" passHref>
					<Link color={currentPath === '/formatter' ? 'purple.400' : 'black'}>Code Formatter</Link>
				</NextLink>
				<NextLink href="/url-encoder" passHref>
					<Link color={currentPath === '/url-encoder' ? 'purple.400' : 'black'}>URL Encode/Decode</Link>
				</NextLink>
				{/* <NextLink href="/colors" passHref>
					<Link color={currentPath === '/colors' ? 'purple.400' : 'black'}>Color Utils</Link>
				</NextLink> */}
			</VStack>
		</Box>
	);
};

export default Sidebar;
