package com.br.estacionamentosgs.repository;

import org.springframework.data.repository.CrudRepository;

import com.br.estacionamentosgs.model.Usuario;

public interface UsuarioDao extends CrudRepository<Usuario, Long> {

   public Usuario findByLogin(String email);

}
