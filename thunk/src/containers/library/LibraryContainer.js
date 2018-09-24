import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {TabView, TabBar, PagerPan} from 'react-native-tab-view';
import { View, StyleSheet, Dimensions,Text,TouchableHighlight, Image} from 'react-native';
import Recent from './Recent'


export default class LibraryContainer extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'recent', title: 'Gần đây' },
            // { key: 'liked', title: 'Yêu thích' },
            // { key: 'download', title: 'Tải xuống' },
        ],
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'recent':
                return <Recent />
            case 'liked':
                return <Recent />
            // case 'download':
            //     return <Recent navigation={this.props.navigation}/>
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
        backgroundColor: '#E7E7E7'
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

