import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {Text} from 'react-native-elements'
import {View} from 'react-native'
import { StackNavigator, TabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class LibraryContainer extends React.Component {
    static navigationOptions = {
        title:  'Thư viện',
        header:   null,
        tabBarIcon: ({tintColor}) => {
            <Icon name='md-home' size={25} color ={tintColor} />
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Library!</Text>
            </View>
        )
    }
}

export default LibraryContainer