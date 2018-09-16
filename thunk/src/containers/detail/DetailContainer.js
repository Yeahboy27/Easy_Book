import React from 'react'
import {Text, Button, Image} from 'react-native-elements'
import {View, StyleSheet} from 'react-native'
import * as action from '../../actions/detail'
import Spinner from '../../components/base/Spinner'


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
		if (nextProps.nowPlayingMovies && nextProps.popularMovies) {
			this.setState({ isLoading: false });
		}
	}


    render() {
        const {result} = this.props
        if(this.state.isLoading) {
             return  <Spinner
            size='large'
            animating
            style={{al: 20}} />
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image />
                    <View style={styles.information}>
                        <View style={styles.data}>
                            <View style={styles.core}>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}></Text>
                            </View>
                            <View style={styles.more}></View>
                        </View>
                        <View style={styles.action}></View>
                    </View>
                </View>
            </View>
        )
    }
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