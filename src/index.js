import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Button from './button'
import ButtonGroup from './button-group'
import Toolbar from './toolbar'

export {
    Button,
    ButtonGroup,
    Toolbar
}

///////////////////

(() => {

    function App () {

        return (
            <Toolbar eventHandlers={ { onClick: e => console.log(e.target) } }>

                <ButtonGroup name='fooBarBazGroup' behavior='radio' active='foo'>
                    <Button name='foo' eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Foo
                    </Button>
                    <Button name='bar' eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Bar
                    </Button>
                    <Button name='baz' eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Baz
                    </Button>
                </ButtonGroup>

                <Toolbar.Separator/>

                <ButtonGroup name='fooBarBazGroup2' behavior='radio'>
                    <Button eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Foo
                    </Button>
                    <Button eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Bar
                    </Button>
                    <Button eventHandlers={ { onClick: e => e.preventDefault() } }>
                        Baz
                    </Button>
                </ButtonGroup>

            </Toolbar>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('ginsengContainer'))

})()
