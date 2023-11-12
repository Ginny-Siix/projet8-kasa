/* eslint-disable react/prop-types */
import Source_1 from '../../assets/image_source_1.svg';
import Source_2 from '../../assets/Image_source_2.png';

import './banner.css';

export default function Banner({ aboutPage = false}) {
return (
<div className="banner">
<img src={aboutPage ? Source_2 : Source_1} alt="image du body" />
 {!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
</div>
    
    )
}


