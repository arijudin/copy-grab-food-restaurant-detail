const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},

	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' ),
    require( '@tailwindcss/forms' )
	]
}

module.exports = tailwindConfig