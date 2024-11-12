import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.reducer';

export const selectDataState = createFeatureSelector<ProjectsState>('Projectslist');

export const selectabledata = createSelector(
    selectDataState,
    (state: ProjectsState) => state.projectsData
);
export const selectleadData = createSelector(
    selectDataState,
    (state: ProjectsState) => state.leadata
);
export const selectdealData = createSelector(
    selectDataState,
    (state: ProjectsState) => state.dealdata
);
export const selecttaskdata = createSelector(
    selectDataState,
    (state: ProjectsState) => state.tasksdata
);


export const selectDataLoading = createSelector(
    selectDataState,
    (state: ProjectsState) => state.loading
);

export const selectDataError = createSelector(
    selectDataState,
    (state: ProjectsState) => state.error
);


