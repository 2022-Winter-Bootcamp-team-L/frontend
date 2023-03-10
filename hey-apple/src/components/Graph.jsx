// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Graph = ({ data /* see data tab */ ,name,color}) => 
    (
    <ResponsiveBar
   
        data={data}
        name = {name}
        keys={[
            'date1',
            'date2',
            'date3',
            'date4',
            'date5',
            'date6',
            
           

        ]}
        
        indexBy="date"
        margin={{ top: 30, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[color]} 
        // colors={['olive', 'brown', 'orange']
        colorBy="indexValue"
        theme={{
            /**
             * label style (bar에 표현되는 글씨)
             */
            labels: {
                text: {
                    fontSize: 0,
                    fill: '#000000',
                },
            },
            
            }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#0BFF6D',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#0BFF6D',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
           
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        tooltip={({ indexValue, value, color}) => (
            <div
                style={{
                    padding: 12,
                    color,
                    background: '#222222',
                }}
            >
                <span>{name}'s price</span>
                <br />
                <strong>
                    {indexValue}&nbsp;:&nbsp;₩{value.toLocaleString('ko-kr')}
                </strong>
            </div>)}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price',
            legendPosition: 'middle',
            legendOffset: -50
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)
export default Graph;