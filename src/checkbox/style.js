import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	checkBoxContainer: {
		display: 'inline-flex',
		alignItems: 'center'
	},

	checkBox: {
		cursor: 'pointer',
		marginRight: 4,

		':hover': {
			color: Palette.active
		}
	},

	checkBox__checked: {
		color: Palette.active
	}
} )
