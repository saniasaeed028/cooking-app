package com.fyp.gemzonProject.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fyp.gemzonProject.Model.SignUpData;


@Repository
public interface SignUpRepository extends CrudRepository<SignUpData , Integer > {

		SignUpData findByEmail(String email);
		SignUpData findById(int id);
}


