import React from 'react'
import { View, StyleSheet, Dimensions,Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SecondRoute = () => (
    <View style={[{flex: 1}, { backgroundColor: '#985622' }]} />
);

export default class HeaderHighlight extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
        };
    }

    render() {      
        let swiper = this.props.home.salient[0].data.map((r, i) => {
                return (<View key={i} style={styles.cover}>
                            <Image style={styles.image} source={{uri: r.link_thumbnail}}/>
                        </View>)
            })
            
        return (
                <View style={styles.container}>
                    <Swiper>
                        {swiper}
                    </Swiper>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        height: 150, 
        width: '100%',
    },
    cover: {
        flex: 1,
        width: '100%',
        height: 150,
      },
      image: {
        flex: 1,
        width: '100%',
        height: 150,
      }
    
})