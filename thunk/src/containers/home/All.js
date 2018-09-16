import React from 'react'
import { View, StyleSheet, ScrollView, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import CollectionBook from '../../components/collectionBook';
import Spinner from '../../components/base/Spinner'


class All extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.data.length > 0) {
        return (
            <View style={styles.container}>
                <CollectionBook data={this.props.data} type={2} navigation={this.props.navigation} />
            </View>
        )} else {
            return  <Spinner
            size='large'
            animating
            style={{marginTop: 20}} />
        }
    }
}

function mapStateToProps (state) {
    return {
      data: state.home.all,
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 13,
        color: "#9b9b9b",
        marginTop: 18,
        marginLeft: 10,
    }
})

export default connect(mapStateToProps, null)(All)