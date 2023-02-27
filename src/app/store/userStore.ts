import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { User } from "../models/user";
import { router } from "../router/Routes";
import { store } from "./store";

export default class UserStore {
    userLogged: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.userLogged;
    }

    login = async (username: string, password: string) => {
        try {
            const user = await agent.User.login(username, password);
            runInAction(() => this.userLogged = user);
            router.navigate('/Catalog');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        this.userLogged = null;
        router.navigate('/');
    }

    getUser = async (username: string) => {
        try {
            const user = await agent.User.current(username);
            runInAction(() => this.userLogged = user);
        } catch (error) {
            console.log(error);
        }
    }

    setDisplayName = (username: string) => {
        if (this.userLogged) this.userLogged.username = username;
    }
}