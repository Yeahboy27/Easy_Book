import React from 'react'
import {View, StyleSheet, Image, Text, TouchableHighlight, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data} = this.props
        return (
            <View style={styles.container}> 
                <View style={{width: 40, marginRight: 15}}>
                    <Image style={styles.avatar} source={{uri: data.creator.avatar}}/>
                </View>
                <View style={styles.information}> 
                    <Text style={{}} numberOfLines={3} ellipsizeMode='tail' textAlign ={'right'}>{data.content}</Text>
                    <View style={{flexDirection: 'row', marginTop: 3}}> 
                        <Text style={styles.creator}>{data.creator.username} -</Text>
                        <Text style={[styles.creator, {marginLeft: 12}]}>{data.created_at}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 8,
        marginBottom: 15,
    }, 
    avatar: {
        borderRadius:20,
        width: 40,
        height: 40,
    }, 
    information: {
        flex: 1,
        alignSelf: 'flex-end',
    }, 
    creator: {
        fontSize: 12,
        color: '#9b9b9b',
    }
})