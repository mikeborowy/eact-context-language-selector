import React, { Component } from 'react';
import { Context } from '../context/index';
import { translations } from '../languages';

class Button extends Component {

    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <Context.Language.Consumer>
                    {(value => translations(value).submit)}
                </Context.Language.Consumer>
            </button>
        )
    }
    render() {
        return (
            <Context.Colors.Consumer>
                {(color) => this.renderButton(color)}
            </Context.Colors.Consumer>
        );
    }
}

export default Button;