export const fetchBudget = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/?_embed=comments`);

    return promise;
};

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/comments`);

    return promise;
};