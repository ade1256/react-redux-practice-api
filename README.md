# **react-redux-practice-api**

I made this to learn to integrate the API with layouts.
The API that I use comes from the website [Dummy Rest Api Example](http://dummy.restapiexample.com/)

## Installation

    git clone https://github.com/ade1256/react-redux-practice-api
    cd react-redux-practice-api
    npm install
    npm start

and see it running on [localhost:3000](http://localhost:3000/home)

Demo :
![Gambar demo untuk tampilan pertama](https://raw.githubusercontent.com/ade1256/react-redux-practice-api/master/demo.png)
![Demo saat berhasil melakukan CRUD](https://raw.githubusercontent.com/ade1256/react-redux-practice-api/master/demo2.png)

## API Usage

API file location

    src/utility/API.js

**Function**
We have some function to call API :

    addEmployee(data)
    updateEmployee(id, data)
    deleteEmployee(id)
