// Global

const GLOBALHOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

// courses

const COURSESHOME = "/courses";
const COURSESNEW = "/courses/new";
const COURSESMINE = "/courses/mine";


// api

const API_DOCUMENTATION = "/api/documentation";

// api-v1

const API_V1BUY = "/api/v1/buy";
const API_V1REFUND = "/api/v1/refund";

// api-v2

const API_V2REMOVE = "/api/v2/remove";
const API_V2EDIT = "/api/v2/edit";

const routes = {
    globalhome: GLOBALHOME,
    join: JOIN,
    login: LOGIN,
    confirmaccount: CONFIRM_ACCOUNT,

    courseshome: COURSESHOME,
    coursesnew: COURSESNEW,
    coursesmine: COURSESMINE,

    apidocumentation: API_DOCUMENTATION,

    apiv1buy: API_V1BUY,
    apiv1refund: API_V1REFUND,

    apiv2remove: API_V2REMOVE,
    apiv2edit: API_V2EDIT

};

export default routes;