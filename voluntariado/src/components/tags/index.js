import React, {useState, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/tags';
import { v4 } from 'uuid';
import Tag from './tag';
import TagImage from '../../images/tag.png';
import '../../styles/tags.css';
const Tags = ({tags, onTagAdded}) =>{
    const [tag, setTag] = useState('')
    const tagInput = useRef();
    return(
        <div className="tags__area">
            
            <label>#Tags</label>
            <div className="tags__input__container">
               
                <input onKeyDown={e => {
                    if(e.key === 'Enter'){
                        if(tag !==''){
                            onTagAdded(tag, v4())}; 
                            tagInput.current.focus(); 
                            setTag('');
                        }
                    }
                } ref={tagInput} type="text" placeholder="Inserte tags" value={tag} className='tags_input'
                onChange={e => setTag(e.target.value)} />
                 <img src={TagImage} className="tags__icon"></img>
                <a className="add_tag_label" onClick={() => 
                    {if(tag !== ''){onTagAdded(tag, v4())}; setTag(''); tagInput.current.focus();}}>
                    Agregar Tag
                </a>
            </div>

            <div className="created__tag__container">
            {
                tags.map(element => {
                    return <Tag tag={element} key={element.id}/>
                })
            }
            </div>
        </div>
    )
}

export default connect(
    state => ({
        tags: selectors.getTags(state)
    }),
    dispatch =>({
        onTagAdded(tag, id){
            dispatch(actions.addTag(tag, id))
        }
    })
)(Tags);