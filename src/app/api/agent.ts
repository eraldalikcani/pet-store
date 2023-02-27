import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { UserCreds } from "../models/user";
import { router } from "../router/Routes";


axios.defaults.baseURL = "https://petstore.swagger.io/v2/";

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),//get the data out the response itself
}

//create an object to store our requests for our catalog of available pets
const Catalog = {
    list: () => requests.get("pet/findByStatus?status=available"),
}

const User = {
    current: (username: string) => requests.get(`user/${username}`),
    login: (username: string, password: string) => requests.get(`user/login?username=${username}&password=${password}`),
    logout: () => requests.get("user/logout")
}

const agent = {
    Catalog,
    User
}

export default agent;
