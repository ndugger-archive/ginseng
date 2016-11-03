import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	app: {
		cursor: 'default',
		userSelect: 'none',
		width: '100%',
		height: '100%',
		fontFamily: 'Cabin, sans-serif',
		fontSize: 14,
		color: Palette.text,
		background: Palette.highlight
	}
} )
