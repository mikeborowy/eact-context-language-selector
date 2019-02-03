import React, { Component } from 'react';
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { languageConst, colorsConst } from '../constants';
import { Context } from '../context';

class App extends Component {
    state ={ 
        language: languageConst.US,
        color: colorsConst.BLUE
    }

    static contextType = Context.Language;

    onLanguageChange = (language) => {
        const color = language === languageConst.US ? colorsConst.BLUE : colorsConst.RED;
        this.setState({ language, color });
    }

    render() {
        return (
            <div className="ui container">
               <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <Context.Colors.Provider value={this.state.color}>
                    <Context.Language.Provider value={this.state.language}>
                        <UserCreate />
                    </Context.Language.Provider>
                </Context.Colors.Provider>
            </div>
        );
    }
}

export default App;