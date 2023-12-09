import typescript from '@rollup/plugin-typescript';

export default {
	input: './src/com.doubleedesign.lifx.sdPlugin/app.ts',
	watch: true,
	output: {
		file: './src/com.doubleedesign.lifx.sdPlugin/app-bundle.js',
		format: 'esm'
	},
	plugins: [
		typescript({
			tsconfig: './tsconfig.json'
		})
	]
}
