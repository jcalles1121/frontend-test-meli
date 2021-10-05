import React, {ReactElement} from "react";
import './SelectedProduct.css';
import ipod from "../../assets/apple-ipod-touch-2012-00.jpeg";

const SelectedProduct = (): ReactElement => {
    return (
        <div>
            <div className='product-filter'>
                Electrónica, Audio y Vídeo {' > '} Ipod {' > '} Reproductores {' > '} Ipod touch {' > '} 32 GB
            </div>
            <div className='product-container'>
                <div className='product-price-container'>
                    <img className='ipod-size' src={ipod} alt={ipod}/>
                    <div>
                        <p className='product-price-description'>
                            Nuevo - 234 vendidos
                        </p>
                        <p className='product-price-title'>
                            Ipod Touch - Apple
                        </p>
                        <p className='product-price'>
                            $ 1.980
                        </p>
                        <button className='buy-button' type="submit">Comprar</button>
                    </div>
                </div>
                <div className='margin-component'>
                    <h2 className='description-title'>Descripción del Producto</h2>
                    <p className='description'>
                        ¿Te gusta la música? El iPod touch ahora ofrece hasta 256 GB de almacenamiento para que puedas
                        guardar más canciones que nunca. Suscríbete a Apple Music para escuchar más de 75 millones de
                        canciones y descargar tus favoritas, o llena tu iPod touch con las que más te gustan del iTunes
                        Store.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SelectedProduct;
