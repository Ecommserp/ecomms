import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Products = () =>{
  const data = [
    {
      name: 'Week1',
      Item1: 4000,
      Item2: 2400,
      Item3: 6000,
      Item4: 7000,
      Item5: 5000,
      Item6: 9000,
      Item7: 4000,
    },
    {
      name: 'Week2',
      Item1: 4000,
      Item2: 2400,
      Item3: 6000,
      Item4: 7000,
      Item5: 5000,
      Item6: 9000,
      Item7: 4000,
    },
    {
      name: 'Week3',
      Item1: 4000,
      Item2: 2400,
      Item3: 6000,
      Item4: 7000,
      Item5: 5000,
      Item6: 9000,
      Item7: 4000,
    },
    {
      name: 'JWeek4',
      Item1: 4000,
      Item2: 2400,
      Item3: 6000,
      Item4: 7000,
      Item5: 5000,
      Item6: 9000,
      Item7: 4000,
    },
    
    
  ];


  return (
    
    <div>
      <div><h1 className='salesproducts'>Product</h1></div>
      <div className='salesmain'>
      
      <h1  className='salesquantity'>Quantity<h2>3800</h2></h1> 
    <h1 className='trendy'>Trendy products
    <ul className="ultags">
  <li className="it1">Item 1</li>
  <li className="it2">Item 2</li>
  <li className="it3">Item 3</li>
  <li className="it4">Item 4</li>
  <li className="it5">Item 5</li>
  <li className="it6">Item 6</li>
  <li className="it7">Item 7</li>
</ul></h1>
    
    </div>
    
      <div className='salesbarchart'>
      <h1 className='productchart'>Trendy Products Chart</h1>
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
          <Bar dataKey="Item1" fill="#8884d8" />
          <Bar dataKey="Item2" fill="#82ca9d" />
          <Bar dataKey="Item3" fill="#FF6F61" />
          <Bar dataKey="Item4" fill="#88B04B" />
          <Bar dataKey="Item5" fill="#B565A7" />
          <Bar dataKey="Item6" fill="#FDAC53" />
          <Bar dataKey="Item7" fill="#363945" />
        </BarChart>
     </div>

    
    </div>
    
      
        
  
     
  );

        }


export default Products;
