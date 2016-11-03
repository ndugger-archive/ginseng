import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Icon from '../icon'

import ButtonGroup from './group'
import Style from './style'

export default class Button extends BaseGinsengComponent {

    static Group = ButtonGroup

    static defaultProps = {
        __classNameOverride__: [ ],
        className: '',
        style: { }
    }

    static contextTypes = {
        active: React.PropTypes.array,
        handleButtonClick: React.PropTypes.func,
        theme: React.PropTypes.object
    }

    element = null

    get index ( ) {
        const { element } = this
        return element ? [ ...element.parentNode.children ].indexOf( element ) : -1
    }

    get active ( ) {
        return ( this.context.active ) && this.context.active.includes( this.index )
    }

    componentDidMount ( ) {

        if ( this.active ) {
            this.forceUpdate( )
        }
    }

    handleRender ( button ) {

        if ( button && !this.element ) {
            this.element = button
        }
    }

    handleClick ( event ) {

        if ( this.context.handleButtonClick ) {
            this.context.handleButtonClick( this.index, this.props.value )
        }

        if ( this.props.onClick ) {
            this.props.onClick( event )
        }
    }

    render ( ) {
        const { theme } = this.context
        const { __styleSheetOverride__, children, className, style } = this.props
        const classNames = [
            Style.button, this.active && Style.button__active, children && children.type === Icon && Style.buttonIcon,
            ...this.props.__classNameOverride__,
            theme.button, this.active && theme.button__active, children && children.type === Icon && theme.buttonIcon
        ]
        const buttonClassName = `${ Aphrodite.css.apply( null, classNames ) } ${ className }`
        const more = { onClick: e => this.handleClick( e ) }

        return (
            <button ref={ button => this.handleRender( button ) } className={ buttonClassName } style={ style } { ...this.otherProps( more ) }>
                { children || 'Button' }
            </button>
        )
    }
}
