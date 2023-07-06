/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import GetReportes from "../helpers/getreportes";

export const UseGetReport = (categoria) => {
 
const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
GetReportes(categoria).then((imgs) => {
      setState({
        data: imgs,
      });
    });
  }, []);
  return state;
};