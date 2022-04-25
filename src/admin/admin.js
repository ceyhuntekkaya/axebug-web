import React, {useEffect} from 'react'
import Menu from './component/Menu'

export default function Admin() {
    useEffect(() => {
        document.body.style.backgroundColor = 'white'; // '#231F20';
        // eslint-disable-next-line 
    }, [])

    return (
        <div className="container">
            <Menu />
            Merhaba...
        </div>
    )
}
