import { ContainerDataEntrada, ContainerInputVeiculos, ContentDataEntrada, ContentVeiculos, LabelVeiculos, SubtitleVeiculos, VeiculosComponent } from "./styles";
import api from "../../../api";

export default function AmostraVeiculos() {
      const{placa,setPlaca} = useState('')
      const{dataEntrada,setDataEntrada} = useState('')
      const{horarioEntrada,setHorarioEntrada}= useState('')
      ****/-9

      function veiculosAtivos(){
        api.get(`/api/veiculos`)
      }
    return (
        <VeiculosComponent>
            <SubtitleVeiculos>{placa}</SubtitleVeiculos>
            <ContainerInputVeiculos>

                <ContentVeiculos>
                    <LabelVeiculos>Data/Entrada</LabelVeiculos>
                    <ContainerDataEntrada>
                        <ContentDataEntrada>{dataEntrada}</ContentDataEntrada>
                    </ContainerDataEntrada>
                </ContentVeiculos>


                <ContentVeiculos>
                    <LabelVeiculos>Horário/Entrada</LabelVeiculos>
                    <ContainerDataEntrada>
                        <ContentDataEntrada>{horarioEntrada}</ContentDataEntrada>
                    </ContainerDataEntrada>
                </ContentVeiculos>
            </ContainerInputVeiculos>

        </VeiculosComponent>
    )
}