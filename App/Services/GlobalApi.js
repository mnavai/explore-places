import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyBVpVXdCtGdyQA1ncC4LN1jvpZThzT9vNA";


const nearByPlace = () => axios.get(BASE_URL+ 
    "/nearbysearch/json?"+ 
    "?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant"
    +"&key"+API_KEY);

export default{
    nearByPlace
}