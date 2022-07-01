import Image from 'next/image';
import IconText from '../IconText';

import {
    faPhone, faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Button from '../Button';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.matchMedia("(min-width: 600px)").matches ? setIsMobile(true) : setIsMobile(false)
    })
    return <div className='header flex space-between bg-primary p-primary'>
        <div><Image src="/logo.png" height={30} width={180} /></div>
        {isMobile && <div>
            <IconText icon={faPhone} text={"+769 586 4558"} />
            <IconText icon={faEnvelope} text={"service@openauto.ca"} />
            <Button text={'Download the mobile app'} />
        </div>}
    </div>
}