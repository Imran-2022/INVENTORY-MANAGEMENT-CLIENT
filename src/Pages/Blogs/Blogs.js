import React from 'react';
import "./Blogs.css"
const Blogs = () => {
    return (
        <div>
            <div className="blog-header d-flex justify-content-center align-items-center">
                <h1>Blog Section</h1>
            </div>
            <section className="d-flex w-75 m-auto py-5 my-5">
                <div className="my-5 d-flex flex-column justify-content-center">
                    <h2>01. DIFFERENCE BETWEEN JAVASCRIPT AND NODE JS .</h2>
                    <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node. js is a run time environment built on google's v8 engine. JavaScript is executed in the browser whereas using Node. js gives us the ability to execute JavaScript outside the browser.</p>
                    <h2>02. WHEN SHOULD YOU USE NODE JS AND WHEN SHOULD YOU USE MONGODB.</h2>
                    <p>There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>
                    <h2>03. DIFFERENCE BETWEEN SQL AND NOSQL DATABASES</h2>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    <h2>04. WHAT IS THE PURPOSE OF JWT AND HOW DOES IT WORK</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
                </div>
            </section>
        </div>
    );
};

export default Blogs;