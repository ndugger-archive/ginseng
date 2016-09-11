import Aphrodite from 'aphrodite'

export default Aphrodite.StyleSheet.create( {

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        padding: '0 12px',
        background: '#DDD',
        borderBottom: '1px solid #999'
    },

    toolbarSeparator: {
        height: 40,
        margin: '0 12px',
        borderLeft: '1px solid #999',
        borderRight: '1px solid #EEE',
        boxShadow: 'none'
    }
} )
