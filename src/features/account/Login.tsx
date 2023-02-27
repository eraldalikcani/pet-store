import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header, Label } from "semantic-ui-react";
import { useStore } from "../../app/store/store";
import ModalContainer from "./ModalContainer";
import MyTextInput from "./MyTextInput";

export default observer(function LoginForm() {
    const { userStore } = useStore();
    return (
        <ModalContainer>
            <Formik
                initialValues={{ username: '', password: '', error: null }}
                onSubmit={(username: any, password: any) =>
                    userStore.login(username, password)}
            >
                {({ handleSubmit }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <Header as='h2' content='Login to PetStore' color="teal" textAlign="center" />
                        <MyTextInput placeholder="Username" name='username' />
                        <MyTextInput placeholder="Password" name='password' type='password' />
                        <Button positive content='Login' type="submit" fluid />
                    </Form>
                )}
            </Formik>
        </ModalContainer>
    )
})