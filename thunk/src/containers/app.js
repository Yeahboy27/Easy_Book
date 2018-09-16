import { createMaterialTopTabNavigator,createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import MainContainer from './home/MainContainer'
import LibraryContainer from './library/LibraryContainer'
import DetailContainer from './detail/DetailContainer'
import ProfileContainer from './profile/ProfileContainer'
import CommunityContainer from './community/CommunityContainer'
import Search from './home/Search'
import React from "react";
import {Image, TouchableHighlight, StyleSheet} from 'react-native'

const StackHome = createStackNavigator({
    // Main: {
    //     screen: MainContainer,
        // navigationOptions = ({navigation}) => {
        //     return {
        //         title: 'Trang chủ',
        //         headerRight: (
        //             <TouchableHighlight onPress={navigation.getParam('navigateSearch')}>
        //                 <Image
        //                 style={{width: 20, height: 20, marginRight: 12}}
        //                 source={require('../images/main_search.png')}
        //                 />
        //         </TouchableHighlight>
        //       ),}
        // }
    // },
    Main: MainContainer,
    Detail: DetailContainer,
    Search: Search,
}, {
    initialRouteName: 'Main',
    navigationOptions: {
        headerStyle: {
          backgroundColor: "#f7f7f7",
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: "normal",
          color: "#000000",
          zIndex: 1,
          fontSize: 18,
          lineHeight: 23,
        },
        headerTintColor: "#fff"
      }
})

const TabContainer = createBottomTabNavigator (
    {
        Main: {
            screen: StackHome,
            navigationOptions: {
                tabBarLabel: 'Trang chủ',
                tabBarIcon:({ focused }) =>  (
                    focused
                        ? <Image source={require('../images/home_active.png')} size={25}  />
                        : <Image source={require('../images/home_inactive.png')} size={25}  />
                ),
                
            }
        }  ,
        Library: {
            screen: LibraryContainer,
            navigationOptions: {
                tabBarLabel: 'Thư viện',
                tabBarIcon:({ focused }) =>  (
                    focused
                        ? <Image source={require('../images/library_active.png')} size={25}  />
                        : <Image source={require('../images/library_inactive.png')} size={25}  />
                )
            }
        },
        Community: {
            screen: CommunityContainer,
            navigationOptions: {
                tabBarLabel: 'Cộng đồng',
                tabBarIcon:({ focused }) =>  (
                    focused
                        ? <Image source={require('../images/community_active.png')} size={25}  />
                        : <Image source={require('../images/community_inactive.png')} size={25}  />
                )
            }
        },
        Profile: {
            screen: ProfileContainer,
            navigationOptions: {
                tabBarLabel: 'Cá nhân',
                tabBarIcon:({ focused }) =>  (
                    focused
                        ? <Image source={require('../images/profile_active.png')} size={25}  />
                        : <Image source={require('../images/profile_inactive.png')} size={25}  />
                )
            }
        },
    }
)

const styles = StyleSheet.create({
    buttonSearch: {
        width: 25,
        height: 25,
    },
})

const Root = createStackNavigator ({
    Home:  TabContainer,
}, {
    headerMode: 'screen',
    navigationOptions: {
        header: null
    }
})

export default Root