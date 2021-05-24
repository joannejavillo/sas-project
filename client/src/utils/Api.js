import axios from "axios";

export default {
    // Gets all drugs
    getDrug: function() {
      return axios.get("/api/drug");
    }
};