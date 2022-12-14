import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    const { username, password, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/");
    };
    return (
        <div className='container size_mian'>
            <h2 className="text-center m-4">로그인</h2>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label hemlFor="Name" className='form-label'>
                        아이디
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="ID를 입력해주세요"
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label hemlFor="Name" className='form-label'>
                        비밀번호
                    </label>
                    <input
                        type={"password"}
                        className="form-control"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        value={password}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>


                <div className='my-5  justify-content-md-end'>
                    <button type="submit" className='btn btn-outline-primary'>
                        제출</button>

                    <Link className='btn btn-outline-danger mx-2' to='/'>
                        취소</Link>
                    <div className='login_1'>
                        <Link className='login_1' to='/adduser'>
                            회원가입</Link>
                        <br />

                    </div>


                </div>
            </form>

        </div>
    )
}
