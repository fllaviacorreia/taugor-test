import React from "react";
import Button from "@/components/elements/button";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import "./style.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import registerDataAdmin from "@/services/registerDataAdmin";
export default function CreateEmployee() {
    const navigate = useNavigate();

    const initUser = {
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        bornDate:'',
        photo:'',
        phone:'',
        gender:'',
        address:'',
        office:'',
        sector:'',
        admissionDate:'',
        salary:'',
        createdAt:'',
        levelAccess: 'minimun',
    }
    
    const [user, setUser] = React.useState(initUser);

    const [errorMessage, setErrorMessage] = React.useState('');

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    const setPhoto = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        } else {
            setUser({...user, ['photo']:''});
        }
        reader.onloadend = function () {
            setUser({...user, ['photo']:reader.result});
        }

    }
    
    const handleSubmit = async (event) => registerDataAdmin(event, setErrorMessage, user, setUser, navigate);

    const handleCancel = () => {
        navigate("/employees");
    };

    return (
        <section className="containerFormGeneral">
            <div className="containerForm">
                <Typography component="h2" variant="h6">
                    Cadastrar novo funcionário
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Typography component="h3" variant="h6">
                        Dados de contato
                    </Typography>
                    <TextField
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Nome"
                        autoFocus
                        value={user.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Sobrenome"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                    />
                    <Grid2 container spacing={2} fullWidth>
                        <img className='imageEmployee' alt='Foto do duncionário' src={user.photo} />
                        <TextField
                            required
                            fullWidth
                            name="photo"
                            label="Foto do perfil"
                            type="file"
                            onChange={setPhoto}
                            id="photo"
                        />
                    </Grid2>

                    <TextField
                        required
                        fullWidth
                        name="address"
                        label="Endereço"
                        type="text"
                        id="address"
                        value={user.address}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"                            
                            value={user.gender}
                            onChange={handleChange}
                            label="Sexo"
                        >
                            <MenuItem value={'female'}>Feminino</MenuItem>
                            <MenuItem value={'male'}>Masculino</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        fullWidth
                        id="phone"
                        label="Telefone"
                        name="phone"
                        type="tel"
                        value={user.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        name="bornDate"
                        label="Data de nascimento"
                        type="date"
                        id="bornDate"
                        value={user.bornDate}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <Typography component="h3" variant="h6">
                        Dados do funcionário
                    </Typography>
                    <Grid container>
                        <TextField
                            required
                            fullWidth
                            name="office"
                            label="Cargo"
                            type="text"
                            id="office"
                            value={user.office}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            name="sector"
                            label="Setor"
                            type="text"
                            id="sector"
                            value={user.sector}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            name="admissionDate"
                            label="Data de admissão"
                            type="date"
                            id="admissionDate"
                            value={user.admissionDate}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            name="salary"
                            label="Salário"
                            type="text"
                            id="salary"
                            value={user.salary}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Typography component="h6" variant="h6" color={'red'} fontSize={15}>
                        {errorMessage}
                    </Typography>

                    <div className="containerButton">
                        <Button
                            title="Salvar"
                            typeButton="input-button"
                            type="submit"
                        />
                        <Button
                            title="Cancelar"
                            typeButton="input-button"
                            onClick={handleCancel}
                        />


                    </div>
                </Box>
            </div>
        </section >
    );
}
