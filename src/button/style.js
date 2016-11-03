import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

    button: {
        display: 'flex',
        alignItems: 'center',
        height: 28,
        padding: '0 10px',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'inherit',
        background: Palette.background,
        borderRadius: 3,
        border: `1px solid ${ Palette.border }`,
        boxShadow: `inset 0 1px ${ Palette.highlight }`,
        outline: 'none',

        ':hover': {
            background: Palette.highlight
        },

        ':active': {
            background: Palette.lowlight,
            boxShadow: 'none'
        }
    },

    button__active: {
        background: Palette.lowlight,
        boxShadow: 'none',

        ':hover': {
            background: Palette.lowlight
        }
    },

    buttonIcon: {
        padding: '0 4px'
    },

    buttonGroup: {
        display: 'flex',
        borderRadius: 3,

        ':nth-child(1n) > :not(:first-child)': {
            borderRadius: 0,
            borderLeft: 'none'
        },

        ':nth-child(1n) > :first-child': {
            borderRadius: '3px 0 0 3px'
        },

        ':nth-child(1n) > :last-child': {
            borderRadius: '0 3px 3px 0',
            borderLeft: 'none'
        }
    }
} )
