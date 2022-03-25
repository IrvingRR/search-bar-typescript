import {ElementResult, Box, ResultBody, Button} from './Styles';
import { FiX } from "react-icons/fi";

const Result = function() {
    return(

        <ElementResult>
            <Box>
                <img src="https://i.imgur.com/cMWqOYz.jpg" alt="Andrea Herrera" />
                <ResultBody>
                    <strong>andrea12548</strong>
                    <p>Andrea Herrera</p>
                </ResultBody>
            </Box>
            <Button>
                <FiX/>  
            </Button>
        </ElementResult>

    );
}

export default Result;