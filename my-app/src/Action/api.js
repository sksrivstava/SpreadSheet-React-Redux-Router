import axios from "axios";

const baseurl = "http://localhost:53677/api/";
export default {
  dEmployee(url = baseurl + "employee/") {
    return {
      fetchall: () => axios.get(url + "getemployee"),
      fetchByid: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url + "AddEmployee", newRecord),
      update: (updateRecord) => axios.put(url + "updateemployee", updateRecord),
      delete: (id) => axios.delete(url + "deleteEmployee?id=" + id),
    };
  },
};
