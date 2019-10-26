import React from 'react'
import './BusinessList.css'
import {Business} from '../Business/Business'

export class BusinessList extends React.Component{
    render(){
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business, i) => <Business key={"business-"+i} business={business} />)}
            </div>
        );
    }
}
