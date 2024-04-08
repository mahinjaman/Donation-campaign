const getDataFromLS = () => {
    const data = localStorage.getItem('donation');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

const setDataFromLS = id => {
    const dataStr = JSON.stringify(id);
    localStorage.setItem('donation', dataStr);
}

const addToLS = id => {
    const getData = getDataFromLS();
    if (getData) {
        getData.push(id);
    }
    setDataFromLS(getData)
}

export { getDataFromLS, addToLS }