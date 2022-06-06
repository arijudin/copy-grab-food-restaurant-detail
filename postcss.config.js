const postcssConfig = {
  plugins: {
		'postcss-import': {},
		autoprefixer: {},
		tailwindcss: {},
		'autoprefixer': {
			autoprefixer: {
				flexbox: 'no-2009'
			},
			stage: 3,
			features: {
				'custom-properties': false
			}
		}
  },
}

module.exports = postcssConfig