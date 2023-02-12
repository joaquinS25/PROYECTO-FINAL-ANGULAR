import { createReducer, on } from "@ngrx/store";
import produce from "immer";
import { User } from "src/app/models/user.model";
import { setAuthenticatedUser, unsetAuthenticatedUser } from "./auth.actions";

export interface AuthState {
    authenticatedUser: User | null;
}

const initialState: AuthState = {
    authenticatedUser: null,
};

export const authReducer = createReducer(
    initialState,
    on(setAuthenticatedUser, (state, {authenticatedUser }) => {
        return produce(state, draft => {
            draft.authenticatedUser = authenticatedUser
        })
    }),
    on(unsetAuthenticatedUser, (state) => ({...state, authenticatedUser: null})) 
)