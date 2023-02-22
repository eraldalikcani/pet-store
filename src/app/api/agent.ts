import axios, { AxiosResponse } from "axios";
import { UserCreds } from "../models/user";


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
    getAvailableUser: (username: string) => requests.get(`user/${username}`),
    loginUser: (username: string, password: string) => requests.get(`user/login?username=${username}&password=${password}`),
    logoutUser: () => requests.get("user/logout")
}

const agent = {
    Catalog,
    User
}

export default agent;
