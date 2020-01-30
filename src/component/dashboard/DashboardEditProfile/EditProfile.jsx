import React, { Component, Fragment } from 'react'
import DashboardMenu from '../DashboardMenu/DashboardMenu';

class EditProfile extends Component{
    render(){
        return(
            <Fragment>
                {/* <div className="cardData"></div> */}
                    <div className="cardFlex">
                        <div className="cardLeft width30">
                            <DashboardMenu/>
                        </div>
                        <div className="cardRight width70">
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default EditProfile;