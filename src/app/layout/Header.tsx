import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import Login from "../../features/account/Login";

export default observer(function NavBar() {
    const { userStore: { userLogged, logout }, modalStore } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    PetStore
                </Menu.Item>
                <Menu.Item as={NavLink} to='/Catalog' name='Catalog' />
                <Menu.Item position='right'>
                    {userLogged ?
                        (<Dropdown pointing='top left' text={userLogged?.username}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                            </Dropdown.Menu>
                        </Dropdown>)
                        : (<Button onClick={() => modalStore.openModal(<Login />)} size='huge' inverted>
                            Login
                        </Button>)
                    }
                </Menu.Item>
            </Container>
        </Menu>
    )
})