
import { connect } from 'react-redux'

import Settings from './Settings'

import {changeNavInto} from '../rstore/settingReducor'




const SettingsContainer = connect(null, {changeNavInto})(Settings)


export default SettingsContainer


