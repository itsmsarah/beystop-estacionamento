import React, { useEffect, useState, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import api from "../../../api";
import {
  ContainerDataEntrada,
  ContainerInputVeiculos,
  ContentDataEntrada,
  ContentVeiculos,
  LabelVeiculos,
  SubtitleVeiculos,
  VeiculosComponent,
} from "./styles";

export default function AmostraVeiculos() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const veiculosAtivos = async () => {
    try {
      const res = await api.get(`/api/veiculos`);
       console.log("Resposta da API:", res.data);
      setData(res.data);
    } catch (err) {
      console.log("Erro ao buscar veículos:", err);
    }
  }

  useEffect(() => {
    veiculosAtivos();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    veiculosAtivos().then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item, index }) => {


    return (
      <VeiculosComponent key={index}>
        <SubtitleVeiculos>{item.placa}</SubtitleVeiculos>

        <ContainerInputVeiculos>
          <ContentVeiculos>
            <LabelVeiculos>Data/Entrada</LabelVeiculos>
            <ContainerDataEntrada>
              <ContentDataEntrada>{item.dataEntrada}</ContentDataEntrada>
            </ContainerDataEntrada>
          </ContentVeiculos>

          <ContentVeiculos>
            <LabelVeiculos>Horário/Entrada</LabelVeiculos>
            <ContainerDataEntrada>
              <ContentDataEntrada>{item.horarioEntrada}</ContentDataEntrada>
            </ContainerDataEntrada>
          </ContentVeiculos>
        </ContainerInputVeiculos>
      </VeiculosComponent>
    );
  };
 return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
    
    />
  );
}
