import React from 'react'
import { View, StyleSheet, ScrollView, Text} from 'react-native';
import ListBook from '../../components/Flatlist_Vertical/listBook';
import CollectionBook from '../../components/Collection/collectionBook';
import HeaderHighlight from '../../components/Collection/header'
import { connect } from 'react-redux'
import Spinner from '../../components/base/Spinner'

const SecondRoute = () => (
    <View style={{width: '100%', height: 150, backgroundColor: '#321562'}} />
);

class Salient extends React.PureComponent {
    constructor(props) {
        super(props);
    } 

    componentWillReceiveProps(nextProps) {
        if (nextProps.home !== null) {
            this.setState({ salient: nextProps.home.salient});
        }        
    }

    render() {
        const {salient} = this.props.home
        if(salient.length > 0) {
            let listSection = salient.map((r, i) => {
                switch(r.type){
                    case 0:
                        return <HeaderHighlight key={i} {...this.props} />
                        break
                    case 2:
                        return (
                            <ListBook  key={i} title={r.title} data={r.data} navigation={this.props.navigation} />
                        )
                        break
                    case 3:
                        return (
                            <CollectionBook key={i}  title={r.title} data={r.data} navigation={this.props.navigation} />
                        )
                        break
                }          
            })
            return (
                <View style={{flex: 1}}>  
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {listSection}
                    </ScrollView>
                </View>)
        } else {
            return  <Spinner
            size='large'
            animating
            style={{marginTop: 20}} />
        }
    }
}   



function mapStateToProps (state) {
    return {
      home: state.home,
    }
} 

export default connect(mapStateToProps, null)(Salient)
