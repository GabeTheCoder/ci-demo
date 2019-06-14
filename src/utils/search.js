
export default (searchArray, query) => {
    return searchArray.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase());
    });
};
