import React from 'react';

import './Result.css';

// export default function Result(props) {
//     return(
//     <div className="result">
//         <a href={`/details/${props.document.id}`}>
//             <div className="result">
//                     <h6 className="title-style">{props.document.metadata_storage_name}</h6>
//             </div>
//         </a>
//     </div>
//     );
// }

export default function Result(props) {

    const cardStyle = {
        maxHeight: '18rem',
        display: 'block'
    };

    const bodyStyle = {
        padding: '0.25rem',
        paddingBottom: '0',
        marginBottom: '0'
    };


    const pStyle = {
        paddingLeft: '0.25rem',
        fontSize: '0.9rem'
    };

    const uriStyle = {
        color: 'green',
        paddingLeft: '0.25rem',
        paddingTop: '0',
        paddingBottom: '0',
        marginTop: '0',
        marginBottom: '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };
    // let base64ToString = Buffer.from(props.document.metadata_storage_path, "base64").toString();
    // base64ToString = JSON.parse(base64ToString);
    const norbi = props.document.metadata_storage_path.slice(0, -1)
    let decodedStringAtoB = atob(norbi);
    console.log('base64ToString', decodedStringAtoB)
    return (
        <div className="result row" style={cardStyle}>
            <a href={`/details/${props.document.metadata_storage_path}`}>
                <div style={bodyStyle}>
                    <h6 className="title-style">{props.document.metadata_storage_name}</h6>
                </div>
            </a>
            <p style={uriStyle}>{decodedStringAtoB}</p>
            <p style={pStyle}>
                {props.document.content.substring(0, 500)}
            </p>
        </div>
    );
}
