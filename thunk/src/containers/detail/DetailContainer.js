import React from 'react'
import {Text, Button} from 'react-native-elements'
import {View} from 'react-native'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Detail!</Text>
            </View>
        )
    }
}

export default DetailContainer;