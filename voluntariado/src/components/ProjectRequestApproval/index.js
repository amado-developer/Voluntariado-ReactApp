import React, {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import ProjectRequestApproval from './ProjectRequestApproval';

const url = `http://localhost:8000/api/v1/solicitud-proyecto/`;
const ProjectRequestsApproval = () => {
    const [responseData, setResponseData] = useState('');
    let order = []
    const fetchData = useCallback(() =>{
        axios(url)
        .then((response) => {
            setResponseData(response.data)
          })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    for(let request in responseData){
        order = [...order, request];
    }

   
    return (
    <div>
        {
             order.map(id => <ProjectRequestApproval projectRequest={responseData[id]} key={id}/>)
        }
       
    </div>
    )
}

export default ProjectRequestsApproval;