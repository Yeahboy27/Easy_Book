import React from 'react'
import {Text, Button, Image} from 'react-native-elements'
import {View, StyleSheet} from 'react-native'
import * as action from '../../actions/detail'
import Spinner from '../../components/base/Spinner'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'



class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			isLoading: true,
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
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image source={{uri: result.link_thumbnail}}/>
                    <View style={styles.information}>
                        <View style={styles.data}>
                            <View style={styles.core}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{result.title}</Text>
                            </View>
                            <View style={styles.more}></View>
                        </View>
                        <View style={styles.action}></View>
                    </View>
                </View>
            </View>
        )
    }}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginTop:15,
        marginLeft: 15, 
        marginRight: 8, 
        height: 150,
    },
    image: {
        width: 100,
        height: 150,
        marginTop: 0,
        marginLeft: 0,
    },
    information: {
        marginTop: 0,
        marginLeft: 15,
        marginRight: 0,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    action: {
        justifyContent: 'space-between'
    },
    data: {
        justifyContent: 'space-between'
    },
    core: {
        
    },
    more: {

    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
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