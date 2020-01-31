import React, {useState} from "react";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';



const LogginForm = () => {
    let [username_reg, setUsernameRegVar] = useState('');
    let [password_reg, setPasswordRegVar] = useState('');

    function Login(){
        console.log("Brukernavn");
        console.log(setUsernameRegVar);
        console.log("Passord");
        console.log(setPasswordRegVar);

        if (setUsernameRegVar.length > 0 && setPasswordRegVar.length > 0) {
        fetch("/api/login",{
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: setUsernameRegVar,
                password: setPasswordRegVar
            })
        })
            .then((Response) => Response.json())
            .then((Result) => {
                alert(Result);
            })/**/
        }
        else{
            alert("Alle felt må være fylt inn");
        }
    }

    function Register() {
        console.log("Brukernavn");
        console.log(setUsernameRegVar);
        console.log("Passord");
        console.log(setPasswordRegVar);

        if (setUsernameRegVar.length > 0 || setPasswordRegVar.length > 0) {
            alert(setUsernameRegVar);
            fetch("/api/register", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    //'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: setUsernameRegVar,
                    password: setPasswordRegVar
                })
            });
        }
        else{
            alert("Alle felt må være fylt inn");
        }
    }

    function setUsername(e) {
        setUsernameRegVar = e.target.value;
    }

    function setPassword(e) {
        setPasswordRegVar = e.target.value;
    }
    return (
        <div style={{padding:'16px 128px 16px 128px'}}>
            <h1>Loggin</h1>
            <Grid container spacing={8}>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username" label="Username" type="email" fullWidth autoFocus required onChange={setUsername}/>
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username" label="Password" type="password" fullWidth required onChange={setPassword}/>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <FormControlLabel control={
                        <Checkbox
                            color="primary"
                        />
                    } label="Remember me" />
                </Grid>
                <Grid item>
                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                </Grid>
            </Grid>
            <Grid container justify="center"  style={{ marginTop: '10px'}}>
                <Grid>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={Login}>Login</Button>
                </Grid>
                <Grid>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={Register}>Registrer</Button>
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
            </Grid>
        </div>
    );
}

export default LogginForm;