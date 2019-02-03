const us = {
    selectLanguage: 'Select language',
    name: 'Name',
    submit: 'Submit'
}

const pl = {
    selectLanguage: 'Wynierz język',
    name: 'Nazwa',
    submit: 'Wyślij'
}

export const langauges = {
    us,
    pl
}

export const translations = (language) => ({
    selectLanguage: langauges[language.toLocaleLowerCase()].selectLanguage,
    name: langauges[language.toLocaleLowerCase()].name,
    submit: langauges[language.toLocaleLowerCase()].submit
})

