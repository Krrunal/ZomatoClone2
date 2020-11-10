import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from '../Top Tabs/FoodScreen';
import Tab2 from '../Top Tabs/MarketScreen';

 class TabScreen extends Component {
  render() {
    return (
      <Container  >
        <Tabs >
          <Tab heading="Food"  tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Market"  tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}
export default TabScreen;