import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import Button from './button'
import CheckBox from './checkbox'
import DropDown from './dropdown'
import Icon from './icon'
import Palette from './palette'
import RadioButton from './radiobutton'
import TextBox from './textbox'
import Toolbar from './toolbar'

export {
    App,
    Button,
    CheckBox,
    DropDown,
    Icon,
    Palette,
    RadioButton,
    TextBox,
    Toolbar
}

///////////////////

(() => {

    function Foo () {

        return (
            <App>
                <Toolbar onClick={ e => console.log(e.target) }>

                    <Button.Group>
                        <Button>
                            <Icon glyph='send' size={ 18 }/>
                        </Button>
                        <Button>
                            Foo
                        </Button>
                        <Button>
                            Bar
                        </Button>
                    </Button.Group>

                    <Toolbar.Separator/>

                    <Button.Group>
                        <Button>
                            Baz
                        </Button>
                        <Button>
                            Bxz
                        </Button>
                    </Button.Group>

                    <Toolbar.Separator/>

                    <CheckBox label='Hello, World' $onChange={ checked => console.log( checked ) }/>

                    <Toolbar.Separator/>

                    <RadioButton.Group direction='row' $onChange={ value => console.log( value ) }>
                        <RadioButton value={ 123 } label='Foo'/>
                        <RadioButton label='Bar' checked/>
                        <RadioButton label='Baz'/>
                        <RadioButton label='Bxy'/>
                    </RadioButton.Group>

                    <Toolbar.Separator/>

                    <DropDown multi $onChange={ value => console.log( value ) }>
                        <DropDown.Option label='Foo'/>
                        <DropDown.Option label='Bar'/>
                        <DropDown.Option label='Baz'/>
                    </DropDown>

                </Toolbar>
            </App>
        )
    }

    ReactDOM.render(<Foo/>, document.body)

})()
