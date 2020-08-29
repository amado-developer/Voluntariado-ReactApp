import React from 'react';
import Header from '../header';
import ColoredBar from '../header/colored.bar';
import Logo from '../../images/white_logo.png';
import Carrousel from '../carousel';
import '../../styles/project.request.detail.css';

// import Image1 from '../../images/Meliodas/1.png'
// import Image2 from '../../images/Meliodas/2.png'

import Image1 from '../../images/1.jpeg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/3.jpeg';
const ProjectRequestDetail = () =>{
    const images=[Image1, Image2, Image3];
    return(
    <div>
        <Header color="#343434" logo={Logo} />
        <ColoredBar color="#E0533F" height="20px"/>
        <div className="project__request__detail__container">
            <div className="project__request__detail__company_container">
                <div className="project__request__detail__company__name__container">
                    <p className="project__request__detail__company__name">Nombre de la empresa</p>
                </div>
                <div className="project__request__detail__company__info">
                    <div className="project__request__detail__carousel">
                        <Carrousel images={images} maxHeight='500px' />
                    </div>
                    <div className="project__request__detail__about__us__container">
                        <p className="project__request__detail__about__us">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lectus nec dictum posuere. 
                            Vestibulum viverra dictum porttitor. In mollis ligula a odio blandit maximus a eu erat. Nam arcu nibh, 
                            viverra nec erat in, viverra dictum dui. Vestibulum faucibus, quam in posuere vehicula, eros enim mattis mauris, 
                            nec euismod ipsum lectus
                            Lorem ipsum dolor sit amet,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lectus nec dictum posuere. 
                            Vestibulum viverra dictum porttitor. In mollis ligula a odio blandit maximus a eu erat. Nam arcu nibh, 
                            viverra nec erat in, viverra dictum dui. Vestibulum faucibus, quam in posuere vehicula, eros enim mattis mauris, 
                            nec euismod ipsum lectus
                            Lorem ipsum dolor sit amet,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lectus nec dictum posuere. 
                            Vestibulum viverra dictum porttitor. In mollis ligula a odio blandit maximus a eu erat. Nam arcu nibh, 
                            viverra nec erat in, viverra dictum dui. Vestibulum faucibus, quam in posuere vehicula, eros enim mattis mauris, 
                            nec euismod ipsum lectus
                            Lorem ipsum dolor sit amet,
                        </p>
                    </div>
                </div>
            </div>
            <div className="project__request__detail__project__container"> 
                <div className="project__request__detail__project__data">
                    <p className="project__request__detail__project__name">Proyecto Kuul <p>Tags</p></p>
                    <p className="project__request__detail__project__description">
                    Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. In eleifend lectus nec dictum posuere. Vestibulum viverra dictum porttitor. 
                     In mollis ligula a odio blandit maximus a eu erat. Nam arcu nibh, viverra nec erat in, viverra dictum dui. 
                     Vestibulum faucibus, quam in posuere vehicula, eros enim mattis mauris, nec euismod ipsum lectus 
                     Lorem ipsum dolor sit amet,
                    </p>
                    <p className="project__request__detail__project__requirements__title">Requerimientos</p>
                    <p className="project__request__detail__project__requirements">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lectus nec dictum posuere. 
                        Vestibulum viverra dictum porttitor. In mollis ligula a odio blandit maximus a eu erat. Nam arcu nibh, 
                        viverra nec erat in, viverra dictum dui. Vestibulum faucibus, quam in posuere vehicula, eros enim mattis mauris, 
                        nec euismod ipsum lectus
                    </p>
                </div>
            </div>
            <div className="project__request__detail__footer">
                <div className="project__request__detail__footer__left__wrapper">
                        <p className="project__request__detail__footer__left__title">Contacto</p>
                        <p>Address: address address address address address</p>
                        <p>Email:  el email el email@hotmail.com</p>
                        <p>Telefono: 22253485</p>
                       
                    </div>
                <div className="project__request__detail__footer__right__wrapper">
                    <p>Enlaces</p>
                    <a href="google.com">www.google.com</a>
                    <a href="facebook.com">www.facebook.com</a>
                    <a href="inkedin.com">www.linkedin.com</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectRequestDetail;