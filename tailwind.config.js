const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sanomat Sans Regular','sans-serif']
        // 'sans': ['Fjalla', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' ),
    require( '@tailwindcss/forms' )
	],
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    });
    return config;
  },
}

module.exports = tailwindConfig