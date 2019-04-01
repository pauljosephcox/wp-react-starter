import { APIGet } from '../services/API'

export const configure = (site) => dispatch => {

    dispatch({
        type: 'CONFIGURE',
        payload: {
            site: site,
        }
    });

}
