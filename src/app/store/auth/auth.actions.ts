import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const setAuthenticatedUser = createAction(
    '[AUTH] SET USER',
    props<{ authenticatedUser: User}>()
);

export const unsetAuthenticatedUser = createAction('[AUTH] UNSET USER ')