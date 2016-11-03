import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import Style from './style'

export default class MenuContext extends BaseGinsengComponent {

	static childContextTypes = {
		parent: React.PropTypes.string
	}

	state = { x: 0, y: 0, visible: false }
	offClick = null

	getChildContext ( ) {
		return {
			parent: 'context'
		}
	}

	componentWillMount ( ) {
		this.offClick = this.handleOffClick.bind( this )
		window.addEventListener( 'click', this.offClick )
	}

	componentWillUnmount ( ) {
		window.removeEventListener( 'click', this.offClick )
	}

	componentDidMount ( ) {
		this.rootNode.parentNode.addEventListener( 'contextmenu', e => this.handleParentRightClick( e ) )
	}

	handleOffClick ( ) {

		if ( this.state.visible ) {
			this.setState( { visible: false } )
		}
	}

	handleParentRightClick ( event ) {
		
		if ( !event.target.closest('[class*=menuContext]') ) {
			this.setState( { visible: true, left: event.x, top: event.y } )
		}
	}

	render ( ) {
		const { visible, left, top } = this.state
		const { children } = this.props
		const position = { left, top }

		return (
			<nav className={ Aphrodite.css( Style.menuContext ) } style={ position } { ...this.otherProps( ) }>

				{ visible && (
					<div className={ Aphrodite.css( Style.menuItemChildren ) }>
						{ children }
					</div>
				) }

			</nav>
		)
	}
}
