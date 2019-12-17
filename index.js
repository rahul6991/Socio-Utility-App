/**
 * @format
 */

import {AppRegistry} from 'react-native';
import createAppContainer from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName,()=>createAppContainer);
