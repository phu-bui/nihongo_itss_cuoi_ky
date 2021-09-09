import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import useStorage from './hooks/useStorage';

function App() {
    const [listStudent, inputName, inputedName, handleChange, onClick] = useStorage();


    return (
        <div>
            <div className="listName listStudent">
                <p>学生一覧：[Huyen, Hoa, Hung, Long]</p>
            </div>

            <div className="listStudent">検索名前：
            <input className="listStudent" onChange={handleChange}/>
            <button className="button" onClick={onClick}>確定</button>
            </div>
            
            <div className="listStudent">検索名前：{inputName}</div>

            <div className="listName listStudent">
                <p>位置：</p>
                {listStudent.map((element, index) => 
                    inputedName === element ? (
                        <p>{index}</p>
                    ) : (
                        <p></p>
                    )
                )}
                <p></p>
            </div>
        </div>

    );
}

export default App;
