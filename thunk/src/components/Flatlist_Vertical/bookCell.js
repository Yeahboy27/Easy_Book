import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class BookCell extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{width: 90, height: 140}} onPress={() => this.props.navigation.push('Detail', {
                    id: data.id
                })}>
                    <Image  style={styles.image} source={{uri: data.link_thumbnail}}/>
                </TouchableOpacity>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{data.title}</Text>
                <Text style = {styles.author} numberOfLines={1} ellipsizeMode='tail'>
                    {data.authors}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 90,
        height: 190,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image: {
        width: 90,
        height: 140,
        borderRadius: 4,
    },
    title: {
        marginTop: 0,
        marginLeft: 0,
        color: '#0a0c11',
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Arial'
    },
    author: {
        marginTop: 2,
        marginLeft: 0,
        height: 15,
        fontSize: 12,
        color: '#9b9b9b',
        textAlign: 'left',
    },
})

export default BookCell;