package com.dio.santander.bankline.api.repository;
 
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
 

import com.dio.santander.bankline.api.model.Correntista;
 
@Transactional 

public interface CorrentistaRepository extends JpaRepository<Correntista,Integer>{
	  
}
