import React, {PureComponent} from 'react';
import BookCollectionCell from './bookCollectionCell'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { NativeModules } from 'react-native';
import { withNavigation } from 'react-navigation';


const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

var columns = 3
if(deviceType=='phone'){
    columns = 3
} else {
    columns = 5
}

class CollectionBook extends PureComponent {
    constructor(props) {
        super(props)
    }

    _renderHeader(number_of_book) {
        if(this.props.data == null && this.props.type == 2){
            return (<View>
                <Text style={{fontSize: 13, color: "#9b9b9b", marginBottom: 10}}>0 sách </Text>
            </View>)
        }
        if(this.props.type == 1) {
            return (<View>
                <Text style={{fontSize: 13, color: "#9b9b9b", marginBottom: 10}}>{number_of_book} sách mới được cập nhật</Text>
            </View>)
        } else if (this.props.type == 2) {
            return (<View>
                <Text style={{fontSize: 13, color: "#9b9b9b", marginBottom: 10}}>{number_of_book} sách </Text>
            </View>)
        } 
        else {
            return (
            <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <TouchableOpacity style={styles.getAll}><Text style={styles.labelGetAll}>Xem Tất Cả</Text></TouchableOpacity>
                </View>)
        }
    }

    // _keyExtractor = (item, index) => item.id.toString();
    _keyExtractor = (item, index) => index;

    _renderItem = ({item, index}) => {
        if (item.empty) {
            return <View style={[styles.viewItem, styles.itemEmpty, index%3 == 2 ? {marginRight: 0} : {marginRight: 15}]} />;
        } else {
            return (
                <View style={[styles.viewItem,index%3 == 2 ? {marginRight: 0} : {marginRight: 15}]}>
                <BookCollectionCell data={item} index={index} navigation={this.props.navigation}/>
                </View>
            )
        }
    };

    createRows(data) {
        if(this.props.type) {
            if(data){
                const rows = Math.floor(data.length / columns); // [A]
                let lastRowElements = data.length - rows * columns; // [B]
                while (lastRowElements !== columns) { // [C]
                data.push({ // [D]
                    id: `empty-${lastRowElements}`,
                    name: `empty-${lastRowElements}`,
                    empty: true
                });
                lastRowElements += 1; // [E]
                }
            }
            return data; // [F]
        } else {
            return data.slice(0, 2 * columns);
        }
    }  

    showEmptyListView = () => {
        return (<View style={styles.flatList}></View>)
    }

    render() {
        const number_of_book = this.props.data.length
        return (
            <View style={styles.container}>
                <FlatList 
                        style={styles.flatList}
                        data={this.createRows(this.props.data)}
                        numColumns={columns}
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={this.showEmptyListView}
                        ListHeaderComponent={this._renderHeader(number_of_book)}
                        />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        marginTop: 12,
        marginRight: 10,
        marginLeft: 10,
    },
    viewItem: {
        flexDirection: 'row',
        flexGrow: 1,
        flexBasis: 0,
        aspectRatio: 0.45,
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        height: 18,
    },
    title: {
        fontSize: 13,
    },
    getAll: {
        marginRight: 0,
    },
    labelGetAll: {
        color: '#007aff',
        fontSize: 12,
    }
})

export default withNavigation(CollectionBook)