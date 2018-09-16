import React from 'react'
import { View, StyleSheet,TextInput,  Platform, NativeModules, TouchableOpacity, Text} from 'react-native';
import { SearchBar } from 'react-native-elements'
import * as action from '../../actions/home'
import CollectionBook from '../../components/collectionBook';
import { connect } from 'react-redux';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            textSearch: '',
            isSearching: false,
        }
    }

    handleQueryChange = query => {
        if(query !== '') {
            this.props.searchWithTitle(query)
            this.setState({isSearching: true})
        }
        this.setState(state => ({ ...state, textSearch: query || "" }));
    }

    handleSearchCancel = () => {
        this.setState(state => ({ ...state, textSearch:""}))
        this.props.navigation.goBack();}
    
    handleSearchClear = () => {
        this.setState({isSearching: false})
        this.handleQueryChange(""); 
    }


    static navigationOptions = ({ navigation }) => ({
        title: "",
        header: (
            <View style={styles.header}>
                
            </View>
        )
    })

    render() {
        return (
            <View style={{flex: 1, backgroundColor:'#FFFFFF'}}>
                <SearchBar
                    lightTheme
                    platform="ios"
                    cancelButtonTitle="Cancel"
                    placeholder='Search'
                    autoFocus={true}
                    autoCorrect={false}
                    onChangeText={this.handleQueryChange}
                    onCancel={this.handleSearchCancel}
                    onClear={this.handleSearchClear}
                    value={this.state.textSearch}
                    />
                    {this.state.isSearching ? <CollectionBook data={this.props.result} type={2}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: '#F4F3F4'
    },
    textInput: {
        color: '#FFFFFF',
        marginLeft: 10,
        backgroundColor: '#8E8E93',
        borderRadius: 10,
        opacity: 0.12,      
        height: 36,
        width: 200,
        marginRight: 18,
    }, 
   textCancel: {
       color: "#007AFF",
       marginRight: 18, 
   } 
});

function mapDispatchToProps(dispatch) {
    return({
        searchWithTitle: (title) => {dispatch(action.getSearch(title))}
    })
}

function mapStateToProps(state) {
    return({result:  state.home.search_result})
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)