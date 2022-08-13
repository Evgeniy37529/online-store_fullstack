import { Button, Modal } from 'react-bootstrap';
import { setError } from '../store/reducers/userSlice';
import { useAppDispatch } from '../store/hooksStore';
import { IAuthModal } from '../typesApp/AuthModal';

export const AuthModal: React.FC<IAuthModal> = (props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    props.onHide();
    dispatch(setError(''));
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => handleClick()}
      //onClick={handleClick}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
