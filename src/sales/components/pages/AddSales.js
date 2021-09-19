
import React, {useState} from 'react';

function AddSales() {
    
  const [clientid, setclientid] = useState("");
  const [productid,setproductid] = useState("");
  const [quantity, setquantity] = useState("");
  

  

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({clientid:clientid,productid:productid,quantity:quantity})
    };
    fetch('http://localhost:3220/sales/', requestOptions)
        .then(response => response.json());
        alert("Sales added")

        
        setclientid("");
        setproductid("");
        setquantity("");
  }


    return (
	<div class="invoicecontainer">
	<div class="sheader">
		<h2>Add sales</h2>
	</div>
	<form id="form" class="salesform">
		<div class="sform-control">
			<label for="username">Client ID</label>
			<input type="text" placeholder=""  name="clientid" value={clientid} onChange={(e) => setclientid(e.target.value)}/>
			
			
		</div>
		<div class="sform-control">
			<label for="username">Product ID</label>
			<input type="text" placeholder="" name="productid" value={productid} onChange={(e) => setproductid(e.target.value)} />
			
			
		</div>
		<div class="sform-control">
			<label for="username">Quantity</label>
			<input type="text" placeholder="" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)}/>
			
		</div>
	
		<input className="nbutton" type="button" value="Submit" onClick={insert}/>
	</form>
</div>
        
      );
}
export default AddSales;