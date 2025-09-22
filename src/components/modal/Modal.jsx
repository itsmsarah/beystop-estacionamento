
import { Modal, TouchableWithoutFeedback } from "react-native";
import {
  ModalOverlay,
  BackgroundModal,
  ModalContent,
  ModalSubtitle,
  ModalContainer
} from "./styles";

export default function ModalBey({ visible, onClose, placa,dataEntrada,horarioEntrada,dataSaida,horarioSaida }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalOverlay>
          <TouchableWithoutFeedback>
            <BackgroundModal>
              <ModalSubtitle>Veículo retirado com sucesso!</ModalSubtitle>
              <ModalContainer>
              <ModalContent>Placa: {placa}</ModalContent>
              <ModalContent>Data/entrada: {dataEntrada}</ModalContent>
              <ModalContent>Horário/entrada: {horarioEntrada}</ModalContent>
               <ModalContent>Data/entrada: {dataSaida}</ModalContent>
              <ModalContent>Horário/entrada: {horarioSaida}</ModalContent>
              </ModalContainer>
            
            </BackgroundModal>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}