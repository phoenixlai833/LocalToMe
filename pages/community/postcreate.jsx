import CreationBttn from "../../components/PostCreationButtons"
import { useState } from "react";


export default function PostCreation () {

    const [showColor, setShowColor ] = useState('#108928');


    return <div>
    {showColor &&
        <CreationBttn BttnPressed={()=>setShowColor ? '#108928' : '#085617'}></CreationBttn>
    }
    </div>
}