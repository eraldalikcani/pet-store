import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://petstore.swagger.io/v2/pet/";

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),//get the data out the response itself
}

//create an object to store our requests for our catalog of available pets
const Catalog = {
    list: () => requests.get("findByStatus?status=available"),
}


const agent = {
    Catalog
}

export default agent;
