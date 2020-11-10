import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import SplashScreen from './assets/SplashScreen';
import SignUpScreen from './assets/SignUpScreen';
import EmailSignUp from './assets/EmailSignUp';
import EmailLogin from './assets/EmailLogin';
import OrderScreen from './assets/Bottom Tabs/OrderScreen'
import FoodScreen from './assets/Top Tabs/FoodScreen';
import GoOutScreen from './assets/Bottom Tabs/GoOutScreen';
import MarketScreen from './assets/Top Tabs/MarketScreen';
import ProScreen from './assets/Bottom Tabs/ProScreen';
import ExploreScreen from './assets/Bottom Tabs/ExploreScreen';
import FeedScreen from './assets/Top Tabs/FeedScreen';
import VideoScreen from './assets/Top Tabs/VideoScreen';
import ProfileScreen from './assets/Bottom Tabs/ProfileScreen';
const App = createStackNavigator({
  SplashScreen: { screen: SplashScreen, navigationOptions: { headerShown: false } },
  SignUpScreen: { screen: SignUpScreen, navigationOptions: { headerShown: false } },
  EmailSignUp: { screen: EmailSignUp, navigationOptions: { headerShown: true, headerTitleAlign: 'center' } },
  EmailLogin: { screen: EmailLogin, navigationOptions: { headerShown: true, headerTitleAlign: 'center' } },
  OrderScreen: { screen: OrderScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  FoodScreen: { screen: FoodScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  MarketScreen: { screen: MarketScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  GoOutScreen: { screen: GoOutScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  ProScreen: { screen: ProScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  ExploreScreen: { screen: ExploreScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { headerShown: false, headerTitleAlign: 'center' } },


});

// // const BottomTab = createBottomTabNavigator ({
// //   StackScreen:{
// //     screen:App,
// //     navigationOptions:{
// //       headerShown:false,
// //       }
// //   },
// //   OrderScreen:{
// //     screen: OrderScreen,
// //     navigationOptions:{
// //     header:null,
// //     }
// //   },
// // },
// // {
// //   initialRouteName: 'StackScreen',
// // });

//  export default createAppContainer(App);
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: OrderScreen,
//     },
//     Chat: {
//       screen: ProScreen,
//     },
//     Settings: {
//       screen: ExploreScreen,
//     },

//   });

// export default createAppContainer(TabNavigator);
export default createAppContainer(App);
