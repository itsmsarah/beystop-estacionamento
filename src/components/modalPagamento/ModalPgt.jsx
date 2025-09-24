import { ModalCaption, ModalOverlay, ModalSubtitle,ModalInstrucao } from "../modal/styles";
import { Modal, TouchableWithoutFeedback, Image } from "react-native";
import { BackgroundModalPagt, ModalContainerCard, ModalInstrucao, ModalPagtDiv } from "./styles";
import IconCard from '../../assets/icon-card.png'
import IconPix from '../../assets/icon-pix.png'

export default function ModalPagts({ visible, onClose }) {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <ModalOverlay>
      <TouchableWithoutFeedback onPress={onClose}>
        <BackgroundModalPagt>
          <ModalSubtitle>Método de pagamento</ModalSubtitle>
          <ModalInstrucao>Selecione uma forma de pagamento</ModalInstrucao>
          <ModalPagtDiv>
            <ModalContainerCard>
                <Image source = {IconCard} title = "icon de um cartão crédito"/>
                <ModalCaption>Cartão de Crédito/Débito</ModalCaption>
            </ModalContainerCard>
          </ModalPagtDiv>
        </BackgroundModalPagt>
      </TouchableWithoutFeedback>

        </ModalOverlay>
    </Modal>
  );
}