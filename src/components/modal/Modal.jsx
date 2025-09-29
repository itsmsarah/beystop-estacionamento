import { Modal, TouchableWithoutFeedback } from "react-native";
import {
  ModalOverlay,
  BackgroundModal,
  ModalContent,
  ModalSubtitle,
  ModalValor,
  ModalInformation,
  ModalMensagem,
  ModalValorContainer
} from "./styles";

// import { useState } from "react";
// import BtnsModal from "../buttonsModal/BtnModal";



export default function ModalBey({ visible, onClose, placa, dataEntrada, horarioEntrada, dataSaida, horarioSaida ,valorTotal}) {
  // const [showPagamentoModal, setShowPagamentoModal] = useState(false)

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
   

      <TouchableWithoutFeedback onPress={onClose}>
        <ModalOverlay>
          <TouchableWithoutFeedback onPress={() => {}}>
            {/* //serve para bloquear o fechamento quando toca dentro do modal */}
            <BackgroundModal>
              <ModalMensagem>
              <ModalSubtitle>Veículo retirado com sucesso!</ModalSubtitle>
              </ModalMensagem>
              <ModalInformation>
                <ModalContent>Placa: {placa}</ModalContent>
                <ModalContent>Data/entrada: {dataEntrada}</ModalContent>
                <ModalContent>Horário/entrada: {horarioEntrada}</ModalContent>
                <ModalContent>Data/saída: {dataSaida}</ModalContent>
                <ModalContent>Horário/saída: {horarioSaida}</ModalContent>
              </ModalInformation>
              <ModalValorContainer>
                <ModalValor>Valor Total: {valorTotal}</ModalValor>
              </ModalValorContainer>
              {/* <BtnBey title={"Finalizar"} onPress={()=> setShowPagamentoModal(true)}/> */}
            </BackgroundModal>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
      {/* <ModalPagts visible={showPagamentoModal} onClose={()=>setShowPagamentoModal(false)}/> */}
    </Modal>
   
  );
}