import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class MenuBar extends BaseGinsengComponent {

	static childContextTypes = {
		focused: React.PropTypes.bool,
		parent: React.PropTypes.string
	}

	state = { focused: false }
	offClick = null
	justClicked = false

	getChildContext ( ) {
		return {
			focused: this.state.focused,
			parent: 'menu'
		}
	}

	componentWillMount ( ) {
		this.offClick = this.handleOffClick.bind( this )
		window.addEventListener( 'click', this.offClick )
	}

	componentWillUnmount ( ) {
		window.removeEventListener( 'click', this.offClick )
	}

	handleOffClick ( event ) {

		if ( this.state.focused && !this.justClicked ) {
			this.setState( { focused: false } )
		}

		this.justClicked = false
	}

	handleClick ( event ) {

		if ( event.target !== this.rootNode ) {
			this.justClicked = true
			this.setState( { focused: true } )
		}

		if ( this.state.focused ) {
			this.setState( { focused: false } )
		}

		if ( this.props.onClick ) {
			this.props.onClick( event )
		}
	}

	render ( ) {
		const { focused } = this.state
		const { children } = this.props
		const more = {
			onClick: e => this.handleClick( e )
		}

		return (
			<nav className={ Aphrodite.css( Style.menuBar ) } { ...this.otherProps( more ) }>
				{ children }
			</nav>
		)
	}
}
