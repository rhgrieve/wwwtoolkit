import React, {useState} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {
	Textarea,
	Heading,
	VStack,
	HStack,
	Button,
	IconButton,
	useToast,
} from '@chakra-ui/react';
import {CopyIcon, RepeatIcon} from '@chakra-ui/icons';
import Layout from '../components/layout';

const Colors: NextPage = () => {
	const toast = useToast();
	const [textAreaValue, setTextAreaValue] = useState('');

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaValue(e.target.value);
	};

	const handleResetTextArea = () => {
		setTextAreaValue('');
	};

	const handleEncodeTextarea = () => {
		setTextAreaValue(encodeURIComponent(textAreaValue));
	};

	const handleDecodeTextarea = () => {
		setTextAreaValue(decodeURIComponent(textAreaValue));
	};

	const handleCopyText = async () => {
		navigator.clipboard.writeText(textAreaValue)
			.then(() => {
				toast({
					title: 'Copied to clipboard',
					status: 'success',
				});
			}, () => {
				toast({
					title: 'Failed to copy',
					status: 'error',
				});
			});
	};

	return (
		<Layout>
			<Head>
				<title>toolkit &gt; url encode/decode</title>
			</Head>

			<VStack align="flex-start" spacing={6}>
				<Heading size="lg">URL Encode/Decode</Heading>
				<VStack align="flex-start" w="full" spacing={6}>
					<VStack align="flex-start" w="full">
						<HStack justify="flex-end" w="full">
							<IconButton aria-label="Copy text" icon={<CopyIcon />} onClick={handleCopyText} />
							<IconButton aria-label="Reset text area" icon={<RepeatIcon />} onClick={handleResetTextArea} />
						</HStack>
						<Textarea placeholder="Paste text here..." spellCheck={false} resize="none" h={480} onChange={handleTextAreaChange} value={textAreaValue} />
						<HStack>
							<Button colorScheme="purple" onClick={handleEncodeTextarea}>Encode</Button>
							<Button colorScheme="teal" onClick={handleDecodeTextarea}>Decode</Button>
						</HStack>
					</VStack>
				</VStack>
			</VStack>
		</Layout>
	);
};

export default Colors;
