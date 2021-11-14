import React from 'react';
import {
	Textarea,
	Heading,
	VStack,
	HStack,
	Button,
	FormControl,
	FormLabel,
	Select,
	IconButton,
	useToast,
} from '@chakra-ui/react';
import {CopyIcon, RepeatIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import {prettify, PrettierLangs} from '../lib/formatter';

const Formatter = () => {
	const toast = useToast();
	const [textAreaValue, setTextAreaValue] = useState('');
	const [selectedLang, setSelectedLang] = useState<PrettierLangs>('js');

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaValue(e.target.value);
	};

	const handleResetTextArea = () => {
		setTextAreaValue('');
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

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedLang(e.target.value as PrettierLangs);
	};

	const handlePrettify = () => {
		let prettified = '';
		try {
			prettified = prettify(textAreaValue, selectedLang);
			setTextAreaValue(prettified);
		} catch {
			toast({
				title: 'Parse error!',
				status: 'error',
			});
		}
	};

	return (
		<Layout>
			<Head>
				<title>toolkit &gt; code formatter</title>
			</Head>

			<VStack align="flex-start" spacing={6}>
				<Heading size="lg">Code Formatter</Heading>
				<VStack align="flex-start" w="full" spacing={6}>
					<FormControl>
						<FormLabel>Language</FormLabel>
						<Select value={selectedLang} onChange={handleSelectChange}>
							<option value="js">JavaScript</option>
							<option value="ts">Typescript</option>
							<option value="html">HTML</option>
							<option value="json">JSON</option>
							<option value="md">Markdown</option>
							<option value="css">CSS</option>
							<option value="sass">Sass</option>
							<option value="less">LESS</option>
							<option value="graphql">GraphQL</option>
						</Select>
					</FormControl>
					<VStack align="flex-start" w="full">
						<HStack justify="flex-end" w="full">
							<IconButton aria-label="Copy text" icon={<CopyIcon />} onClick={handleCopyText} />
							<IconButton aria-label="Reset text area" icon={<RepeatIcon />} onClick={handleResetTextArea} />
						</HStack>
						<Textarea placeholder="Paste code here..." spellCheck={false} resize="none" h={480} onChange={handleTextAreaChange} value={textAreaValue} />
						<HStack>
							<Button colorScheme="purple" onClick={handlePrettify}>Prettify</Button>
							<Button colorScheme="teal" disabled>Minify</Button>
						</HStack>
					</VStack>
				</VStack>
			</VStack>
		</Layout>
	);
};

export default Formatter;
