import React from 'react'
import { View, StyleSheet, Dimensions,Text,TouchableHighlight, Image} from 'react-native';
import { TabView, TabBar, PagerPan} from 'react-native-tab-view';
import Salient from './Salient'
import Update from './Update'
import All from './All'
import { connect } from 'react-redux'

class _MainContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Trang chủ',
            headerRight: (
                <TouchableHighlight style={{width: 40, height: 30, marginRight: 12}} onPress={navigation.getParam('navigateSearch')}>
                    <Image
                    style={{width: 20, height: 20, marginRight: 0}}
                    source={require('../../images/main_search.png')}
                    />
                </TouchableHighlight>
          ),
        }
    }
    
    state = {
        index: 0,
        routes: [
            { key: 'highlight', title: 'Trang chủ' },
            { key: 'update', title: 'Cập nhật' },
            { key: 'all', title: 'Tất cả' },
        ],
    };

    componentDidMount() {
        this.props.navigation.setParams({ navigateSearch: this._navigateSearch });
    }

    _navigateSearch = () => {
        this.props.navigation.push('Search')
    }

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'highlight':
                return <Salient />;
            case 'update':
                return <Update />
            case 'all':
                return <All />
            default:
                return null;
        }
      };

    _renderLabel(props) {
        let index = 0;
        return ({ route }) => {
          const focused = index === props.navigationState.index;
          index += 1;
          return (
            <View>
              <Text
                style={[
                  focused ? styles.activeLabelStyle : styles.inactiveLabelStyle,
                ]}>
                {route.title}
              </Text>
            </View>
          );
        }
    }

    _renderTabbar = (props) => (
        <TabBar {...props}
            style={styles.tabStyle}
            indicatorStyle={styles.indicatorStyle}
            labelStyle={styles.labelTabStyle}
            renderLabel={this._renderLabel(props)}
        />
    )

    _renderPager = (props) => (<PagerPan {...props}
        swipeEnabled={false}
        />)   

    render() {
        return (
            <View style={styles.container} >
                <TabView style={styles.tabView}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width, height: 200 }}
                    renderTabBar={this._renderTabbar}
                    renderPager={this._renderPager}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    tabView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    tabStyle: {
        backgroundColor: '#f7f7f7',
    },
    labelTabStyle: {
        color: '#000000',
        fontSize: 13,
    },
    indicatorStyle: {
        backgroundColor: '#007aff',
    },
    activeLabelStyle:{
        color: '#007AFF'
    },
    inactiveLabelStyle:{
        color: '#9b9b9b'
    },
});

function mapStateToProps (state) {
    return {
      header: state.header,
    }
} 

const MainContainer = connect(mapStateToProps)(_MainContainer)
export default MainContainer