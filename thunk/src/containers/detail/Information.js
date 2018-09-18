import React from 'react'
import {Button} from 'react-native-elements'
import {View, StyleSheet, Image, Text, TouchableHighlight, SectionList} from 'react-native'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import {ALL_CATEGORY} from '../../constants/Category'
import ListBook from '../../components/listBook';


class Information extends React.Component {
    constructor(props) {
        super(props);  
    }

    _renderCategory = () => {
        var cate = this.props.result.categories.split(',')
        var textCategory = ''
        for(var i = 0; i < cate.length; i++) {
            textCategory += ALL_CATEGORY[parseInt(cate[i])]
            if(i !== cate.length - 1){
                textCategory += ', '
            }
        }
        return textCategory
    }

    _renderItem = ({item, index, section}) => {
        switch(section.index) {
            case 0:
                return (<Text style={styles.category} key={index}>{item}</Text>)
                break
            case 1: 
                return  (<Text style={styles.category} key={index} numberOfLines={3} ellipsizeMode='tail' >{item}</Text>)
                break
            case 2:
                if(index == 0) {
                    return (
                        <View  style={{flexDirection:'row', height: 25}}>
                            <Text style={[styles.category, {width: 85}]}>Nhà xuất bản:</Text>
                            <Text style={{marginLeft: 60, fontSize: 12, marginTop: 8}}>{item}</Text>
                        </View>
                    )
                }
                return (
                    <View  style={{flexDirection:'row', height: 25}}>
                            <Text style={[styles.category, {width: 85, marginTop: 5}]}>Ngày update:</Text>
                            <Text style={{marginLeft: 60, fontSize: 12, marginTop: 5}}>{item}</Text>
                    </View>
                )
            case 3: 
                    return (
                        <ListBook title={section.title} data={item}/>
                    )

            default: 
                return (<Text key={index}>{item}</Text>)
                break
        }
        
    }

    render() {
        const {result} = this.props
        return (
            <SectionList
            // renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
            renderItem={this._renderItem}
            renderSectionHeader={({section: {title, index}}) => (
                <View style={{marginTop: 12, flexDirection: 'column'}}>
                    {index > 0 ? (<View style={{width: '100%', height: 1, backgroundColor: '#e7e7e7'}}></View>) : null}
                    {index > 0 ? index < 3 ? <Text style={{marginLeft: 12, marginTop: 15}}>{title}</Text>: null : <Text style={{marginLeft: 12}}>{title}</Text>}
                </View>
            )}
            sections={[
              {title: 'Thể loại', data: [this._renderCategory()], index: 0},
              {title: 'Nội dung', data: [result.description], index: 1},
              {title: 'Thông tin khác', data: [result.publishing, result.updated_time], index: 2},
              {title: 'Bạn có thể thích', data: [result.book_reference], index: 3}
            ]}
            keyExtractor={(item, index) => item + index}
            />
        )
    }
}

const styles = StyleSheet.create({
    category: {
        marginTop: 8,
        marginLeft: 12,
        fontSize: 12,
        color: '#9b9b9b',
    }
})

function mapStateToProps(state) {
    return({result:  state.detail.information})
}

export default  withNavigation(connect(mapStateToProps, null)(Information))