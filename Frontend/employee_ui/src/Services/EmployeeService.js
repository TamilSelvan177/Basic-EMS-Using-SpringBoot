import axios from "axios";

const API_URL = "http://localhost:9090/employees";

class EmployeeService {

    getAll(){
        return axios.get(API_URL);
    }

    create(employee){
        return axios.post(API_URL, employee);
    }

    update(id, employee){
        return axios.put(`${API_URL}/${id}`, employee);
    }

    delete(id){
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new EmployeeService();