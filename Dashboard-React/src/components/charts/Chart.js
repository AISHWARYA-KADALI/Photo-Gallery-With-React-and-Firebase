import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { year: '1', population: 100 },
    { year: '2', population: 150 },
    { year: '3', population: 350 },
    { year: '4', population: 400 },
    { year: '5', population: 550 },
    { year: '6', population: 610 },
    { year: '7', population: 690 },
    { year: '8', population: 800 },
    { year: '9', population: 840 },
    { year: '10', population: 1000 },
];

export default class Chart1 extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={10} />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    <Title text="Annual Projection" />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}



