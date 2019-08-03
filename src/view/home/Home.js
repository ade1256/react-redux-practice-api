import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Layout from '../layout/Layout'
import TableEmployee from '../component/TableEmployee/TableEmployee'

function mapStateToProps(state) {
    return {
        dataTableEmploye: state.dataTableEmploye,
    };
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'ID', field: 'id', editable: 'never'},
                { title: 'Name', field: 'employee_name' },
                { title: 'Salary', field: 'employee_salary', type: 'numeric' },
                { title: 'Age', field: 'employee_age', type: 'numeric' },
                { title: 'Image', field: 'employee_image' }
              ],
        };
    }

    async componentDidMount(){
        await this.getEmployee();
        console.log(mapStateToProps)
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
                        data={this.state.dataTableEmploye}
                        callApiGetEmployee={() =>this.getEmployee()}  // Memasukan fungsi kedalam props
                        />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);