import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Button from '../button'

import Style from './style'

export default class TabGroup extends BaseGinsengComponent {

	static childContextTypes = {
		stretch: React.PropTypes.bool
	}

	state = { active: 0 }

	getChildContext ( ) {
		return {
			stretch: this.props.stretch
		}
	}

	componentWillMount ( ) {
		const active = this.props.children.find( x => x.props.active )

		if ( active ) {
			this.setState( { active: this.props.children.indexOf( active ) } )
		}
	}

	handleTabChange ( active ) {
		this.setState( { active } )
	}

	render ( ) {
		const { active } = this.state
		const { children } = this.props
		const tabs = children
		const panels = children.map( x => x.props.children )
		const tabGroupClassName = Aphrodite.css( Style.tabGroup )
		const tabsClassName = Aphrodite.css( Style.tabs )

		return (
			<div className={ tabGroupClassName }>

				<Button.Group toggle required className={ tabsClassName } $onChange={ x => this.handleTabChange( x ) }>
					{ children }
				</Button.Group>

				<div className={ Aphrodite.css( Style.tabPanel ) }>
					{ panels[ active ] }
				</div>

			</div>
		)
	}
}
