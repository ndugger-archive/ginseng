import Aphrodite from 'aphrodite'
import Palette from '../palette'

export default Aphrodite.StyleSheet.create( {

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        padding: '0 12px',
        background: Palette.background,
        borderBottom: `1px solid ${ Palette.border }`
    },

    toolbarSeparator: {
        height: 40,
        margin: '0 12px',
        borderLeft: `1px solid ${ Palette.border }`,
        borderRight: `1px solid ${ Palette.highlight }`,
        boxShadow: 'none'
    }
} )
