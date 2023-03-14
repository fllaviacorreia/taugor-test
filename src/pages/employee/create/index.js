import React from "react";
import { useNavigate } from "react-router-dom";
import registerDataAdmin from "@/services/create/registerDataAdmin";
import defaultProfile from '@/assets/default-profile.png'
import { getItem } from "@/config/auth";

import SelectGeneral from "@/components/elements/input/select";
import InputGeneral from "@/components/elements/input/input";
import Button from "@/components/elements/button";

import "../style.css";

export default function CreateEmployee() {
    const navigate = useNavigate();
    const atualUser = getItem() === 'administrador@taugor.teste.com';
    const [gender, setGender] = React.useState(''); //guardar o sexo
    const [levelAccess, setLevelAccess] = React.useState(''); //guardar o sexo
    const [urlImage, setUrlImage] = React.useState(defaultProfile); //url para imagem visualizada

    const [errorMessage, setErrorMessage] = React.useState(''); //mensagens de erro

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handleChange2 = (event) => {
        setLevelAccess(event.target.value);
    };

    const setPhoto = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        (file && file.type.match('image.*')) ? reader.readAsDataURL(file) : setUrlImage('');
        reader.onloadend = function () { setUrlImage(reader.result); }
    }

    const handleSubmit = async (event) =>
        registerDataAdmin(event, setErrorMessage, handleRedirect);


    function handleRedirect ( uri ) { navigate(uri) }

    return (
        <section className="containerFormGeneral">
            <div className="containerForm">
                <h2 >
                    Cadastrar novo funcionário
                </h2>
                <form onSubmit={handleSubmit}>
                    <h3> Dados pessoais </h3>
                    <div className="containerRow">
                        <div className="itemForm">
                            <InputGeneral
                                name="firstName"
                                required
                                classess={'general-input '}
                                id="firstName"
                                title="Nome"
                                autoFocus
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input '}
                                id="lastName"
                                title="Sobrenome"
                                name="lastName"
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input'}
                                name="bornDate"
                                title="Data de nascimento"
                                type="date"
                                id="bornDate"
                            />
                        </div>


                        <div className="itemForm">
                            <SelectGeneral
                                required
                                classess={'general-input '}
                                name="gender"
                                value={gender}
                                title="Sexo"
                                onChange={handleChange}
                                items={[{ value: 'female', name: 'Feminino' }, { value: 'male', name: 'Masculino' }]}
                                id="gender" />
                        </div>


                        <div className="itemForm containerInputPhoto">
                            <img className='imageEmployee' alt='Foto do duncionário' src={urlImage} />
                            < InputGeneral
                                classess={'general-input '}
                                name="photo"
                                title="Foto do perfil"
                                type="file"
                                onChange={setPhoto}
                                id="photo"
                            />
                        </div>
                    </div>
                    <h3>
                        Dados de acesso e contato
                    </h3>

                    <div className="containerRow">
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input '}
                                id="phone"
                                title="Telefone"
                                name="phone"
                                type="tel"
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input address-input'}
                                name="address"
                                title="Endereço"
                                type="text"
                                id="address"
                            />
                        </div>
                    </div>
                    <div className="containerRow">
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input address-input'}
                                id="email"
                                title="E-mail"
                                name="email"
                                type="email"
                            />
                        </div>

                        {
                            atualUser
                                ? 
                                    <div className="itemForm">
                                        {<SelectGeneral
                                            required
                                            classess={'general-input select-size'}
                                            name="levelAccess"
                                            title="Nível de acesso"
                                            value={levelAccess}
                                            onChange={handleChange2}
                                            items={[{ value: 'minimum', name: 'Baixo' }, { value: 'medium', name: 'Médio' }]}
                                            id="levelAccess" />}
                                    </div>
                                : <></>

                        }

                        {
                            atualUser && levelAccess === 'medium'
                            ?
                            <div className="itemForm">

                                    <InputGeneral
                                        required
                                        classess={'general-input '}
                                        name="password"
                                        title="Senha"
                                        type="password"
                                        id="password"
                                    /> </div>
                                    :<></>
                        }
                    </div>
                    <h3>
                        Dados do funcionário
                    </h3>
                    <div className="containerRow">
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input '}
                                name="office"
                                title="Cargo"
                                type="text"
                                id="office"
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input '}
                                name="sector"
                                title="Setor"
                                type="text"
                                id="sector"
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input'}
                                name="admissionDate"
                                title="Data de admissão"
                                type="date"
                                id="admissionDate"
                            />
                        </div>
                        <div className="itemForm">
                            <InputGeneral
                                required
                                classess={'general-input '}
                                name="salary"
                                title="Salário"
                                type="number"
                                id="salary"
                            />
                        </div>
                    </div>
                    <h3 className={'errorMessage'}>
                        {errorMessage}
                    </h3>

                    <div className="containerButton">
                        <Button
                            title="Cadastrar"
                            typeButton="input-button"
                            type="submit"
                        />
                        <Button
                            title="Cancelar"
                            typeButton="input-button"
                            onClick={() => handleRedirect('/employees')}
                        />
                    </div>
                </form>
            </div>
        </section >
    );
}
