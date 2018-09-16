import React, {PureComponent} from 'react';
import HomeBookComponent from './bookCell'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class ListBook extends PureComponent {
    constructor(props) {
        super(props)
    }

    _keyExtractor = (item, index) => item.id.toString();
    _renderItem = ({item}) => (
        <HomeBookComponent id={item.id} title={item.title} url={item.link_thumbnail} author={item.authors}/>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <TouchableOpacity style={styles.getAll}><Text style={styles.labelGetAll}>Xem Tất Cả</Text></TouchableOpacity>
                </View>
                <FlatList data={this.props.data}
                    ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                    horizontal = {true}
                    style ={styles.flatList}
                    showsHorizontalScrollIndicator={false}
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

export default ListBook