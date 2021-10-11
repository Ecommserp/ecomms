import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';

const Sales = () =>{

  let data_revy1 = [];
  let data_revy2 = [];
  let data_revy3 = [];


  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          fontSize: 5,
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          fontSize: 5,
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-3',
          fontSize: 5,
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: '2019',
        data: data_revy1,
        fill: false,
        backgroundColor: 'rgb(130, 219, 109)',
        borderColor: 'rgba(130, 219, 109, 0.2)',
      },

      {
        label: '2020',
        data: data_revy2,
        fill: false,
        backgroundColor: 'rgb(207, 131, 212)',
        borderColor: 'rgba(207, 131, 212, 0.2)',
      },
      {
        label: '2021',
        data: data_revy3,
        fill: false,
        backgroundColor: 'rgb(102, 159, 223)',
        borderColor: 'rgba(102, 159, 223, 0.2)',
      },

    ],
  };

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  async function sample_aa() {
    //alert(data_revy1)
      ReactDOM.render(
        <div>
        <Line height='140' data={data} options={options} />
  </div>
  , document.getElementById('line_graph'));




  }

  async function getData_rev() {
    //alert('working')

      const apiUrl = 'http://localhost:3220/sales/g1';
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){


        if(data[i].year == '2019'){
          data_revy1[i] = data[i].total;
        }

        if(data[i].year == '2020'){
          data_revy2[i - 12] = data[i].total;
        }

        if(data[i].year == '2021'){
          data_revy3[i - 24] = data[i].total;
        }


      }


      sample_aa();

  }

  getData_rev();

  return (
    <>
    <div>
      <div>
       <h1 className='saleshead'>Sales Management</h1>

       </div>
      <div className='salesheaddetails'>
        <h1 className='sdetails'>Sales Count<h2>2200</h2></h1>
       <h1 className='rdetails'>Revenue<h2>USD42000</h2></h1>
       <h1   className='pdetails'>Profit<h2>USD29000</h2></h1>
       </div>


      <din className>
      <h1 className='sales-chart'>Monthly Sales Charts</h1>

      </din>
     <div className='salesbarchart'>
     <div id="line_graph">
     </div>
     </div>
      </div>
    </>
  );
}

export default Sales;
