import React from "react";

function Invoices() {

    return (
	<div class="sscreen">

	<form id="form" class="saleform">
	<div class="sshead">
		<h2>Add Invoice</h2>
	</div>

		<div class="sform-control">
			<label for="username">Total:</label>
			<input type="text" placeholder="" id="name" />


		</div>
		<div class="sform-control">
			<label for="username">Discount:</label>
			<input type="text" placeholder="" id="cantactnumber"/>

		</div>
    <div class="sform-control">
			<label for="username">Cash:</label>
			<input type="text" placeholder="" id="cantactnumber"/>

		</div>
    <div class="sform-control">
			<label for="username">Balance:</label>
			<input type="text" placeholder="" id="cantactnumber"/>

		</div>

		<input className="salebutton" type="button" value="Submit"/>
	</form>
</div>

      );
}
export default Invoices;
