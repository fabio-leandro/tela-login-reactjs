import { Button, CardLogin, ContainerRight, Input, Label, TextField, TitleCardLogin } from "./styles";

const Right = () => {

    return(
        <ContainerRight>
            <CardLogin>
                <TitleCardLogin>LOGIN</TitleCardLogin>
                <TextField>
                    <Label for="usuario">Usuário</Label>
                    <Input type="text" name="usuario" placeholder="Usuário"/>
                </TextField>
                <TextField>
                    <Label for="senha">Senha</Label>
                    <Input type="password" name="senha" placeholder="Senha"/>
                </TextField>
                <Button>LOGIN</Button>
            </CardLogin>
        </ContainerRight>
    )
}

export default Right;