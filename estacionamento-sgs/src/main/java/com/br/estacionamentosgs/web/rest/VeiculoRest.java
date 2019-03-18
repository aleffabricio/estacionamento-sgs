package com.br.estacionamentosgs.web.rest;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.estacionamentosgs.model.Cliente;
import com.br.estacionamentosgs.model.Estacionamento;
import com.br.estacionamentosgs.model.Veiculo;
import com.br.estacionamentosgs.repository.ClienteDao;
import com.br.estacionamentosgs.repository.EstacionamentoDao;
import com.br.estacionamentosgs.repository.VeiculoDao;

@RestController
public class VeiculoRest {

   @Autowired
   private VeiculoDao veiculoDAO;

   @Autowired
   private ClienteDao clienteDAO;

   @Autowired
   private EstacionamentoDao estacionamentoDAO;

   @RequestMapping(value = "/novo/veiculo", method = RequestMethod.POST)
   public Veiculo salvar(@RequestBody Veiculo veiculo) throws Exception {

      salvarCliente(veiculo.getCliente());
      salvarEstacionamento(veiculo);

      return veiculoDAO.save(veiculo);
   }

   public Cliente salvarCliente(Cliente c) throws Exception {

      if (c.getCpf() != null) {
         return clienteDAO.save(c);
      }else {
    	  throw new Exception("O Cpf do cliente e obrigatorio.");
      }
   }

   public void salvarEstacionamento(Veiculo veiculo) {
      Estacionamento est = new Estacionamento();

      Date entrada = new Date();
      est.setEntrada(entrada);
      est.setPlaca(veiculo.getPlaca());
      est.setPatio(veiculo.getPatio());

      estacionamentoDAO.save(est);
   }

}
