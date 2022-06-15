import React from "react";
import { api_key } from "../constants/apiKEY";
import { BASE_URL } from "../constants/URL";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props) {

    const [CreditData, CreditLoading] = useRequestData({}, `${BASE_URL}${id}/credits?${api_key}`)

    const data = {}


    return (
        <GlobalContext.Provider value={data}>
          {props.children}
        </GlobalContext.Provider>
      );
}