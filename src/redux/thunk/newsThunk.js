import { setNewsList } from "../actions/newsActions";
import { setLoading,clearLoading } from "../actions/appActions";
import axios from "axios";

const url =
"https://newsapi.org/v2/everything?" +
"q=Apple&" +
"from=2022-04-18&" +
"sortBy=popularity&" +
"apiKey=c559cdbabb66421db78dd5e6ff037ff5";


//! getNews fonk başka bir fonk donduruyor. bu durumda çagırken getnews()
export const getNews=()=>{
    return async (dispatch) => {
            try {
              dispatch(setLoading());
              const { data } = await axios.get(url);
              dispatch(setNewsList(data.articles));
            } catch (error) {
              console.log(error);
            } finally {
              dispatch(clearLoading());
            }
            };
    
}
//!!! bu kullanımda getNew bir değişken gibi düşün. çağırken,
//View tarafında getNews şekilde olmalı...
// export const getNews1 = async (dispatch) => {
//             try {
//               dispatch(setLoading());
//               const { data } = await axios.get(url);
//               dispatch(setNewsList(data.articles));
//             } catch (error) {
//               console.log(error);
//             } finally {
//               dispatch(clearLoading());
//             }
//             };

