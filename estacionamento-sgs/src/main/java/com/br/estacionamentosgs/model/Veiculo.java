package com.br.estacionamentosgs.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Veiculo {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String placa;
   private String modelo;
   private String cor;
   
   @ManyToOne
   @JoinColumn(nullable = false)
   private Cliente cliente;

   @OneToOne
   @JoinColumn(nullable = false)
   private Patio patio;

   public Long getId() {
      return id;
   }

   public String getPlaca() {
      return placa;
   }

   public void setPlaca(String placa) {
      this.placa = placa;
   }

   public String getModelo() {
      return modelo;
   }

   public void setModelo(String modelo) {
      this.modelo = modelo;
   }

   public String getCor() {
      return cor;
   }

   public void setCor(String cor) {
      this.cor = cor;
   }

   public Cliente getCliente() {
      return cliente;
   }

   public void setCliente(Cliente cliente) {
      this.cliente = cliente;
   }

   public Patio getPatio() {
      return patio;
   }

   public void setPatio(Patio patio) {
      this.patio = patio;
   }

}
