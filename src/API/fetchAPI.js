const domain = 'http://localhost:3002';

function fetchFabric(endpoint, method) {
    return async (params = {}) => {

        const options = {
            headers: {
                "Content-Type": 'application/json'
            }
        }

        let getParams = '';
        options.method = method;
        if (method === 'DELETE' || method === 'PATCH' )  getParams += `/${params['id']}`;
        if (method === 'POST' || method === 'PATCH')  options.body = JSON.stringify(params);
        else if(method !== 'GET') {
            getParams += `?`
            for (let key in params) {
                getParams += `${key}=${params[key]}&`;
            }
        }
        const res = await fetch(`${domain}${endpoint}${getParams}`, options);
        return res.json();
    }
}

export const getNotes = fetchFabric('/notes', "GET");
export const addNoteApi = fetchFabric('/notes', "POST");
export const deleteNoteApi = fetchFabric('/notes', "DELETE");
export const editNoteApi = fetchFabric('/notes', "PATCH");

