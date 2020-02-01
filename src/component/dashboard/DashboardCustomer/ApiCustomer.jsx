import React, { Component, Fragment } from 'react';
import PropsCustomer from './PropsCustomer';
import axios from 'axios';

class ApiCustomer extends Component{
    state = {
        posts: []
    }
    getData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(result=>{
            this.setState({
                posts: result.data
            })
        }).catch(err=>{
            throw err
        })
    }

    componentDidMount(){
        this.getData()
    }
    render(){
        return( 
            this.state.posts.map(post=>{
                return(
                    <Fragment>
                        <PropsCustomer key={post.id} 
                        name={post.name} 
                        username={post.username} 
                        email={post.email}
                        website={post.website}
                        />
                    </Fragment>
                )
            })

        )
    }
}

export default ApiCustomer;