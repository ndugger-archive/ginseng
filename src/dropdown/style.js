import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	dropDownOption: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		padding: '3px 10px',

		':hover': {
			color: 'white',
			background: Palette.active
		}
	},

	dropDownOptionCheckBox: {
		fontSize: 18,
		lineHeight: 0,
		marginLeft: -4
	},

	dropDownOptionContainer: {
		position: 'absolute',
		top: 'calc( 100% + 2px )',
		width: '100%',
		boxSizing: 'border-box',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'inherit',
        background: Palette.input,
        boxShadow: `inset 0 0 0 1px ${ Palette.border }`,
	},

	dropDownOption__checked: {

	},

	dropDown: {
		position: 'relative',
		background: Palette.input
	},

	dropDownInput: {
		background: 'transparent !important'
	}
} )
