import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	textBox: {
		boxSizing: 'border-box',
        padding: '0 10px',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'inherit',
        background: Palette.input,
        borderRadius: 4,
        border: `1px solid ${ Palette.border }`,
        outline: 'none',

		':not(textarea)': {
	        height: 28
		}
	}
} )
