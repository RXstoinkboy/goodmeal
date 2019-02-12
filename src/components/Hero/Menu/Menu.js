import React, { Component } from 'react';
import {MenuWrapper, Title, Section, Dish, Description, Price, MenuGrid, DishContainer} from './MenuStyle';
import {menu} from '../../../menu';

class Menu extends Component {
    render() {
        return (
            <MenuWrapper>
                {menu.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Section>{item.section}</Section>
                            <MenuGrid>
                                {
                                    item.items.map((dish, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <DishContainer>
                                                    <Dish>{dish.name}</Dish>
                                                    <Description>{dish.description}</Description>
                                                    <Price>{dish.price}</Price>
                                                </DishContainer>
                                            </React.Fragment>

                                        )
                                    })
                                }
                                
                            </MenuGrid>
                        </React.Fragment>
                    )
                })}
            </MenuWrapper>
        );
    }
}

export default Menu;