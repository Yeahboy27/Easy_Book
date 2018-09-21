import React from 'react'
import { View, StyleSheet} from 'react-native';
import ListLibrary from '../../components/Library/ListLibrary'
import { AsyncStorage } from "react-native"
import { withNavigation } from 'react-navigation';
import Spinner from '../../components/base/Spinner'



export default class Recent extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {isLoading: true}
    }

    componentDidMount() {
        AsyncStorage.getItem('Book_Recent', (err, result) => {
            if(err) {
                console.log(err)
                alert('Có lỗi xảy ra')
                return 
            }
            var input = JSON.parse(result)
            var output = [], item ;
            for (var key in input) {
                item = {}
                item = input[key]
                item.id = key
                output.push(item)
            }
            this.setState({isLoading: false, result: output})
        })
    }


    
    render() {
        if(this.state.isLoading) {
            return  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner
                size='large'
                animating
                style={{al: 20}} />
            </View>
        }
        return (
            <View style={styles.container}>
                <ListLibrary data={this.state.result}/>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
