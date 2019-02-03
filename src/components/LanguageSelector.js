import React, { Component, Fragment } from 'react';
import { Context } from '../context';
import { translations } from '../languages';
import { languageConst } from '../constants';

class LanguageSelector extends Component {

    static contextType = Context.Language;

    render() {
        return (
            <Fragment>
                <div>
                    {translations(this.context).selectLanguage}: 
                    <i className="flag us" onClick={() => this.props.onLanguageChange(languageConst.US)} />
                    <i className="flag pl" onClick={() => this.props.onLanguageChange(languageConst.PL)} />
                </div> 
            </Fragment>
        );
    }
}

export default LanguageSelector;