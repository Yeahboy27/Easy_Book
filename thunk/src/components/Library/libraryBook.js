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
        marginTop: 12,
        marginRight: 8,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 130,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#BDBDBD',
        shadowOffset: {
        width: 3,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    image: {
        marginTop: 5 ,
        marginLeft: 8,
        width: 80,
        height: 120,
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
        marginRight: 25,
        height: '65%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    timeView: {
        marginLeft: 0,
        marginBottom: 5,
        height: '35%',
        justifyContent: 'flex-end'
    },
    title: {
        marginBottom: 3,
        marginLeft: 0,
        color: '#141626',
        fontSize: 13,
    },
    chapter: {
        marginBottom: 8,
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

