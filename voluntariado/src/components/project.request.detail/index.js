import React from 'react';
import {connect} from 'react-redux';
import '../../styles/project.request.detail.css';
import Header from '../header';
import ColoredBar from '../header/colored.bar';
import Logo from '../../images/white_logo.png';
import Carrousel from '../carousel';
import * as selectors from '../../redux/reducers';


const ProjectRequestDetail = ({data, images, links, isLoadingImages, isLoadingLinks}) =>{
    
    const companyName = data.company_name;
    const projectName = data.project_name;
    const companyAddress = data.company_address;
    const emailAddress = data.email_address;
    const phoneNumber = data.phone_number;
    const aboutUs = data.about_us;
    const {description, tags, requirements} = data;

    const imageArray = []
    if(!isLoadingImages){
        images.map(({image}) => imageArray.push(image));
    }

    return(
    <div>
        <Header color="#343434" logo={Logo} />
        <ColoredBar color="#E0533F" height="20px"/>
        <div className="project__request__detail__container">
            <div className="project__request__detail__company_container">
                <div className="project__request__detail__company__name__container">
                    <p className="project__request__detail__company__name">{companyName}</p>
                </div>
                <div className="project__request__detail__company__info">
                    <div className="project__request__detail__carousel">
                        <Carrousel images={imageArray} maxHeight='500px' />
                    </div>
                    <div className="project__request__detail__about__us__container">
                        <p className="project__request__detail__about__us">
                            {aboutUs}
                        </p>
                    </div>
                </div>
            </div>
            <div className="project__request__detail__project__container"> 
                <div className="project__request__detail__project__data">
                    <p className="project__request__detail__project__name">{projectName} </p>
                    <p>{tags}</p>
                    <p className="project__request__detail__project__description">
                        {description}
                    </p>
                    <p className="project__request__detail__project__requirements__title">Requisitos</p>
                    <p className="project__request__detail__project__requirements">
                        {requirements}
                    </p>
                </div>
            </div>
            <div className="project__request__detail__footer">
                <div className="project__request__detail__footer__left__wrapper">
                        <p className="project__request__detail__footer__left__title">Contacto</p>
                        <p>Address: {companyAddress}</p>
                        <p>Email: {emailAddress}</p>
                        <p>Telefono: {phoneNumber}</p>
                       
                    </div>
                <div className="project__request__detail__footer__right__wrapper">
                    <p>Enlaces</p>
                    {
                        !isLoadingLinks &&(links.map(e =>{
                            const {id, link} = e;
                            return(<a href="#" key={id}>{link}</a>)
                        })) 
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default connect(
    state=>({
        data:  selectors.getProjectRequest(state, selectors.getSelectedProjectRequest(state)),
        images: selectors.getProjectRequestImages(state),
        links: selectors.getProjectRequestLinks(state),
        isLoadingImages: selectors.isFetchingProjectImages(state),
        isLoadingLinks: selectors.isFetchingProjectLinks(state),
    })
)
(ProjectRequestDetail);