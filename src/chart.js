import React from 'react';

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data =   [
    {
        "country": "AF",
        "hot dog": 96,
        "hot dogColor": "hsl(117, 70%, 50%)",
        "burger": 190,
        "burgerColor": "hsl(258, 70%, 50%)",
        "sandwich": 9,
        "sandwichColor": "hsl(166, 70%, 50%)",
        "kebab": 161,
        "kebabColor": "hsl(117, 70%, 50%)",
        "fries": 79,
        "friesColor": "hsl(158, 70%, 50%)",
        "donut": 48,
        "donutColor": "hsl(166, 70%, 50%)"
      },
      {
        "country": "AG",
        "hot dog": 101,
        "hot dogColor": "hsl(128, 70%, 50%)",
        "burger": 125,
        "burgerColor": "hsl(46, 70%, 50%)",
        "sandwich": 69,
        "sandwichColor": "hsl(165, 70%, 50%)",
        "kebab": 65,
        "kebabColor": "hsl(86, 70%, 50%)",
        "fries": 92,
        "friesColor": "hsl(234, 70%, 50%)",
        "donut": 49,
        "donutColor": "hsl(270, 70%, 50%)"
      },
      {
        "country": "AI",
        "hot dog": 54,
        "hot dogColor": "hsl(256, 70%, 50%)",
        "burger": 161,
        "burgerColor": "hsl(82, 70%, 50%)",
        "sandwich": 103,
        "sandwichColor": "hsl(79, 70%, 50%)",
        "kebab": 69,
        "kebabColor": "hsl(230, 70%, 50%)",
        "fries": 75,
        "friesColor": "hsl(84, 70%, 50%)",
        "donut": 103,
        "donutColor": "hsl(158, 70%, 50%)"
      },
      {
        "country": "AL",
        "hot dog": 59,
        "hot dogColor": "hsl(180, 70%, 50%)",
        "burger": 148,
        "burgerColor": "hsl(242, 70%, 50%)",
        "sandwich": 103,
        "sandwichColor": "hsl(168, 70%, 50%)",
        "kebab": 71,
        "kebabColor": "hsl(67, 70%, 50%)",
        "fries": 154,
        "friesColor": "hsl(219, 70%, 50%)",
        "donut": 140,
        "donutColor": "hsl(347, 70%, 50%)"
      },
      {
        "country": "AM",
        "hot dog": 100,
        "hot dogColor": "hsl(209, 70%, 50%)",
        "burger": 65,
        "burgerColor": "hsl(243, 70%, 50%)",
        "sandwich": 120,
        "sandwichColor": "hsl(332, 70%, 50%)",
        "kebab": 121,
        "kebabColor": "hsl(163, 70%, 50%)",
        "fries": 123,
        "friesColor": "hsl(128, 70%, 50%)",
        "donut": 4,
        "donutColor": "hsl(140, 70%, 50%)"
      }
    ]
    
const MyResponsiveBar = (props) => (
    <ResponsiveBar
        data={props.data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default MyResponsiveBar;