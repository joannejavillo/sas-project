import React, { Component } from "react";
import Container from "../components/Container";
import SearchDrug from "../components/SearchDrug";
import SearchResults from "../components/SearchResults";
import API from "../utils/Api";

//import Alert from "../components/Alert";

class Drugname extends Component {
  state = {
    search: "",
    drug: [],
    results: [],
    sortOrder: "asc",
    error: ""
  };

  // When the component mounts, get a list of all available base employee and update this.state.employee
  componentDidMount() {
    API.getDrug()
      .then(res => {
        console.log(res)
        this.setState({ drug: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  drugFilter = () => {
    console.log("working")
    if (this.state.sortOrder === "asc") {
      this.setState({
       drug: this.state.drug.sort((a, b) => (a.drug > b.drug) ? 1 : -1),
        sortOrder: "dsc"
      })
    }
    else {
      this.setState({
        drug: this.state.drug.sort((a, b) => (a.drug < b.drug) ? 1 : 0),
        sortOrder: "asc"
      })
    }
  }
 

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDrug(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    console.log(this.state.drug);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Drug Name!</h1>

          <SearchDrug
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.state.search}
            drug={this.state.drug}
            drugFilter={this.drugFilter}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default SearchDrug;
