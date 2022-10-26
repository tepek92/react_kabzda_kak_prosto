import React, {useState} from 'react';
import './App.css';
import {Rating, ValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {UncontrolledOnOff} from "./components/UncontrolledOnOf/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOf/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<ValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean> (false);

    const onClickCollapsed = () => {
        setCollapsed(!collapsed);
    }
    const onChangeOnOf = (on: boolean) => {
        setOn(on);
    }


    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*Article 2*/}
            {/*<Accordion title={"User"} collapsed={false}/>*/}
            {/*<Accordion title={"Menu"} collapsed={collapsed} onClickCollapsed={onClickCollapsed}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />
            <OnOff on={on} onChangeOnOf={onChangeOnOf}/>
            {/*<UncontrolledOnOff onChangeOnOf={onChangeOnOf}/> {on.toString()}*/}


            {/*<UncontrolledAccordion title={"Menu"}/>*/}
            {/*<UncontrolledAccordion title={"User"}/>*/}
            {/*<UncontrolledRating />*/}

        </div>
    );
}

export default App;