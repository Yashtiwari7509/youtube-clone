import React, { createContext, useState, useEffect } from "react";

import  {fetchDataFromApi}  from "../utils/api.js";

export const Context = createContext();

export const AppContext = (props) => {
     const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect (() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            console.log(res);
            setSearchResult(res)
            setLoading(false);
        })
    }

    return  (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
};