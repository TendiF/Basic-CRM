import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
} from 'react-native-chart-kit'
import { Col, Row, Grid } from "react-native-easy-grid";
import { RkButton, RkStyleSheet, RkText, RkTheme, RkTextInput } from 'react-native-ui-kitten';
import {widthScale, heightScale} from './utils/Scale';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height : heightScale(0.2,true),
      width : widthScale(0.9),
    }
  }
  onLayout(e) {
    const height = heightScale(0.2,true);
    const width = widthScale(0.9);
    this.setState({
      width,
      height
    })
  }
  render() {
    const chart = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }]
      },
      chartConfig: {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      },
      width: this.state.width,
      height: this.state.height
    }
    return (
      <ScrollView animation="fadeIn" onLayout={this.onLayout.bind(this)} style={{}}>
      <Grid>
        <Row>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
              Statistic
            </Text>
            <BarChart
              data={chart.data}
              width={chart.width} // from react-native
              height={chart.height}
              chartConfig={chart.chartConfig}
            />
          </View>
        </Row>
        <Row>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
              Statistic
            </Text>
            <LineChart
              data={chart.data}
              width={chart.width} // from react-native
              height={chart.height}
              chartConfig={chart.chartConfig}
            />
          </View>
        </Row>
      </Grid>
      </ScrollView>
    );
  }
}