import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

	tabGroup: {
		width: '100%'
	},

	tabs: {

		':nth-child(1n) > :first-child': {
            borderBottomLeftRadius: 0
        },

        ':nth-child(1n) > :last-child': {
            borderBottomRightRadius: 0
        }
	},

	tab: {
		flexGrow: 1
	},

	tab__active: {
		background: Palette.highlight,
		borderBottom: `1px solid ${ Palette.highlight }`,
		boxSHadow: 'none',

		':hover': {
			background: Palette.highlight,
			borderBottom: `1px solid ${ Palette.highlight }`,
			boxSHadow: 'none'
		}
	},

	tabPanel: {
		padding: 10,
		marginTop: -1,
		background: Palette.highlight,
		border: `1px solid ${ Palette.border }`
	}
} )
