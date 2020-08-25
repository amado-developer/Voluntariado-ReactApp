import {combineReducers} from 'redux';

// import ButtonClick, * as buttonClickSelectors from './buttonClick';
import faculties, * as FacultiesSelectors from './project.request/faculties';
import majors, * as MajorsSelectors from './project.request/majors';
import projectRequestForm, * as ProjectRequestFormSelectors from './project.request/form';
import tags, * as TagSelectors from './tags';
import auth, * as AuthSelectors from './authorization';
const reducer = combineReducers({
    faculties,
    majors,
    projectRequestForm,
    tags,
    auth,
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

//Tag Selectors
export const getTags = state => TagSelectors.getTags(state.tags);

//Auth Selectors
export const getAuthToken = state => AuthSelectors.getAuthToken(state.auth);
export const isAuthenticating = state => AuthSelectors.getIsAuthenticating(state.auth);
export const getAuthenticationError = state => AuthSelectors.getAuthenticatingError(state.auth);
export const getAuthUserID = state => AuthSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => AuthSelectors.getAuthExpiration(state.auth);
export const getAuthUser = state => AuthSelectors.getAuthUser(state.auth);





