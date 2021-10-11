import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Products = () =>{

  const [qua, setqua] = useState("");
  let prod_name = [];
  let prod_qua = [];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

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

  async function getData_qua() {
    //alert('working')

      const apiUrl = 'http://localhost:3220/sales/g2';
      const data = await getData(apiUrl);

        setqua(data[0].qua)

        const apiUrl1 = 'http://localhost:3220/sales/g3';
        const data1 = await getData(apiUrl1);

        for(var j = 0; j < data1.length; j++){

          prod_name[j] = data1[j].Product_name;
          prod_qua[j] = data1[j].qua;
}

ReactDOM.render(
<ul className="ultags">
{
prod_name.map((value, index) => {
return <li className="it1">{value} - {prod_qua[index]}</li>
})
}
</ul>, document.getElementById('list'));

  }

  getData_qua();

  return (

    <div>
      <div><h1 className='salesproducts'>Product</h1></div>
      <div className='salesmain'>

      <h1  className='salesquantity'>Quantity<h2>{qua}</h2></h1>
    <h1 className='trendy'>Trendy products

<div id="list">
</div>
</h1>

    </div>

      <div className='salesbarchart'>
      <h1 className='productchart'>Trendy Products Chart</h1>
      <div id="line_graph">
      </div>
     </div>


    </div>





  );

        }


export default Products;
