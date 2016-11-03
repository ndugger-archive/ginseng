import React from 'react'
import * as Aphrodite from 'aphrodite/no-important'

import BaseGinsengComponent from '../base'

import MenuBar from './bar'
import MenuContext from './context'
import MenuItem from './item'
import Style from './style'

export default class Menu extends BaseGinsengComponent {

	static Bar = MenuBar
	static Context = MenuContext
	static Item = MenuItem

	static Separator ( props ) {
        const { className = '', style = { } } = props
        const separatorClassName = `${ Aphrodite.css( Style.menuSeparator ) } ${ className }`

        return (
            <div className={ separatorClassName } style={ style }/>
        )
    }

	static defaultProps = {
		className: '',
		style: { },
		type: 'nav'
	}

	render ( ) {
		const { children, className, style, type } = this.props

		return (
			<nav className={ '' } { ...this.otherProps( ) }>
				<ul>
					{ children }
				</ul>
			</nav>
		)
	}
}
