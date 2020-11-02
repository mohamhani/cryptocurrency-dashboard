import React from 'react';
import ReactHighCharts from 'react-highcharts';
import highChartsConfig from './HighChartsConfig';
import {Tile} from '../shared/Tile';
import {AppContext} from '../App/AppProvider';
import HighChartsTheme from './HighChartsTheme';
import ChartSelect from './ChartSelect';

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function() {
    return (
        <AppContext.Consumer>
            {({historical, changeChartSelect}) => 
                <Tile>
                    <ChartSelect
                        defaultValue={"months"}
                        onChange={e => changeChartSelect(e.target.value)}
                    >
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </ChartSelect>
                    {historical ? 
                        <ReactHighCharts config={highChartsConfig(historical)}/> : 
                        <div>Loading Historical Data</div>
                    }
                </Tile>
            }
            
        </AppContext.Consumer>
    )
}
