import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

    menuSeparator: {
        width: '100%',
        height: 0,
        margin: '4px 0',
        borderTop: `1px solid ${ Palette.border }`,
        borderBottom: `1px solid ${ Palette.highlight }`
    },

    menuContext: {
        position: 'fixed',
        fontSize: 12
    },

    menuBar: {
        display: 'flex',
        height: 24,
		padding: '0 4px',
		fontSize: 12,
        background: Palette.lowlight,
        borderBottom: `1px solid ${ Palette.border }`
    },

	menuItem: {
		position: 'relative',
		display: 'inline-flex',
        justifyContent: 'space-between',
		height: 24,
		padding: '0 8px',
		lineHeight: '24px',
		whiteSpace: 'nowrap',
		color: Palette.text
	},

	menuItem__active: {
		color: 'white',
		background: Palette.active
	},

	menuItem__child: {
		margin: 0
	},

    menuItemShortcut: {
        marginLeft: 12,
        fontSize: 10,
        color: Palette.border
    },

	menuItemArrow: {
		marginLeft: 4,
		marginRight: -4
	},

	menuItemChildren: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		minWidth: 100,
        padding: 4,
		background: Palette.background,
        border: `1px solid ${ Palette.border }`,
        boxShadow: '0 0 16px rgba(0, 0, 0, 0.33)'
	}
} )
