package com.br.estacionamentosgs.web.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.estacionamentosgs.model.Cliente;
import com.br.estacionamentosgs.repository.ClienteDao;

import io.swagger.annotations.Api;

@RestController
public class ClienteRest {
   
   @Autowired
   private ClienteDao clienteDAO;
   
   @RequestMapping(value = "/novo/cliente", method = RequestMethod.POST)
   public Cliente salvar(@RequestBody Cliente cliente) {
            
      return clienteDAO.save(cliente);
   }
   
   @RequestMapping(value = "/listar/clientes", method = RequestMethod.GET)
   public List<Cliente> salvar() {
      List<Cliente> listaClientes = new ArrayList<>();
      clienteDAO.findAll().forEach(listaClientes::add);
      return listaClientes;
   }

}
