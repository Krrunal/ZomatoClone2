import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Root } from 'native-base';
import Tab1 from '../Top Tabs/FeedScreen';
import Tab2 from '../Top Tabs/VideoScreen';

 class ExploreTopTabs extends Component {
  render() {
    return (
      <Container  >
       
       <Tabs>
          <Tab heading="Feed"  tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Videos"  tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
          
        </Tabs>
      
      </Container>
    );
  }
}
export default ExploreTopTabs;