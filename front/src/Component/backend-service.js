const back = {
    getRequest: function(url, callback) {
        const param = {
            method: 'GET', 
            header: 'application/json'
        };
        fetch(url, param)
            .then(res => res.json())
            .then(res => callback(res))
            .catch(err => console.error(err))
    },
    postRequest: function(url, body, callback) {
        const param = {
            method: 'POST', 
            headers: { 'Content-type': 'application/json' }, 
            body: body
        };
        fetch(url, param)
            .then(res => res.json())
            .then(res => callback(res))
            .catch(err => console.error(err))
    },
    updateRequest: function(url, body, callback) {
        const param = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: body
        };
        fetch(url, param)
            .then(res => res.json())
            .then(res => callback(res))
            .catch(err => console.error(err))
    },
    deleteRequest: function(url, body, callback) {
        const param = {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: body
        };
        fetch(url, param)
            .then(res => res.json())
            .then(res => callback(res))
            .catch(err => console.error(err))
    }
}
export default back;