import React from 'react'
import { View, StyleSheet, ScrollView, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import CollectionBook from '../../components/Collection/collectionBook';

class Update extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <CollectionBook data={this.props.data} type={1} navigation={this.props.navigation} />
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
      data: state.home.update,
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

export default connect(mapStateToProps, null)(Update)