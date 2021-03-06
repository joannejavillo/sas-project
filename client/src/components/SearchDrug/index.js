import React, { useState } from "react";
import SearchResults from "../SearchResults";
import "./style.css";
import { Container } from 'semantic-ui-react';
import Footer from '../Footer';

// Using the datalist element we can create autofill suggestions based on the props array
function SearchDrug(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterFunction = (drug) => {
    if (searchTerm === "") {
      return true;
    }

    return drug.drug_name.includes(searchTerm);
  }

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <Container>
        <form className="search">
          <div className="form-group">
            <label htmlFor="drug">Name of the Drug:</label>
            <input
              value={searchTerm}
              onChange={handleSearchTermChange}
              name="Drug"
              list="Drug"
              type="text"
              className="form-control"
              placeholder="Drug name"
              id="supplier_id"
            />

            <div id="supplier_id">
              <table>
                <thead>

                  <th onClick={props.drugFilter}>Drug</th>
                  <th>Strength</th>
                  <th>Classification</th>
                  <th>Storage</th>
                  <th>Supplier</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Contact</th>

                </thead>

                <tbody>
                  {props.drugs.filter(filterFunction).map(drug => (
                    <tr key={drug.id} >
                      <td> {drug.drug_name} </td>
                      <td> {drug.strength} </td>
                      <td> {drug.classification} </td>
                      <td> {drug.storage} </td>
                      <td> {drug.supplier.supplier_name} </td>
                      <td> {drug.supplier.address} </td>
                      <td> {drug.supplier.contact} </td>
                      <td> {drug.supplier.email} </td>
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </form>
        <div class="ui message">
          <div class="header">
            Important:
  </div>
          <ul class="list">
            <li>Drugs under S19 - Does not require any forms</li>
            <li>Drugs under SAS - Please notify SAS Pharmacist for paperworks</li>
            <li>Email your orders to the Pharmacy Procurement email: Health.RAHPharmacyProcurement@sa.gov.au</li>
            <li>Cut off time for orders: 11 am</li>
          </ul>
        </div>
      </Container>
      <Footer>  </Footer>
    </>
  );
}

export default SearchDrug;
