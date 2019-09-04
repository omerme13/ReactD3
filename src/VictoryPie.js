import React, { Component } from "react";

import {
    VictoryPie,
    VictoryContainer
} from "victory";

import "./VictoryPie.css";

const sampleData = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
    { x: "Bugs", y: 15 },
    { x: "Fish", y: 120 },
]

class VP extends Component {
    state = {
        data: sampleData,
        size: 0,
        r: 20
    }

    componentDidMount() {
        this.setState({size: 400})
    }
    render() {
        return (
            <div className="VictoryP" 
                onClick={(e) => {
                    this.setState({data: sampleData.filter(item => item.x !== e.target.textContent)})
                    }
                } 
            >
                <VictoryPie 
                    data={this.state.data}
                    animate={{ duration: 500, onLoad: { duration: 500 } }}
                    containerComponent={<VictoryContainer responsive={false}/>}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                    innerRadius={this.state.r}
                    width={this.state.size}
                    events={[
                        {
                          target: "data",
                        //   childName: "Bar-1",
                          eventHandlers: {
                            // onClick: () => ({
                            //   target: "data",
                            //   mutation: () => ({ style: { fill: "orange" } })
                            // })
                            onClick:  (e) => {
                                this.setState({r: 50});
                                console.log(e.target)
                                // sampleData.pop();
                                // this.setState({data: sampleData});

                            }            
                          }
                        }
                      ]}    
                    
                />
            </div>
        );
    }
    
}

export default VP;
