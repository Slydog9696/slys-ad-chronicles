/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

