package com.br.estacionamentosgs.web.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.estacionamentosgs.model.Patio;
import com.br.estacionamentosgs.repository.PatioDao;

@RestController
public class PatioRest {

   @Autowired
   private PatioDao patioDAO;

   @RequestMapping(value = "/novo/patio", method = RequestMethod.POST)
   public Patio salvar(@RequestBody Patio patio) {
      
      if(patio.getDescricao() != null){
         return patioDAO.save(patio);
      }else {
    	  return null;
      }
   }

   @RequestMapping(value = "/excluir/patio", method = RequestMethod.POST)
   public void excluir(@RequestBody Patio patio) {

      patioDAO.deleteById(patio.getId());
   }

   @RequestMapping(value = "/listar/patios", method = RequestMethod.GET)
   public List<Patio> listar() {

      List<Patio> patios = new ArrayList<Patio>();
      patioDAO.findAll().forEach(patios::add);

      return patios;
   }
   
   @RequestMapping(value = "/total/vagas", method = RequestMethod.GET)
   public Map<String, Integer> listarVagas() {

      Map<String, Integer> map = new HashMap<>();
      
      int totalVagas = patioDAO.findByTotalVagas();
      int totalVagasOcupadas = patioDAO.findByTotalVagasOcupadas();
      int totalVagasLivres = totalVagas - totalVagasOcupadas;
      
      map.put("totalVagasOcupadas", totalVagasOcupadas);
      map.put("totalVagasLivres", totalVagasLivres);
      map.put("qtdVagas", totalVagas);

      return map;
   }

}
