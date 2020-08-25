import {combineReducers} from 'redux';

// import ButtonClick, * as buttonClickSelectors from './buttonClick';
import faculties, * as FacultiesSelectors from './projectRequest/faculties';
import majors, * as MajorsSelectors from './projectRequest/majors';
import projectRequestForm, * as ProjectRequestFormSelectors from './projectRequest/form';
import tags, * as TagSelectors from './tags';
const reducer = combineReducers({
    faculties,
    majors,
    projectRequestForm,
    tags,
});

export default reducer;

//Faculties Selectors
export const getFaculty = (state,id) => FacultiesSelectors.getFaculty(state.faculties, id);
export const getFaculties = state => FacultiesSelectors.getFaculties(state.faculties);
export const getFacultiesError = state => FacultiesSelectors.getError(state.faculties);
export const isFetchingFaculties = state => FacultiesSelectors.getIsFeching(state.faculties);
export const getSelectedFaculty = state => FacultiesSelectors.getSelectedFaculty(state.faculties);

//Majors Selectors
export const getMajor = (state,id) => MajorsSelectors.getMajor(state.majors, id);
export const getMajors = state => MajorsSelectors.getMajors(state.majors);
export const getMajorsError = state => MajorsSelectors.getError(state.majors);
export const isFetchingMajors = state => MajorsSelectors.getIsFeching(state.majors);
export const getSelectedMajor = state => MajorsSelectors.getSelectedMajor(state.majors);

//Project Request Form Selectors
export const getForm = state => ProjectRequestFormSelectors.getForms(state.projectRequestForm);

//tag selectors
export const getTags = state => TagSelectors.getTags(state.tags);






