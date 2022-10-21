import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: ""
    });
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email веден некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать одно число"
            },
            min: {
                message: "Пароль должен содержать 8 символов",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                lable="почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                lable="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <div className="mb-4">
                <label htmlFor="validationCustom04" className="form-label">
                    State
                </label>
                <select
                    className="form-select"
                    id="validationCustom04"
                    required
                >
                    <option selected={data.profession === ""} disabled value="">
                        Choose...
                    </option>
                    {professions &&
                        Object.keys(professions).map((professionName) => (
                            <option
                                selected={
                                    professions[professionName]._id ===
                                    data.profession
                                }
                                value={professions[professionName]._id}
                                key={professions[professionName]._id}
                            >
                                {professions[professionName].name}
                            </option>
                        ))}
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
