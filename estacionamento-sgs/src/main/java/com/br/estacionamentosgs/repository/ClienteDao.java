package com.br.estacionamentosgs.repository;

import org.springframework.data.repository.CrudRepository;

import com.br.estacionamentosgs.model.Cliente;

public interface ClienteDao extends CrudRepository<Cliente, Long> {

}
