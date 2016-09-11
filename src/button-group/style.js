import Aphrodite from 'aphrodite'

export default Aphrodite.StyleSheet.create( {

    buttonGroup: {
        borderRadius: 4,

        ':nth-child(1n) > *': {
            borderRadius: 0
        },

        ':nth-child(1n) > :first-child': {
            borderRadius: '4px 0 0 4px',
            borderRight: 'none'
        },

        ':nth-child(1n) > :last-child': {
            borderRadius: '0 4px 4px 0',
            borderLeft: 'none'
        }
    }
} )
