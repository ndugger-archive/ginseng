import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'
import Style from './style'

export default class ButtonGroup extends BaseGinsengComponent {

	static childContextTypes = {
		active: React.PropTypes.array,
		handleButtonClick: React.PropTypes.func
	}

	static defaultProps = {
		className: '',
		style: { },
		toggle: false,
		multiple: false
	}

	state = { active: [ ], toggleValues: [ ] }

	getChildContext ( ) {
		return {
			active: this.state.active,
			handleButtonClick: i => this.handleButtonClick( i )
		}
	}

	componentWillMount ( ) {
		const { children, required, toggle } = this.props
		const activeButton = children.find( x => x && x.props && x.props.active )

		if ( toggle && activeButton ) {
			this.setState( { active: [ children.indexOf( activeButton ) ] } )
		}

		if ( required && toggle && !activeButton ) {
			this.setState( { active: [ 0 ] } )
		}
	}

	handleButtonClick ( index, value ) {
		const { multiple, required, toggle, $onChange } = this.props

		let active = [ ]

		if ( toggle && multiple && this.state.active.includes( index ) ) {
			this.state.active.splice( this.state.active.indexOf( index ), 1 )
			active = [ ...this.state.active ]
		}
		else if ( toggle && multiple ) {
			this.state.active.push( index )
			active = [ ...this.state.active ]
		}
		else if ( toggle && this.state.active.includes( index ) && !required ) {
			active = [ ]
		}
		else if ( toggle ) {
			active = [ index ]
		}

		this.setState( { active } )

		if ( $onChange && toggle && multiple ) {
			return $onChange( active.map( i => this.props.children[ i ].props.value || i ) )
		}

		if ( $onChange && toggle ) {
			return $onChange( active.length ? this.props.children[ active[ 0 ] ].props.value || active[ 0 ] : null )
		}
	}

	render ( ) {
		const { children, className, style } = this.props
        const buttonGroupClassName = `${ Aphrodite.css( Style.buttonGroup ) } ${ className }`

        return (
            <section className={ buttonGroupClassName } style={ style } { ...this.otherProps( ) }>
                { children }
            </section>
        )
	}
}
