import React, { Component } from 'react'

export default class BaseGinsengComponent extends Component {

    otherProps ( more ) {
        return { ...this.eventListeners( ), ...this.dataAttributes( ), ...more }
    }

    eventListeners ( ) {
        const eventListeners = { }

        for ( const prop in this.props ) {

            if ( prop.match( /^on.+/ ) ) {
                eventListeners[ prop ] = this.props[ prop ]
            }
        }

        return eventListeners
    }

	dataAttributes ( ) {
		const dataAttributes = { }

		for ( const prop in this.props ) {

			if ( prop.match( /^data-.+/ ) ) {
				dataAttributes[ prop ] = this.props[ prop ]
			}
		}

		return dataAttributes
	}
}
