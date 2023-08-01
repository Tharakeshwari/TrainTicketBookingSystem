package com.example.demo;

public class User {


	private int userid;
	private String username;
	private String email;
	private String upassword;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public User(int userid, String username, String email, String upassword) {
		super();
		this.userid = userid;
		this.username = username;
		this.email = email;
		this.upassword = upassword;
	}
	@Override
	public String toString() {
		return "Ticket [userid=" + userid + ", username=" + username + ", email=" + email + ", upassword=" + upassword
				+ "]";
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
}
