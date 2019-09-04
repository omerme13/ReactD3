import React, { Component } from "react";

import { VictoryPie, VictoryContainer, VictoryLegend } from "victory";

import "./VictoryPie.css";

const sampleData = [
    { x: "Cats", y: 35},
    { x: "Dogs", y: 40},
    { x: "Birds", y: 55},
    { x: "Bugs", y: 15},
    { x: "Fish", y: 120}
];

class VP extends Component {
    state = {
        data: sampleData,
        size: 0,
        r: 0
    };

    componentDidMount() {
        this.setState({ size: 400 });
    }
    
    render() {
        return (
            <div
                className="VictoryP">
                <VictoryPie
                    data={this.state.data}
                    animate={{ duration: 500, onLoad: { duration: 500 } }}
                    containerComponent={<VictoryContainer responsive={false} />}
                    colorScale={"qualitative"}
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
                                onClick: () => {
                                    this.setState({ r: 90 });
                                    this.state.data.map(
                                        item => `name: ${item.x}`
                                    );
                                }
                            }
                        }
                    ]}
                />
                <VictoryLegend
                    containerComponent={<VictoryContainer responsive={false} />}
                    colorScale={"qualitative"}
                    width={700}
                    x={120}
                    y={20}
                    title="Legend"
                    centerTitle
                    orientation="vertical"
                    gutter={30}
                    style={{
                        border: { stroke: "blue" },
                        title: { fontSize: 20 }
                    }}
                    data={this.state.data.map(item => {
                        return {
                            name: item.x
                        };
                    })}
                    events={[
                        {
                            target: "labels",
                            eventHandlers: {
                                onClick: e => {
                                    let indexToRemove = 0;

                                    for (let item of this.state.data) {
                                        if (item.x === e.target.textContent) {
                                            console.log(indexToRemove)
                                            break;
                                        } 
                                        indexToRemove++;
                                    }
                                    sampleData.splice(indexToRemove, 1);
                                    this.setState({data: sampleData})


                                    // if (
                                    //     e.target.classList.contains("filtered")
                                    // ) {
                                    //     e.target.classList.remove("filtered");
                                    // } else {
                                    //     e.target.classList.add("filtered");
                                    // }
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
