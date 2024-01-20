import { useState } from 'react';
import CardStructure from './ContentCards/CardStructure';
import AddContentButton from './Search/AddContent';
import SearchEducation from './Search/SearchEducation';
import mockData from "../../mock-data.json";

const Education: React.FC = () => {
    const user = mockData[0];
    const [trigger, setTrigger] = useState(false);
    return (
        <div>
            <CardStructure user={user} />
            {/* <AddContentButton trigger={trigger} setTrigger={setTrigger}/> */}
            <SearchEducation />
        </div>
    );
};

export default Education;
