import React, {useContext, useState} from 'react';
import UserStats from "./UserStats";
import {UserContext} from "../utils/userContext";
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";

const SideBar = () => {
    const context = useContext(UserContext);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [showNameModal, setShowNameModal] = useState(false);

    const handleCloseAvatar = () => setShowAvatarModal(false);
    const handleShowAvatar = () => setShowAvatarModal(true);
    const handleCloseName = () => setShowNameModal(false);
    const handleShowName = () => setShowNameModal(true);
    return (
        <div className='sidebar'>
            <UserStats
                onClick={() => {
                    setShowAvatarModal(true)
                }}
                onContextMenu={() => {
                    setShowNameModal(true)
                }}/>
            <Modal show={showAvatarModal} onHide={handleCloseAvatar}>
                <Modal.Header>
                    <Modal.Title>insert img link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input style={{width: '100%'}} type={"text"} value={context.avatar}
                           onChange={e => context.setAvatar(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAvatar}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showNameModal} onHide={handleShowName}>
                <Modal.Header>
                    <Modal.Title>write new name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input style={{width: '100%'}} type={"text"} value={context.name}
                           onChange={e => context.setName(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseName}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SideBar;