import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { withNavigation } from 'react-navigation';


export default class LibraryBook extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props
        console.log(data)
        return(
            <View style = {styles.container} >
                <Image style ={styles.image} source={{ uri: data.link_thumbnail}}/>
                <View style = {styles.information}>
                    <View style={styles.detailInfo}>
                        <Text style={styles.title}>{data.title} </Text>
                        <Text style={styles.chapter}>{data.authors}</Text>
                    </View>
                    <View style={styles.timeView}>
                        <Text style={styles.time}>{data.time}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginRight: 0,
        height: 120,
    },
    image: {
        marginTop: 0,
        marginLeft: 0,
        width: 80,
        height: 120,
        borderRadius: 4,
    },
    information: {
        flex: 1,
        marginLeft: 5,
        marginTop: 0,
        marginRight: 0,
        height: 120,
        flexDirection: 'column',
    },
    detailInfo: {
        marginLeft: 0,
        marginBottom: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    timeView: {
        marginLeft: 0,
        marginBottom: 0,
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        marginBottom: 0,
        marginLeft: 0,
        color: '#141626',
        fontSize: 15,
    },
    chapter: {
        marginBottom: 5,
        marginLeft: 0,
        color: '#9b9b9b',
        fontSize: 13,
    },
    time: {
        marginBottom: 10,
        marginLeft: 0,
        color: '#9b9b9b',
        fontSize: 13,
    },
})

