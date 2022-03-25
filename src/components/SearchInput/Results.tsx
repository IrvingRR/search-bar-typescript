import {ListResults} from './Styles';
import Result from './Result';

const Results = function() {
    return(
        <ListResults>
            {/* <h4>No found results</h4> */}
            <Result/>
            <Result/>
            <Result/>
            <Result/>
        </ListResults>
    );
}

export default Results;