package com.br.estacionamentosgs.repository;

import org.springframework.data.repository.CrudRepository;

import com.br.estacionamentosgs.model.Estacionamento;

public interface EstacionamentoDao extends CrudRepository<Estacionamento, Long> {

}
