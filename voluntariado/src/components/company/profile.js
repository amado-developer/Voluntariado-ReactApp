import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
const CompanyProfile = ({company}) => {
    let companyData = company;
    let email = '';
    let companyName = '';
    let description = '';
    let phoneNumber = '';
    if(companyData !== undefined){
        email = companyData.email;
        companyName = companyData.company_name;
        description = companyData.description;
        phoneNumber = companyData.phone_number;
    }
    return (
    <div>
        <div>
            <h1>Bienvenidos: </h1>
        </div>
        <div>
            <p>{companyName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{description}</p>
        </div>
       
    </div>
    );
}

export default connect(
    state=> ({
        company: selectors.getCompanyUser(state), 
    }),
)
(CompanyProfile);