import React from 'react';

const Modal = (props) => {
    console.log(props);
    const {image_link, description, integrations, features} = props.singleData;
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{description}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                        <figure>
                           <img src={image_link && image_link[0]} alt="" />
                        </figure>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;