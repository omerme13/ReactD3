import React, { Component } from 'react';

import NivoResponsivePie from './NivoResponsivePie';
import ChartjsPie from './ChartjsPie';
import VictoryPB from './VictoryPB';
import RechartsPC from './RechartsPC';
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme, sampleData } from "victory";

import './App.css';

const data = [
    { x: 1, y: 2, y0: 1 },
    { x: 2, y: 3, y0: 2 },
    { x: 3, y: 5, y0: 2 },
    { x: 4, y: 4, y0: 3 },
    { x: 5, y: 6, y0: 3 }
  ]

class App extends Component {
    
    render() {

        return (
            <div className="App">
                <RechartsPC />
                <ChartjsPie />
                <div style={{ height: 400 }}>
                    <NivoResponsivePie />
                </div>
                {/* <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                >
                    <VictoryBar
                        padding={0}
                        style={{ data: { fill: "ORANGERED" }}}
                        data={data}
                    />
                </VictoryChart> */}

            </div>
        )
    }
}

export default App;
