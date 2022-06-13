import React from 'react';
import Card from './card';

export default props=>{

    const {min,max} = props;
    
    return(
        <Card title="Media dos Números" green>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{(max+min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}