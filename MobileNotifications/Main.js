import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

export default class Main extends React.Component {
  state = { currentUser: null }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                Hi {currentUser && currentUser.email}!
                </Text>
                <Button title="Logout" onPress={() => {firebase.auth().signOut(); this.props.navigation.pop()}}/>
            </View>
            )
        }

        componentDidMount(){
            const {currentUser} = firebase.auth();
            this.setState({currentUser});
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})