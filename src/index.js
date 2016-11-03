import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import Button from './button'
import CheckBox from './checkbox'
import Container from './container'
import DropDown from './dropdown'
import Form from './form'
import Icon from './icon'
import Label from './label'
import Menu from './menu'
import Palette from './palette'
import RadioButton from './radiobutton'
import Spacer from './spacer'
import Tab from './tab'
import TextBox from './textbox'
import Toolbar from './toolbar'

export {
    App,
    Button,
    CheckBox,
    Container,
    DropDown,
    Form,
    Icon,
    Label,
    Menu,
    Palette,
    RadioButton,
    Spacer,
    Tab,
    TextBox,
    Toolbar
}

///////////////////

(() => {

    function Foo () {

        return (
            <App>

                <Menu.Bar>

                    <Menu.Item label='File'>
                        <Menu.Item label='New Window' shortcut='Ctrl+W'/>
                        <Menu.Item label='New Project' shortcut='Ctrl+P'/>
                        <Menu.Item label='Open Project' shortcut='Ctrl+O'/>
                        <Menu.Item label='Save' shortcut='Ctrl+S'/>
                        <Menu.Item label='Save As...' shortcut='Ctrl+Shift+S'/>
                        <Menu.Item label='Exit' shortcut='Ctrl+Q'/>
                    </Menu.Item>

                    <Menu.Item label='Edit'>
                        <Menu.Item label='Undo' shortcut='Ctrl+Z'/>
                        <Menu.Item label='Redo' shortcut='Ctrl+Shift+Z'/>
                        <Menu.Separator/>
                        <Menu.Item label='Cut' shortcut='Ctrl+X'/>
                        <Menu.Item label='Copy' shortcut='Ctrl+C'/>
                        <Menu.Item label='Paste' shortcut='Ctrl+V'/>
                    </Menu.Item>

                    <Menu.Item label='View'>
                        <Menu.Item label='Full Screen' shortcut='Ctrl+F'/>
                        <Menu.Item label='Developer'>
                            <Menu.Item label='Show Console'/>
                            <Menu.Item label='View Repository'/>
                            <Menu.Separator/>
                            <Menu.Item label='Something Else'/>
                        </Menu.Item>
                    </Menu.Item>

                    <Menu.Item label='Window'>
                        <Menu.Item label='Minimize'/>
                        <Menu.Item label='Maximize'/>
                        <Menu.Item label='Zoom'/>
                    </Menu.Item>

                    <Menu.Item label='Help'>
                        <Menu.Item label='License'/>
                    </Menu.Item>
                </Menu.Bar>

                <Toolbar>

                    <Button.Group toggle required $onChange={ active => console.log( active ) }>
                        <Button value='send'>
                            <Icon glyph='format_paint'/>
                        </Button>
                        <Button value='foo'>
                            Foo
                        </Button>
                        <Button value='bar'>
                            Bar
                        </Button>
                    </Button.Group>

                    <Toolbar.Separator/>

                    <Button.Group toggle multiple $onChange={ active => console.log( active )}>
                        <Button>
                            Baz
                        </Button>
                        <Button>
                            Bxz
                        </Button>
                    </Button.Group>

                    <Toolbar.Separator/>

                    <Button>
                        Button
                    </Button>

                    <Toolbar.Separator/>

                    <CheckBox label='Hello, World' $onChange={ checked => console.log( checked ) }/>

                    <Toolbar.Separator/>

                    <CheckBox.Switch label='Foo Bar' checked $onChange={ checked => console.log( checked ) }/>

                    <Toolbar.Separator/>

                    <RadioButton.Group direction='row' $onChange={ value => console.log( value ) }>
                        <RadioButton value={ 123 } label='Foo'/>
                        <RadioButton label='Bar' checked/>
                        <RadioButton label='Baz'/>
                        <RadioButton label='Bxy'/>
                    </RadioButton.Group>

                    <Toolbar.Separator/>

                    <DropDown multiple $onChange={ value => console.log( value ) }>
                        <DropDown.Option label='Foo'/>
                        <DropDown.Option label='Bar'/>
                        <DropDown.Option label='Baz'/>
                    </DropDown>

                </Toolbar>

                <Container>

                    <Menu.Context>
                        <Menu.Item label='Foo'/>
                        <Menu.Item label='Bar'/>
                        <Menu.Item label='Baz'>
                            <Menu.Item label='Hello'/>
                            <Menu.Item label='World'>
                                <Menu.Item label='...'/>
                            </Menu.Item>
                        </Menu.Item>
                    </Menu.Context>

                    <Tab.Group $onChange={ active => console.log( active ) }>
                        <Tab label='Lorem'>
                            Lorem ipsum dolor sit amet...
                        </Tab>
                        <Tab label='Ipsum' active>
                            Foo bar baz...
                        </Tab>
                        <Tab label='Dolor'>
                            Lorem ipsum dolor sit amet...
                        </Tab>
                        <Tab label='Sit'>
                            Foo bar baz...
                        </Tab>
                        <Tab label='Amet'>
                            Lorem ipsum dolor sit amet...
                        </Tab>
                    </Tab.Group>

                </Container>

                <Container>
                    <Form action='/foo'>

                        <Form.Field.Set label='Hello, World'>

                            <Label>Age</Label>
                            <Spacer width={ 12 }/>
                            <Form.Field name='age' type='number' placeholder='Age...'/>

                            <Spacer width='100%' height={ 12 }/>

                            <Label>Date of Birth</Label>
                            <Spacer width={ 12 }/>
                            <Form.Field name='birthday' type='date' placeholder='Birthday...'/>

                        </Form.Field.Set>

                        <Spacer width='100%' height={ 12 }/>

                        <Form.Field type='submit' value='Continue'/>

                    </Form>
                </Container>

            </App>
        )
    }

    ReactDOM.render(<Foo/>, document.body)

})()
