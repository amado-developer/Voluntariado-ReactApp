import React,{ useState, useEffect, Fragment, button } from "react";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import AvailableProject from './available.project';
import '../../styles/Search.css'
import search from '../../styles/search.svg'
import * as actions from '../../redux/actions/available.projects';
import omit from 'lodash/omit';
const AvailableProjects = ({user, data, navigate, onApply}) =>{
    const userName = user.first_name + " " + user.last_name;
    const [filtered, setFiltered] = useState([]);
    let alteredFilteredList = [];
  
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
                const tags = item.tags.toLowerCase()
                const filter = e.target.value.toLowerCase();
                contains  = i.includes(filter) || j.includes(filter) || k.includes(filter) || tags.includes(filter)
                
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
                <div className="top__navigation__buttons">
                    
                    <button onClick={() => navigate(1)} style={{color: "#078b45"}}>Disponibles</button>
                    <button onClick={() => navigate(2)} style={{color: "black"}}>Recomendados</button>
                </div>
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
                    
                    filtered.map(e=>{
                        if(e !== undefined)
                        {
                            return<AvailableProject index={e.id} key={e.id} />
                        }
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
    }),
)
(AvailableProjects);