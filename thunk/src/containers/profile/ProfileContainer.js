import React from 'react'
import {Text, Button} from 'react-native-elements'
import {View} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Cá nhân',
        header: null,
        tabBarIcon: ({tintColor}) => {
            <Icon name='md-home' size={25} color ={tintColor} />
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Detail!</Text>
            </View>
        )
    }
}

export default ProfileContainer;