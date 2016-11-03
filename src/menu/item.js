import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Icon from '../icon'

import Style from './style'

export default class MenuItem extends BaseGinsengComponent {

	static defaultProps = {
		className: '',
		label: ''
	}

	static contextTypes = {
		focused: React.PropTypes.bool,
		parent: React.PropTypes.string,
		theme: React.PropTypes.object
	}

	static childContextTypes = {
		parent: React.PropTypes.string
	}

	state = { open: false }
	offClick = null
	justOpened = false

	get open ( ) {
		return false
	}

	get isChild ( ) {
		const { parent } = this.context
		return parent === 'item' || parent === 'context'
	}

	getChildContext ( ) {
		return {
			parent: 'item'
		}
	}

	componentWillMount ( ) {
		this.offClick = this.handleOffClick.bind( this )
		window.addEventListener( 'click', this.offClick )
	}

	componentWillUnmount ( ) {
		window.removeEventListener( 'click', this.offClick )
	}

	handleOffClick ( ) {

		if ( this.state.open && !this.justOpened ) {
			this.setState( { open: false } )
		}

		this.justOpened = false
	}

	handleMouseEnter ( event ) {

		if ( this.isChild || this.context.focused ) {
			this.setState( { open: true } )
		}

		if ( this.props.onMouseEnter ) {
			this.props.onMouseEnter( event )
		}
	}

	handleMouseLeave ( event ) {

		if ( this.isChild || this.context.focused ) {
			this.setState( { open: false } )
		}

		if ( this.props.onMouseLeave ) {
			this.props.onMouseLeave( event )
		}
	}

	handleClick ( event ) {

		if ( this.isChild || this.state.open ) {
			this.setState( { open: false } )
		}
		else {
			this.justOpened = true
			this.setState( { open: true } )
		}

		if ( this.props.onClick ) {
			this.props.onClick( event )
		}
	}

	render ( ) {
		const { theme } = this.context
		const { open } = this.state
		const { children, className, label, shortcut } = this.props
		const more = {
			onMouseEnter: e => this.handleMouseEnter( e ),
			onMouseLeave: e => this.handleMouseLeave( e ),
			onClick: e => this.handleClick( e )
		}

		const classNames = [

			Style.menuItem,
			open && Style.menuItem__active,
			this.isChild && Style.menuItem__child,

			theme.menuItem,
			open && theme.menuItem__active,
			this.isChild && theme.menuItem__child
		]

		const menuItemClassName = `${ Aphrodite.css.apply( null, classNames ) } ${ className }`
		const childrenPosition = {
			top: !this.isChild ? '100%' : 0,
			left: this.isChild ? '100%' : 0,
			marginTop: this.isChild ? -5 : 0,
			marginLeft: !this.isChild ? -1 : 0
		}

		return (
			<div className={ menuItemClassName } { ...this.otherProps( more ) }>

				{ label }

				<span>

					{ this.isChild && shortcut && !children && (
						<span className={ Aphrodite.css( Style.menuItemShortcut, theme.menuItemShortcut ) }>
							( { shortcut } )
						</span>
					) }

					{ this.isChild && children && (
						<Icon glyph={ 'chevron_right' } size={ '1.2em' } className={ Aphrodite.css( Style.menuItemArrow, theme.menuItemArrow ) }/>
					) }

				</span>

				{ children && open && (
					<div className={ Aphrodite.css( Style.menuItemChildren, theme.menuItemChildren ) } style={ childrenPosition }>
						{ children }
					</div>
				) }

			</div>
		)
	}
}
