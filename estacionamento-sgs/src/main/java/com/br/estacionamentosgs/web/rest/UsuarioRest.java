package com.br.estacionamentosgs.web.rest;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.estacionamentosgs.model.Usuario;
import com.br.estacionamentosgs.repository.UsuarioDao;

@RestController
public class UsuarioRest {

   @Autowired
   private UsuarioDao usuarioDAO;

   @RequestMapping(value = "/novo/usuario", method = RequestMethod.POST)
   public Usuario salvar(@RequestBody Usuario usuario) throws NoSuchAlgorithmException, UnsupportedEncodingException {

      String senha = usuario.getSenha();

      if (usuario.getLogin() != null) {
         MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
         algorithm.update(senha.getBytes("UTF-8"));

         usuario.setSenha(new BigInteger(1, algorithm.digest()).toString(16));
      }
      return usuarioDAO.save(usuario);
   }

   @RequestMapping(value = "/login", method = RequestMethod.POST)
   public boolean login(@RequestBody Usuario usuario) throws NoSuchAlgorithmException, UnsupportedEncodingException {

      String senha = usuario.getSenha();

      Usuario u = usuarioDAO.findByLogin(usuario.getLogin());

      MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
      algorithm.update(senha.getBytes("UTF-8"));

      senha = new BigInteger(1, algorithm.digest()).toString(16);

      if (u.getLogin() != null && u.getSenha() == senha) {

         return true;
      }
      return false;
   }

}
