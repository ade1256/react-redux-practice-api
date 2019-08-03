import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Layout from '../layout/Layout'
import TableEmployee from '../component/TableEmployee/TableEmployee'


function mapStateToProps(state) {
    return {
        
    };
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'ID', field: 'id' },
                { title: 'Name', field: 'employee_name' },
                { title: 'Salary', field: 'employee_salary' },
                { title: 'Age', field: 'employee_age' },
                { title: 'Image', field: 'employee_image' }
              ],
              data: [
                {id:"1",employee_name: 'Fikri', employee_salary: '3000000', employee_age:20, employee_image:"" },
              ],
        };
    }
    

    async componentDidMount(){
        await this.getEmployee();
    }

    async getEmployee(){
        let dataEmployee = [];
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');

        response.data.map((data)=>
            {
                dataEmployee.push(data);
            }
        );

        this.setState({
            dataTableEmploye: dataEmployee
        });
        
        
    }


    
    render() {
        return (
            <div>
                <Layout title="Home">
                    <div className="mt-48">
                        <TableEmployee 
                        columns={this.state.columns} 
                        data={this.state.dataTableEmploye}  />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);