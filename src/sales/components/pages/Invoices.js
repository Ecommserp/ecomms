import React from "react";

function Invoices() {
    
    return (
	<div class="invoicecontainer">
	<div class="sheader">
		<h2>Add Invoice</h2>
	</div>
	<form id="form" class="salesform">
		<div class="form-control">
			<label for="username">Invoice ID</label>
			<input type="text" placeholder="" id="clientnic" />
			
			
		</div>
		<div class="form-control">
			<label for="username">Total:</label>
			<input type="text" placeholder="" id="name" />
			
			
		</div>
		<div class="form-control">
			<label for="username">Discount:</label>
			<input type="text" placeholder="" id="cantactnumber"/>
			
		</div>
    <div class="form-control">
			<label for="username">Cash:</label>
			<input type="text" placeholder="" id="cantactnumber"/>
			
		</div>
    <div class="form-control">
			<label for="username">Balance:</label>
			<input type="text" placeholder="" id="cantactnumber"/>
			
		</div>
	
		<button className="bb">Add</button>
	</form>
</div>
        
      );
}
export default Invoices;