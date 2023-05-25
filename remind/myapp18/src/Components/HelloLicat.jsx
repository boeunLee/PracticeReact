import { useContext } from "react";
import {User} from "./Context";

function HelloLicat(){
    const {key,value} = useContext(User);
    return(
        <div>
            <h2>hello, {key}</h2>
            <strong>id is {value}</strong>
        </div>
    )
}

export default HelloLicat;