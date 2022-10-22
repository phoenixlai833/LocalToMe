import { useState } from 'react'
import Search from '../../components/Search';

export default function Community() {
    const [searchIndex, setSearchIndex] = useState('prod_foodbank');

    return (
        <div>
        <Search indexName={searchIndex}/>
        </div>
    );   
}