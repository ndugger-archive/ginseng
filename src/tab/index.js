import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Button from '../button'

import TabGroup from './group'
import Style from './style'

export default class Tab extends BaseGinsengComponent {

	static Group = TabGroup

	static defaultProps = {
		__classNameOverride__: [ ],
		className: '',
		label: '',
		style: { }
	}

	static contextTypes = {
        active: React.PropTypes.array,
		stretch: React.PropTypes.bool,
		theme: React.PropTypes.object
	}

	index = null

	get active ( ) {
		return this.context.active[ 0 ] === this.index
	}

	componentDidMount ( ) {

        if ( this.active ) {
            this.forceUpdate( )
        }
    }

	handleRender ( button ) {

		if ( button && this.index === null ) {
			this.index = button.index
		}
	}

	render ( ) {
		const { theme } = this.context
		const { children, className, label, style } = this.props
		const styleSheet = [
			Style.tab, this.active && Style.tab__active,
			theme.tab, this.active && theme.tab__active
		]
		const more = {
			style: { flexGrow: this.context.stretch ? 1 : 0, ...style },
			__classNameOverride__: styleSheet
		}

		return (
			<Button ref={ x => this.handleRender( x ) } className={ className } { ...this.otherProps( more ) }>
				{ label }
			</Button>
		)
	}
}
