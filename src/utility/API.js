import axios from "axios";

class API {
    static addEmployee(data){
        return(
            axios.post('http://dummy.restapiexample.com/api/v1/create', data)
        )
    }
    static updateEmployee(id, data){
        return(
            axios.put('http://dummy.restapiexample.com/api/v1/update/'+id, data)
        )
    }
    static deleteEmployee(id){
        return(
            axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+id)
        )
    }
}

export default API
