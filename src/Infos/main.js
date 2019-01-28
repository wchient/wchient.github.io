import React from 'react';
import {resume} from './resume'

import {Header, Menu, Image, Sticky, Grid, Divider} from 'semantic-ui-react'
import {menuItems} from './header'
import Socials from './socials'
import PersonalIcon from './PersonalIcon.jpg'

export default class Main extends React.Component {
    state = { activeItem: 'summary' }

    handleItemClick = (e, { name }) => 
        this.setState({ activeItem: name }
    )
    handleContextRef = contextRef => this.setState({ contextRef })

    render() {
        const {activeItem, contextRef} = this.state;
        return (
            <div ref={this.handleContextRef}>
                <Grid  verticalAlign='top' divided>
                    <Grid.Column className="navigation_bar" width={3}>
                        <Sticky context={contextRef} offset={10}>
                            <Header as='h2' icon textAlign='center'>
                                <Image src={PersonalIcon} circular />
                                <Header.Content>Chien-Ting Weng</Header.Content>
                            </Header>
                            <Menu vertical secondary>
                                {menuItems.map(info => (
                                    <Menu.Item
                                        name={info.name}
                                        onClick={this.handleItemClick}
                                        active={activeItem===info.active}
                                    >
                                        {info.element}
                                    </Menu.Item>
                                ))}
                            </Menu>
                            <Socials/>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        Hello!
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}