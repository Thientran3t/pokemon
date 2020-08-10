export const callApiPost = (url, method, body = null) => {
    const requestOption = {
        method,
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    return fetch(url, requestOption)
    .then(response => response.json());
}

export const callApiGet = (url, method) => {
    const requestOption = {
        method,
        header: {
            'Content-Type': 'application/json'
        },
    }
    return fetch(url, requestOption)
    .then(response => response.json());
}