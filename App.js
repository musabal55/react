
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


class LogoTitle extends React.Component {
  render () {
    return (
      <Image
      source={require('./src/Images/bbbLogo.jpg')}
      style={{ width: 550, height: 100, alignItems: 'stretch' }}
      />
    );
  }
}



class Anasayfa extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
      onPress={() => alert('başlıktaki buton tıklandı!')}
      title="Bilgi"
      color="gray"
      />
    )
    
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "gray" }}>
        <Text>Anasayfadasınız</Text>
        <Button
          title="Otopark Listesine Git"
          onPress={() => this.props.navigation.navigate('OtoparkDetail', { itemId: 8570, otherParam: 'diğer parametreler burada', })}
        />
        <Button
          title="Haritaya Git"
          onPress={() => this.props.navigation.navigate('Harita', { itemId: 117, otherParam: 'başka paramaetreler için alan', })}>
        </Button>
      </View>



    );
  }
}

class OtoparkDetailPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Otopark Listesindesiniz</Text>
        <Text>Kayıt No: {JSON.stringify(itemId)}</Text>
        <Text>Diğer paramaetreler: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Anasayfaya Git"
          onPress={() => this.props.navigation.navigate('Anasayfa')}
        />
      </View>
    );
  }
}

class Harita extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'NAVIGATION PROJESI',
    }
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Harita sayfasındasınız</Text>
        <Text>Kayıt No: {JSON.stringify(itemId)}</Text>
        <Text>Diğer paramaetreler: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Anasayfaya Git"
          onPress={() => this.props.navigation.navigate('Anasayfa')}
        />
      </View>
    );
  }
}




const AppNavigator = createStackNavigator(
  {
    Anasayfa: Anasayfa,
    OtoparkDetail: OtoparkDetailPage,
    Harita: Harita
  },
  {
    initialRouteName: "Anasayfa",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
      },
    }
  }
);




export default createAppContainer(AppNavigator);




// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
