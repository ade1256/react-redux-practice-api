import axios from "axios";

class API {
    static addEmploye(data){
        return(
            axios.post('http://dummy.restapiexample.com/api/v1/create', data)
        )
    }
    static updateEmploye(oldData, data){
        return(
            axios.put('http://dummy.restapiexample.com/api/v1/update/'+oldData.id, data)
        )
    }
    static deleteEmploye(oldData){
        return(
            axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+oldData.id)
        )
    }
}

export default API
