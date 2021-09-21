import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Sales = () =>{
  const data = [
    {
      name: 'January',
      2020: 4000,
      2019: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      2020: 3000,
      2019: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      2020: 2000,
      2019: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      2020: 2780,
     2019: 3908,
      amt: 2000,
    },
    {
      name: 'May',
     2020: 1890,
     2019: 4800,
      amt: 2181,
    },
    {
      name: 'June',
     2020: 2390,
     2019: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      2020: 3490,
      2019: 4300,
      amt: 2100,
    },
    {
      name: 'Augest',
      2020: 3490,
      2019: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      2020: 3800,
      2019: 4300,
      amt: 2400,
    },
    {
      name: 'Octomber',
      2020: 2000,
      2019: 4300,
      amt: 3000,
    },
    {
      name: 'November',
      2020: 7000,
    2019: 4300,
      amt: 4800,
    },
    {
      name: 'December',
      2020: 3490,
      2019: 8000,
      amt: 2100,
    },
    
  ];
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
     <BarChart className='chartdetails'
         width={1200}
         height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2019" fill="#8884d8" />
          <Bar dataKey="2020" fill="#82ca9d" />
        </BarChart>
     </div>
      </div>
    </>
  );
}

export default Sales;