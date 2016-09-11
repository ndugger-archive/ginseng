import React from 'react'
import Aphrodite from 'aphrodite'

import BaseComponent from '../base'
import Style from './style'

export default class ButtonGroup extends BaseComponent {

    static defaultProps = { active: false }

    render ( ) {
        const { active, children, eventHandlers } = this.props;

        const buttons = children.map( ( button, key ) => {

            if ( button.props.name === active ) {
                return React.cloneElement( button, { active: true, key } )
            }

            return React.cloneElement( button, { key } )
        } )

        return (
            <section className={ Aphrodite.css( Style.buttonGroup ) } { ...eventHandlers }>
                { buttons }
            </section>
        )
    }
}
