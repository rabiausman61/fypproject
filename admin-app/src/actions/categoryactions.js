import { red } from "@material-ui/core/colors";
import axios from "../helpers/axios";
import { categoryConstants } from "./constants";
export const getAllcategory=()=>{
    return async dispatch=>{
dispatch ({
    type:categoryConstants.GET_ALL_CATEGORY_REQUESTS
});
        const res=await axios.get(`/category/getcategories`);
        console.log(res);



        if (res.status===200)
        {
            const {categorylist}=res.data
            dispatch ({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: {categories: categorylist}
            })
        }
        else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                payload: {
                  error: res.data.error
                },
              });
        }
    }
}