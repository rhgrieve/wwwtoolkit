import prettier from 'prettier/standalone';

import parserBabel from 'prettier/parser-babel';
import parserTypescript from 'prettier/parser-typescript';
import parserCss from 'prettier/parser-postcss';
import parserGraphQl from 'prettier/parser-graphql';
import parserMarkdown from 'prettier/parser-markdown';
import parserHtml from 'prettier/parser-html';

export type PrettierLangs = 'js'
  | 'json'
  | 'ts'
  | 'css'
  | 'sass'
  | 'less'
  | 'graphql'
  | 'md'
  | 'html'

export interface IPrettierOptions {
  tabWidth: number
  useTabs: boolean
  semi: boolean
  singleQuote: boolean
  quoteProps: 'as-needed'|'consistent'|'preserve'
  trailingCommas: 'es5'|'none'|'all'
  bracketSpacing: boolean
  bracketSameLine: boolean
  arrowParens: 'always'|'avoid'
}

const prettierLangMap = {
	js: 'babel',
	json: 'json',
	ts: 'typescript',
	css: 'css',
	sass: 'sass',
	less: 'less',
	graphql: 'graphql',
	md: 'markdown',
	html: 'html',
};

function getPrettierConfig(lang: PrettierLangs) {
	const prettierConfig = {
		parser: prettierLangMap[lang],
		plugins: [
			parserBabel,
			parserTypescript,
			parserCss,
			parserGraphQl,
			parserMarkdown,
			parserHtml,
		],
	};

	return prettierConfig;
}

export function prettify(data: string, lang: PrettierLangs) {
	const prettified = prettier.format(data, {
		...getPrettierConfig(lang),
	});
	return prettified;
}
