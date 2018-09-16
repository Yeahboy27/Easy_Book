import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {Text} from 'react-native-elements'
import {View} from 'react-native'
import { StackNavigator, TabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class CommunityContainer extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Community!</Text>
            </View>
        )
    }
}

export default CommunityContainer