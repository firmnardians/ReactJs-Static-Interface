import React, { Component } from 'react';

class PropsCustomer extends Component{
    render(){
        return(
                <div className="detailCustomer">
                    <p> <label>Nama:</label>
                    {this.props.name}</p>
                    
                    <p> <label>Username:</label>
                    {this.props.username}</p>

                    <p> <label>Email:</label>
                    {this.props.email}</p>

                    <p> <label>Webiste:</label>
                    {this.props.website}</p>
                </div>
        )
    }
}

export default PropsCustomer;