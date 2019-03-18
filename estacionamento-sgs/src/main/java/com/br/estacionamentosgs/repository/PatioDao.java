package com.br.estacionamentosgs.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.br.estacionamentosgs.model.Patio;

public interface PatioDao extends CrudRepository<Patio, Long> {
   
   @Query(value = "select sum(qtdVaga) from Patio")
   public int findByTotalVagas();
   
   @Query(value = "select count(*) as vagasOcupadas from Estacionamento where saida is null")
   public int findByTotalVagasOcupadas();

}
