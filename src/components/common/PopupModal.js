import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

const eventProductId = "p003";

const PopupModal = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const popupHistory = JSON.parse(localStorage.getItem("shopee:popup.history"));
        console.log(popupHistory);

        if (popupHistory) {
            setIsVisible(false);
        }
        else{
            setTimeout(() => {
                console.log("delay");
                const history = {
                    time: Date.now(),
                    productId: eventProductId
                };

                localStorage.setItem("shopee:popup.history", JSON.stringify(history));
            }, 5000);
            
        }
    }, []);

    return isVisible && (
        <Modal 
            width={400}
            open={isVisible} 
            footer={null}
            onOk={() => setIsVisible(false)} 
            onCancel={() => setIsVisible(false)}
        >
            <Link to={`/${eventProductId}`}>
                <img 
                    width="100%"
                    src="https://plus.unsplash.com/premium_photo-1691592718395-69d1808a4b3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`${eventProductId}-event`}
                />
            </Link>
        </Modal>
    );
};

export default PopupModal;