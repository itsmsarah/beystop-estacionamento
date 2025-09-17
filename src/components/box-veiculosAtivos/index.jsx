import { ContainerDataEntrada, ContainerInputVeiculos, ContentDataEntrada, ContentVeiculos, LabelVeiculos, SubtitleVeiculos, VeiculosComponent } from "./styles";

export default function AmostraVeiculos({placa,dataEntrada,horarioEntrada}) {
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