import {ContainerInput, Input} from './Styles';
import { FiSearch } from "react-icons/fi";
import Results from './Results';

const InputSearch = function() {
    return(
        <ContainerInput>
            <Input type="text" name="search" placeholder="Search" autoComplete="off"/>
            <FiSearch/>
            <Results/>
        </ContainerInput>
    );
}

export default InputSearch;