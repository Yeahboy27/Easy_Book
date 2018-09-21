import React, {PureComponent} from 'react';
import LibraryBook from './libraryBook'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';

export default class ListLibrary extends PureComponent {
    constructor(props) {
        super(props)
    }

    _keyExtractor = (item, index) => index.toString();
    _renderItem = ({item}) => (
        <LibraryBook data={item} navigation={this.props.navigation}/>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.data}
                    ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                    style ={styles.flatList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        height: 18,
    },
    flatList: {
        marginTop: 12,
        marginLeft: 10,
        marginRight: 0,
        marginBottom: 0,
    },
    title: {
        marginLeft: 10,
        fontSize: 13,
    },
    getAll: {
        marginRight: 8,
    },
    labelGetAll: {
        color: '#007aff',
        fontSize: 12,
    }
})
