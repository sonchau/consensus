import React from 'react';
import {Setting, useSettingByTaskNameQuery, Criteria, useCriteriaQuery} from '../../../generated/graphql'
import { useCriteriasQuery } from '../../../generated/graphql';
import ResultListItem from './ResultListItem'
import {makeResult, makeHorizontalChartData, ChartData} from '../../../utils/common'
import {HorizontalBar} from 'react-chartjs-2'
import numeral from 'numeral';
interface Props {
  settings: Setting[]
}

const tableGrid = {
  'borderTop': '1px solid #e2e8f0',
  'borderRight': '1px solid #e2e8f0',
  'margin': '0 auto',
  'text-align': 'center'
}

const chartOptions = {
  responsive: true,
  chartArea: {
    backgroundColor: 'rgba(255, 255, 255)'
  },
  scales: {
    xAxes: [{
      ticks: {
        callback: (value: any) => {
            return numeral(value).format('0,0');
        }
      }
    }]
  },
  "tooltips": {
    "enabled": true,
    "mode": "label",
    "intersect": false,
    "displayColors": false,
    "callbacks": {
      title: (tooltipItem: any, data: any) => {
        return '';
      },
      label: (tooltipItem: any, data: any) => {
        let item = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
        return `${numeral(item).format('0,0')}` ;
      },
    }
  }
};


const ResultChart: React.FC<Props> = ({settings}) => {
  let results, horizontalChartData
  const {loading, error, data, refetch} = useCriteriasQuery({
  })
  const criterias = data?.criterias
  if (criterias && criterias.length) {
    results = makeResult(settings, criterias)
    horizontalChartData = makeHorizontalChartData(results)

  }

  const chartData = {
    labels: horizontalChartData?.labels,
    datasets: [
      {
        label: 'Your solutions',
        backgroundColor: 'rgb(68, 114, 196, 0.8)',
        borderColor: 'rgba(68, 114, 196,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(68, 114, 196,0.8)',
        hoverBorderColor: 'rgba(68, 114, 196,1)',
        data: horizontalChartData?.data
      }
    ]
  };
  return (
    <>
        <h5>Here is a summary of your scores:</h5>
        { (results && results.length) ? (
          <HorizontalBar data={chartData} options={chartOptions} />

        ): (
          <p className="no-tasks-message"> No settings</p>
        )} 
          
    </>
  );
};

export default ResultChart;
