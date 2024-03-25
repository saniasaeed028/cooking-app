package com.fyp.gemzonProject.Controller;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fyp.gemzonProject.DTO.SignUpDTO;

import com.fyp.gemzonProject.Model.SignUpData;
import com.fyp.gemzonProject.Service.GenericWebService;
import com.fyp.gemzonProject.Service.JwtTokenService;
import com.fyp.gemzonProject.Service.ResponseMessage;

@RestController
public class UserController {
	int otp =0;
	@Autowired
	private JwtTokenService jwtTokenService;
	@Autowired
	private GenericWebService genericWebService;
	
	@PostMapping("/signup")
	public ResponseEntity<ResponseMessage> signup(@RequestBody SignUpDTO dto) {
	    SignUpData entity = genericWebService.tosignup(dto);
	    if (genericWebService.isUserExists(entity.getEmail())) {
	        ResponseMessage msg = new ResponseMessage("User already exists. Cannot create duplicate user.");
	        return ResponseEntity.status(HttpStatus.CONFLICT).body(msg);
	    }

	   SignUpData savedEntity = genericWebService.saveUpEntity(entity);
	   int id=savedEntity.getId();
	    ResponseMessage msg = new ResponseMessage("Registration Successfully",id);
	    return ResponseEntity.status(HttpStatus.OK).body(msg);
	}

	@PostMapping("/login")
	public ResponseEntity<ResponseMessage> login(@RequestBody SignUpDTO userDTO) {
		SignUpData user = genericWebService.getByEmail(userDTO.getEmail());
		   if (user == null) {
			   ResponseMessage rm= new ResponseMessage("User not found");
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(rm);
		    }
		String token = jwtTokenService.generateToken(user.getId(),userDTO.getEmail(), userDTO.getPassword(),user.getFirstName(),user.getLastName());
	    String storedPassword = user.getPassword();
	    String enteredPassword = userDTO.getPassword();
	    int role = user.getRole();
	    if (!storedPassword.equals(enteredPassword)) {
	    	ResponseMessage msg= new ResponseMessage("Incorrect password");
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(msg);
	    }
	    ResponseMessage msg= new ResponseMessage("Login Sccessful",role, token);
	    return ResponseEntity.ok(msg);
	}
	

}
