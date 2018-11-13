import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// https://www.gravatar.com/avatar/7b78eca57cdf50867f9ac392c919311d?d=mm&s=156

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1, alignItems: 'stretch', justifyContent: 'flex-start'
      }}>
        <View style={{ height: 50, backgroundColor: 'skyblue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
          <View style={{ flex: 3, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: 'white' }}>Home</Text>
          </View>
        </View>
        <View style={{ height: 100, flexDirection: 'row' }} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://www.gravatar.com/avatar/d7b22765f2488acc1f5839b537c6aa62?d=mm', cache: 'default' }}
              style={{ width: 50, height: 50, borderRadius: 100 }} />
          </View>
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Ujang Komar</Text>
            <Text>Project Manager</Text>
          </View>
        </View>
        <View style={{ height: 100 }}>
          <TouchableNativeFeedback>
            <View style={{ height: 50, width: 150, backgroundColor: 'skyblue' }}>
              <View style={{ flex: 1, flexDirection: "row-reverse", alignItems: 'center' }}>
                <Text style={{ flex: 1, color: '#ffffff' }}>5</Text>
                <Text style={{ flex: 3, color: "#ffffff", paddingLeft: 15 }} >Active Project</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'  }}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('ProjectsList')}>
              <View style={{
                height: 150,
                width: 150,
                backgroundColor: 'skyblue',
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <Icon name='suitcase' size={70} color="#ffffff" />
                  <Text style={{color:'#ffffff', fontWeight:'bold'}}>Project</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'  }}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Dashboard')}>
              <View style={{
                height: 150,
                width: 150,
                backgroundColor: 'skyblue',
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <Icon name='line-chart' size={70} color="#ffffff" />
                  <Text style={{color:'#ffffff', fontWeight:'bold'}}>Dashboard</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'  }}>
            <TouchableNativeFeedback>
              <View style={{
                height: 150,
                width: 150,
                backgroundColor: 'skyblue',
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <Icon name='user-circle-o' size={70} color="#ffffff" />
                  <Text style={{color:'#ffffff', fontWeight:'bold'}}>User</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'  }}>
            <TouchableNativeFeedback>
              <View style={{
                height: 150,
                width: 150,
                backgroundColor: 'skyblue',
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <Icon name='users' size={70} color="#ffffff" />
                  <Text style={{color:'#ffffff', fontWeight:'bold'}}>Customers</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}