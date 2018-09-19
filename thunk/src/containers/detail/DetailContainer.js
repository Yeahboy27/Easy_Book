import React from 'react'
import {Button} from 'react-native-elements'
import {View, StyleSheet, Image, Text, TouchableHighlight, ScrollView, Dimensions} from 'react-native'
import { TabView, PagerPan, TabBar} from 'react-native-tab-view';
import * as action from '../../actions/detail'
import Spinner from '../../components/base/Spinner'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import Information from './Information'
import Comments from './Comment'



class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            index: 0,
            routes: [
                { key: 'information', title: 'Thông tin' },
                { key: 'comment', title: 'Bình luận' },
            ],
		};        
    }

    static navigationOptions = {
        headerTintColor: '#007AFF',
    };

    componentDidMount() {
        this.props.get_Detail('1')
    }

    componentWillReceiveProps(nextProps) {
		if (nextProps.result) {
			this.setState({ isLoading: false });
		}
	}

    // Render Header
    _renderStatus = () => {
        switch (this.props.result.status){
            case 0: 
                return <Text style={styles.author}>Hoàn thành</Text>
                break;
            case 1:
                return <Text style={styles.author}>Còn tiếp</Text>
                break;
            default: 
                return <Text> </Text>
            }
    }

     // Render Tabview
    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'information':
                return <Information />
            case 'comment':
                return <Comments />
            default:
                return null;
        }
      };
     
    _renderPager = (props) => (<PagerPan {...props}
        swipeEnabled={false}
        />) 
        
    _renderLabel(props) {
            let index = 0;
            return ({ route }) => {
              const focused = index === props.navigationState.index;
              index += 1;
              return (
                <View>
                  <Text
                    style={[
                      focused ? {color: '#007AFF'}: {color: '#9b9b9b'},
                    ]}>
                    {route.title}
                  </Text>
                </View>
              );
            }
        }
        
    _renderTabbar = (props) => (
        <TabBar {...props}
        style={styles.tabView}
        indicatorStyle={styles.indicatorStyle}
        labelStyle={styles.labelTabStyle}
        renderLabel={this._renderLabel(props)}
        />
    )

    render() {
        if(this.state.isLoading) {
             return  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner
                size='large'
                animating
                style={{al: 20}} />
            </View>
        } else {
        const {result} = this.props
        console.log(result)
        return (
            <View style={styles.container}>
                <View style={styles.line}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Image  style={styles.image} source={{ uri: result.link_thumbnail }}/>    
                        <View style={styles.information}>
                            <View style={styles.data}>
                                <View style={styles.core}>
                                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{result.title}</Text>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.author}>{result.authors}</Text>
                                </View>
                                <View style={styles.more}>
                                    {this._renderStatus()}
                                    <Text style={styles.author}>{result.total_chap} chương</Text>
                                    <Text style={styles.author}>{result.numbe_of_like} lượt thích</Text>
                                </View>
                            </View>
                            <View style={styles.action}>
                                <TouchableHighlight style={styles.buttonLike}>
                                    <Image style={{flex: 1, width: 30, height: 30}} source={require('../../images/detail_unlike.png')} />
                                </TouchableHighlight>
                                <Button title={"ĐỌC"} style={styles.buttonRead}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:12, height: 1, width: "100%", backgroundColor: '#e7e7e7' }}></View>
                    <TabView style={styles.tabView}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width, height: 200 }}
                        renderPager={this._renderPager}
                        renderTabBar={this._renderTabbar}
                    />
                </ScrollView>
            </View>
        )
    }}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#9b9b9b"
    },
    tabView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        marginTop:15,
        marginLeft: 15, 
        marginRight: 0, 
        height: 150,
    },
    image: {
        width: 100,
        height: 150,
    },
    information: {
        flex: 1,
        marginTop: 0,
        marginLeft: 8,
        marginRight: 0,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
    },
    action: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 0,
        width: "30%",
        alignItems: 'flex-end'
    },
    buttonLike: {
        width: 30,
        height: 30,
        marginRight: 12,
    },
    buttonRead: {
        width: 60,
        marginRight: 12,
        borderRadius: 4,
        backgroundColor: '#007AFF',
        fontSize: 14,
    },
    data: {
        justifyContent: 'space-between',
        width: "70%",
    },
    title: {
        fontSize: 14,

    },
    author: {
        fontSize: 12,
        color: '#9b9b9b',
    },
    labelTabStyle: {
        color: '#000000',
        fontSize: 13,
    },
    indicatorStyle: {
        backgroundColor: '#007aff',
    },
})
function mapStateToProps(state) {
    return({result:  state.detail.information})
}

function mapDispatchToProps(dispatch) {
    return({
        get_Detail: (id) => {dispatch(action.getDetail(id))}
    })
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DetailContainer))

