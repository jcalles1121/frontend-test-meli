import React, {ReactElement} from 'react';
import './FoundProducts.css';
import Ipod1 from '../../assets/IpodTouch-1.png';
import Shipping from '../../assets/ic_shipping@2x.png.png.png';
import Ipod from '../../assets/apple-ipod-touch-2012-00.jpeg';
import Ipod3 from '../../assets/ipodtouch5th.jpeg';
import Ipod4 from '../../assets/Ipod-touch-5g-2.jpeg';


const FoundProducts = (): ReactElement => {
    return (
        <div>
            <div className='product-filter-1'>
                Electrónica, Audio y Vídeo {' > '} Ipod {' > '} Reproductores {' > '} Ipod touch {' > '} 32 GB
            </div>
            <div className='search-container'>
                <div className='search-result-container'>
                    <img className='image-size' src={Ipod1} alt={Ipod1}/>
                    <div>
                        <p className='product-1-price'>
                            $ 1.980
                            <img src={Shipping} alt={Shipping} className='shipping-size'/>
                        </p>
                        <p className='name-product'>
                            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                            <br/>
                            Completo Único!
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='search-result-container'>
                    <img className='image-2-size' src={Ipod3} alt={Ipod3}/>
                    <div>
                        <p className='product-1-price'>
                            $ 1.980
                        </p>
                        <p className='name-product'>
                            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                            <br/>
                            Completo Único!
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='search-result-container'>
                    <img className='image-3-size' src={Ipod} alt={Ipod}/>
                    <div>
                        <p className='product-1-price'>
                            $ 1.980
                            <img src={Shipping} alt={Shipping} className='shipping-size'/>
                        </p>
                        <p className='name-product'>
                            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                            <br/>
                            Completo Único!
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='search-result-container'>
                    <img className='image-4-size' src={Ipod4} alt={Ipod4}/>
                    <div>
                        <p className='product-1-price'>
                            $ 1.980
                        </p>
                        <p className='name-product'>
                            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                            <br/>
                            Completo Único!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FoundProducts;
