

const SET_NAVBAR = 'SET_NAVBAR'


let settingsForN = {
   showNavBar : true
}

const SettingsReducer = (settings = settingsForN, action) => {
 
    switch (action.type) {
        case SET_NAVBAR:
            return {
                ...settings,
                showNavBar : action.set
            }
        default :
        return settings
    }
}
export const changeNavInto = (set) => ({type : SET_NAVBAR , set})
export default SettingsReducer



