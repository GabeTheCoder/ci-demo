
export default (searchArray, query) => {
    return searchArray.filter(item => {
        return item.includes(query);
    });
};
