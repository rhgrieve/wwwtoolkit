import type {NextPage} from 'next';
import Head from 'next/head';
import {Heading} from '@chakra-ui/react';
import Layout from '../components/layout';

const Colors: NextPage = () => (
	<Layout>
		<Head>
			<title>toolkit &gt; colors</title>
		</Head>

		<Heading size="lg">Color Utils</Heading>
	</Layout>
);

export default Colors;
