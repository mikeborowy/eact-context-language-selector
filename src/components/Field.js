import React, { Component } from 'react';
import { Context } from '../context';
import { translations } from '../languages';

class Field extends Component {

    static contextType = Context.Language;

    render() {
        return (
            <div className="ui field">
                <label>
                    {translations(this.context).name}
                </label>
                <input />
            </div>
        );
    }
}

export default Field;