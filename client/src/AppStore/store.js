import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import workReducer from "../components/Pages/Experience/expstore";
import educationReducer from "../components/Pages/Education/edustore";
import skillReducer from "../components/Pages/Skills/skillstore";
import detailReducer from "../components/Pages/Details/detailstore";
import templatesReducer from "../components/Templates/resumestore";
import selectedTemplateReducer from "../components/Pages/SelectedTemplate/selectedTemplateStore";
import projectReducer from "../components/Pages/Projects/projectStore";
import languageReducer from "../components/Pages/Skills/languageStore";
import interestReducer from "../components/Pages/Skills/interestStore";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers({
  details: detailReducer,
  work: workReducer,
  education: educationReducer,
  skill: skillReducer,
  project: projectReducer,
  templates: templatesReducer,
  selectedTemplate: selectedTemplateReducer,
  language: languageReducer,
  interest: interestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
