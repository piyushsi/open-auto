import Image from 'next/image';
import IconText from '../IconText';

import {
    faPhone, faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';
import Button from '../Button';

export default function Footer({ onlySocailLinks }) {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.matchMedia("(min-width: 600px)").matches ? setIsMobile(true) : setIsMobile(false)
    })
    return <div className='footer p-primary'>
        {!onlySocailLinks && <div className='flex space-between mb-1 '>
            <div className="flex-center-mobile"><Image src="/logo.png" height={30} width={180} /></div>
            <div className="flex-center-mobile">
                <IconText icon={faPhone} text={"+769 586 4558"} />
                <IconText icon={faEnvelope} classes='mr-0' text={"service@openauto.ca"} />
            </div>
        </div>}
        <div className={`flex ${onlySocailLinks ? (isMobile ? "reverse" : "flex-center-mobile socail-links") : "space-between"} `}>
            {!onlySocailLinks && <div className="flex-center-mobile"><IconText text={"Open Auto @ all rights reserved"} /></div>}
            {(!isMobile && !onlySocailLinks) && <div className="flex-center-mobile">
                <IconText text={"Privacy Policy"} />
                <IconText text={"Terms of use"} />
                <IconText classes='mr-0' text={"Cookie Policy"} />
            </div>}
            <div className="flex-center-mobile">
                <IconText icon={faFacebook} classes='mr-1' iconStyle={{ fontSize: "1.1rem" }} />
                <IconText icon={faTwitter} classes='mr-1' iconStyle={{ fontSize: "1.1rem" }} />
                <IconText icon={faYoutube} classes='mr-1' iconStyle={{ fontSize: "1.1rem" }} />
                <IconText icon={faLinkedin} classes='mr-1' iconStyle={{ fontSize: "1.1rem" }} />
                <IconText icon={faInstagram} classes='mr-0' iconStyle={{ fontSize: "1.1rem" }} />
            </div>
        </div>
    </div>
}