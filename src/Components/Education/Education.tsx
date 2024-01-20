import { useState } from 'react';
import Carousel from './Carousel/Carousel';
import AddContentButton from './Search/AddContent';
import SearchEducation from './Search/SearchEducation';
import mockData from "../../mock-data.json";

const Education: React.FC = () => {
    const user = mockData[0];
    const [trigger, setTrigger] = useState(false);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SearchEducation />
            <Carousel />
            {/* <AddContentButton trigger={trigger} setTrigger={setTrigger}/> */}
        </div>
    );
};

export default Education;
