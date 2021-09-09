import { useState } from "react";
const useStorage = () => {
    const [ listStudent, setListStudent ] = useState(["Huyen", "Hoa", "Hung", "Long"]);
    const [ inputName, setInputName ] = useState("");
    const [ inputedName, setInputedName ] = useState("");

    const handleChange = (e) => setInputName(e.target.value);



    const onClick = (e) => {
        e.preventDefault();
        setInputedName(inputName);
    };
    return [listStudent, inputName, inputedName, handleChange, onClick];
}

export default useStorage;