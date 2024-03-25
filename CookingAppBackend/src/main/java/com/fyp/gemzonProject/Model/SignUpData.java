package com.fyp.gemzonProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

	@Entity
	@Table(name = "Registered Users")
	public class SignUpData {

		@Id
		@GeneratedValue 
	private int id;
	private String email;
	private String password;
	private String FirstName;
	private String LastName;
	private String PhoneNo;
	private String PostalCode;
	private String City;
	private String Country;
	private int role;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		PhoneNo = phoneNo;
	}
	public String getPostalCode() {
		return PostalCode;
	}
	public void setPostalCode(String postalCode) {
		PostalCode = postalCode;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	public String getCountry() {
		return Country;
	}
	public void setCountry(String country) {
		Country = country;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public SignUpData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SignUpData(int id, String email, String password, String firstName, String lastName, String phoneNo,
			String postalCode, String city, String country, int role) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		FirstName = firstName;
		LastName = lastName;
		PhoneNo = phoneNo;
		PostalCode = postalCode;
		City = city;
		Country = country;
		this.role = role;
	}
	
}
