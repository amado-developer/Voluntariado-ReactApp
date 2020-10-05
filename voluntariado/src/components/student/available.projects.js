import React,{ useState, useEffect, Fragment, button } from "react";
import { IconContext } from "react-icons";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import AvailableProject from './available.project';
import '../../styles/projectRequestApproval.css';
import '../../styles/Search.css'
import search from '../../styles/search.svg'



const AvailableProjects = ({user, data}) =>{
    const userName = user.first_name + " " + user.last_name;
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setFiltered(data);
      }, [data]);


    const handleChange = e => {

        let currentList = [];
        let newList = [];
    
        if (e.target.value !== "") {
            currentList = data;
            newList = currentList.filter(item => {
                let contains = false
                const i = item.project_name.toLowerCase()
                const j = item.description.toLowerCase()
                const k = item.company_name.toLowerCase()
                const filter = e.target.value.toLowerCase();
                contains  = i.includes(filter) || j.includes(filter) || k.includes(filter)
                
                return contains;
          });
        } 
        
        else {
          newList = data;
        }
        setFiltered(newList);
      };
     
    
      return(
        <div>
            <div className="home__header">
                <h1>{`Bienvenido ${userName}!`}</h1>
                <h2>Proyectos disponibles</h2>
            </div>
            
            <div className='wrap'>
            
                <div className='search'>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        onChange={handleChange} 
                        className = "searchTerm"
            
                    />

                    <button 
                        className = "searchButton" 
                        type="button" 
                        onClick={console.log('')}>{ <img src={search} alt="React Logo" />}
                    </button>

                </div>
            </div>

      
            <div className="pending__projects__container"> {
                data.length === 0 &&(
                    <p className="empty__projects">No hay Proyectos disponibles</p>
                )}
            
            {   
                data.length > 0 &&(
               
                    filtered.map(({id})=>{
                    return<AvailableProject index={id} key={id} />
                }))
            }
             
            </div>
        </div>
    )
};

export default connect(
    state=>({
        user: selectors.getAuthUser(state),
        data: selectors.getAvailableProjects(state),
    })
)
(AvailableProjects);