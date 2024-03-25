package com.fyp.gemzonProject.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import java.util.function.Function;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.fyp.gemzonProject.DTO.SignUpDTO;
import com.fyp.gemzonProject.Model.SignUpData;
import com.fyp.gemzonProject.Repository.SignUpRepository;
import com.fyp.gemzonProject.Util.MapperUtils;

@Service
public class GenericWebService {
	@Autowired
	private SignUpRepository r1;

	private static ModelMapper mapper = MapperUtils.getModelMapper();
	
public SignUpData tosignup(SignUpDTO dto) { 
	    if (dto == null) {
	        return null;
	    }
	    SignUpData model= mapper.map(dto,SignUpData.class);

     return model;
	}
public SignUpDTO toDTO(SignUpData dto) { 
    if (dto == null) {
        return null;
    }
    SignUpDTO model= mapper.map(dto,SignUpDTO.class);

 return model;
}

public boolean isUserExists(String username) {
    // Use your repository or data access object to check if a user with the given username exists
    SignUpData existingUser = r1.findByEmail(username);
    return existingUser != null;
}

public SignUpData userdata(int id) {
    // Use your repository or data access object to check if a user with the given username exists
    SignUpData existingUser = r1.findById(id);
    return existingUser;
}
public SignUpData saveUpEntity(SignUpData entity) {
    return r1.save(entity);
}
public SignUpData getByEmail(String email) {
	// TODO Auto-generated method stub
	return r1.findByEmail(email);
}
public SignUpData getById(int email) {
	// TODO Auto-generated method stub
	return r1.findById(email);
}


}
