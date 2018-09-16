import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class BookCollectionCell extends PureComponent {
    constructor(props) {
        super(props);
    }
    _renderData() {
        if(this.props.data.authors !== null) {
            return (<Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'>{this.props.data.authors}</Text>)
        } else {
            return (<Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'>{this.props.data.update_time}</Text>)
        }
    }

    render() {
        var data = this.props.data
        return (
            <View style={[styles.container]}>
                <TouchableOpacity style={styles.viewImage} onPress={() => this.props.navigation.push('Detail')}>
                    <Image  style={styles.image} source={{ uri: data.link_thumbnail }}/>    
                </TouchableOpacity>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{data.title}</Text>
                {this._renderData()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        minHeight: 150,
    },
    viewImage: {
        marginTop: 0,
        marginLeft: 0,
        width: '100%',
        height: '72%',
        shadowOpacity: 0.8,
        shadowColor: '#ddd',
        shadowRadius: 0,
        shadowOffset: {width: 0, height: 1},
        backgroundColor: '#FFFFFF',
        elevation: 5,
    },
    image: {
        borderRadius: 3,
        width: '100%',
        height: '100%',
    },
    title: {
        marginTop: 5,
        marginLeft: 0,
        color: '#0a0c11',
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Arial'
    },
    author: {
        marginTop: 2,
        marginLeft: 0,
        fontSize: 12,
        color: '#9b9b9b',
        textAlign: 'left',
    },
})

export default BookCollectionCell;