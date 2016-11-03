import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	form: {
		width: '100%',
		padding: 0
	},

	formField: {
		boxSizing: 'border-box',
		width: '100%',
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
	},

	formFieldIconButton: {
		padding: '0 3px'
	},

	formFieldSet: {
		position: 'relative',
		width: '100%',
		lineHeight: '28px',
		border: `1px solid ${ Palette.border }`
	},

	formFieldSetLabel: {
		position: 'absolute',
		top: -12,
		left: 8,
		padding: 4,
		fontSize: 12,
		lineHeight: 'initial',
		background: Palette.highlight
	}
} )
