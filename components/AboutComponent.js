import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PARTNERS } from './shared/campsites';

class About extends Component {
    static navigationOptions = {
        title: 'About'
    }

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

        render(){

            const renderPartner = ({item}) => {
                return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{ source: require('./images/bootstrap-logo.png'
                        )}}
                    />
                );
            };

            return (
                <Card wrapperStyle={{margin: 20}} Title='Community Partners'>
                             <FlatList
                    data={this.state.partners}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderDirectoryItem}
                />
            </Card>
           
            );

            return (
                <ScrollView>
                   <Mission />
                </ScrollView>
            );
        }
}


function Mission(props) {
    return(
        <Card wrapperStyle={{margin: 20}} Title='Contact'>
        <Text style={{margin: 10}}>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally 
        verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
    </Card>
    );

}

export default About;