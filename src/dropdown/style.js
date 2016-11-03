import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	dropDownOption: {
		display: 'flex',
		alignItems: 'center',
		padding: '3px 10px',

		':hover': {
			color: 'white',
			background: Palette.active
		}
	},

	dropDownOption__selected: {
		color: Palette.active
	},

	dropDownOptionCheckBox: {
		fontSize: '16px !important',
		lineHeight: 0,
		marginLeft: -4,

		':hover': {
			color: 'inherit'
		}
	},

	dropDownOptionCheckBox__checked: {
		color: 'inherit !important',

		':hover': {
			color: 'inherit !important'
		}
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

	dropDown: {
		position: 'relative',
		background: Palette.input
	},

	dropDownInput: {
		background: 'transparent !important'
	},

	dropDownButton: {
		padding: '0 3px'
	}
} )
