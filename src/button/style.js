import Aphrodite from 'aphrodite'

export default Aphrodite.StyleSheet.create( {

    button: {
        cursor: 'pointer',
        height: 28,
        padding: '0 10px',
        fontFamily: 'inherit',
        background: '#DDD',
        borderRadius: 4,
        border: '1px solid #999',
        boxShadow: 'inset 0 1px #EEE',
        outline: 'none',

        ':hover': {
            background: '#EEE',
            boxShadow: 'inset 0 1px #FFF'
        },

        ':active': {
            background: '#BBB',
            boxShadow: 'none'
        }
    },

    button__active: {
        background: '#BBB',
        boxShadow: 'none'
    }
} )
