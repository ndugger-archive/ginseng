import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function eventListeners ( props ) {
    const eventListeners = { }

    for ( const prop in props ) {

        if ( prop.match( /^on.+/ ) ) {
            eventListeners[ prop ] = props[ prop ]
        }
    }

    return eventListeners
}

function dataAttributes ( props ) {
    const dataAttributes = { }

    for ( const prop in props ) {

        if ( prop.match( /^data-.+/ ) ) {
            dataAttributes[ prop ] = props[ prop ]
        }
    }

    return dataAttributes
}

export default class BaseGinsengComponent extends Component {

    get rootNode ( ) {
        return ReactDOM.findDOMNode( this )
    }

    get styleOverride ( ) {
        return this.props.__styleSheetOverride__
    }

    otherProps ( more ) {
        return { ...eventListeners( this.props ), ...dataAttributes( this.props ), ...more }
    }
}
