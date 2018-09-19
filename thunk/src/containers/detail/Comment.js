import React from 'react'
import {View, StyleSheet, Image, Text, TouchableHighlight, FlatList} from 'react-native'
import { connect } from 'react-redux'
import Comment from '../../components/Comment'
class Comments extends React.Component {
    constructor(props) {
        super(props)
    }

    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => (
        <Comment
          data={item}
        />
    );

    render() {
        const {result} = this.props
        console.log(result)
        return (
            <View>
                <FlatList 
                    style={{marginRight: 8}}
                    data={this.props.result}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent = {() => (<View style={{height: 1, backgroundColor: '#e7e7e7'}}></View>)}
                />
            </View>
        )
    }
}
function mapStateToProps(state) {
    return({result:  state.detail.information.comments})
}

export default connect(mapStateToProps, null)(Comments)