import {combineReducers} from 'redux';

import faculties, * as FacultiesSelectors from './project.request/faculties';
import majors, * as MajorsSelectors from './project.request/majors';
import projectRequestForm, * as ProjectRequestFormSelectors from './project.request/form';
import tags, * as TagSelectors from './tags';
import auth, * as AuthSelectors from './authorization';
import projectRequestApproval, * as ProjectRequestApprovalSelectors from './project.request.approval';
import availableProjects, * as AvailableProjectsSelectors from './available.projects';
import projectRequestEmail from './project.request/project.request.email';

const reducer = combineReducers({
    faculties,
    majors,
    projectRequestForm,
    tags,
    auth,
    projectRequestApproval,
    projectRequestEmail,
    availableProjects,
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
export const isAuthenticated = state => getAuthToken(state) != null;
export const isAuthenticating = state => AuthSelectors.getIsAuthenticating(state.auth);
export const getAuthenticationError = state => AuthSelectors.getAuthenticatingError(state.auth);
export const getAuthUserID = state => AuthSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => AuthSelectors.getAuthExpiration(state.auth);
export const getAuthUser = state => AuthSelectors.getAuthUser(state.auth);

//Project Request Approval Selectors
export const getProjectRequest = (state, id) => 
ProjectRequestApprovalSelectors.getProjectRequest(state.projectRequestApproval, id);
export const getProjectRequests = state => 
ProjectRequestApprovalSelectors.getProjectRequests(state.projectRequestApproval);

export const getProjectRequestImage = (state, id) => 
ProjectRequestApprovalSelectors.getProjectImage(state.projectRequestApproval, id);
export const getProjectRequestImages = state => 
ProjectRequestApprovalSelectors.getProjectImages(state.projectRequestApproval);
export const isFetchingProjectImages = state =>
ProjectRequestApprovalSelectors.getIsFetchingProjectImages(state.projectRequestApproval);

export const getProjectRequestLink = (state, id) => 
ProjectRequestApprovalSelectors.getProjectLink(state.projectRequestApproval, id);
export const getProjectRequestLinks = state => 
ProjectRequestApprovalSelectors.getProjectLinks(state.projectRequestApproval);
export const isFetchingProjectLinks = state =>
ProjectRequestApprovalSelectors.getIsFetchingProjectLinks(state.projectRequestApproval);

export const isFetching = state => 
ProjectRequestApprovalSelectors.getIsFetching(state.projectRequestApproval);
export const getError = state => 
ProjectRequestApprovalSelectors.getError(state.projectRequestApproval);
export const getSelectedProjectRequest = state => 
ProjectRequestApprovalSelectors.getSelectedProjectRequest(state.projectRequestApproval);

//Available Projects Selectors
export const getAvailableProject = (state, id) => 
AvailableProjectsSelectors.getAvailableProject(state.availableProjects, id);
export const getAvailableProjects = state => 
AvailableProjectsSelectors.getAvailableProjects(state.availableProjects);

export const getAvailableProjectImage = (state, id) => 
AvailableProjectsSelectors.getAvailableProjectImage(state.availableProjects, id);
export const getAvailableProjectImages = state => 
AvailableProjectsSelectors.getAvailableProjectImages(state.availableProjects);
export const isFetchingAvailableProjectImages = state =>
AvailableProjectsSelectors.getIsFetchingAvailableProjectImages(state.availableProjects);

export const getAvailableProjectRequestLink = (state, id) => 
AvailableProjectsSelectors.getAvailableProjectLink(state.availableProjects, id);
export const getAvailableProjectRequestLinks = state => 
AvailableProjectsSelectors.getAvailableProjectLinks(state.availableProjects);
export const isFetchingAvailableProjectLinks = state =>
AvailableProjectsSelectors.getIsFetchingAvailableProjectLinks(state.availableProjects);

export const isFetchingAvailableProjects = state => 
AvailableProjectsSelectors.getIsFetching(state.availableProjects);
export const getErrorAvailableProject = state => 
AvailableProjectsSelectors.getError(state.availableProjects);
// export const getSelectedProjectRequest = state => 
// AvailableProjectsSelectors.getSelectedProjectRequest(state.availableProjects)

export const getRecommendedProject = (state, id) =>
AvailableProjectsSelectors.getAvailableProject(state.availableProjects, id);
export const getRecommendedProjects = state =>
AvailableProjectsSelectors.getRecommendedProjects(state.availableProjects);
export const isFetchingRecommendedProjects = state =>
AvailableProjectsSelectors.getIsFetchingRecommendedProjects(state.availableProjects);