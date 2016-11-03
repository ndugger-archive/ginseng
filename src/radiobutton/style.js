import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	radioButtonGroup: {
		display: 'flex'
	},

	radioButtonContainer: {
		display: 'inline-flex',
		alignItems: 'center'
	},

	radioButtonContainer__row: {
		marginRight: 8,

		':last-child': {
			marginRight: 0
		}
	},

	radioButton: {
		marginRight: 4,

		':hover': {
			color: Palette.active
		}
	},

	radioButton__checked: {
		color: Palette.active
	}
} )
