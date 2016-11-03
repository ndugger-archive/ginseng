import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class App extends BaseGinsengComponent {

	static defaultProps = {
		className: '',
		style: { },
		theme: { }
	}

	static childContextTypes = {
		theme: React.PropTypes.object
	}

	theme = null

	getChildContext ( ) {
		return {
			theme: this.theme
		}
	}

	componentWillMount ( ) {
		this.theme = Aphrodite.StyleSheet.create( this.props.theme )
	}

	handleContextMenu ( event ) {
		event.preventDefault( )

		if ( this.props.onContextMenu ) {
			this.props.onContextMenu( event )
		}
	}

	render ( ) {
		const { children, className, style } = this.props
		const appClassName = `${ Aphrodite.css( Style.app ) } ${ className }`
		const more = {
			onContextMenu: e => this.handleContextMenu( e )
		}

		return (
			<main role='main' className={ appClassName } style={ style } { ...this.otherProps( more ) }>
				{ children }
			</main>
		)
	}
}
