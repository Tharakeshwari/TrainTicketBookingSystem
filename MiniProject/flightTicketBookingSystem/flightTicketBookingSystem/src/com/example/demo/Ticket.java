package com.example.demo;

public class Ticket {

	
	private int ticketid;
	private String passengername;
	private int flightid;
	private String email;
	private int age;
	public Ticket(int ticketid, String passengername, int flightid, String email, int age) {
		super();
		this.ticketid = ticketid;
		this.passengername = passengername;
		this.flightid = flightid;
		this.email = email;
		this.age = age;
	}
	@Override
	public String toString() {
		return "Ticket [ticketid=" + ticketid + ", passengername=" + passengername + ", flightid=" + flightid
				+ ", email=" + email + ", age=" + age + "]";
	}
	public int getTicketid() {
		return ticketid;
	}
	public void setTicketid(int ticketid) {
		this.ticketid = ticketid;
	}
	public String getPassengername() {
		return passengername;
	}
	public void setPassengername(String passengername) {
		this.passengername = passengername;
	}
	public int getFlightid() {
		return flightid;
	}
	public void setFlightid(int flightid) {
		this.flightid = flightid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
}
