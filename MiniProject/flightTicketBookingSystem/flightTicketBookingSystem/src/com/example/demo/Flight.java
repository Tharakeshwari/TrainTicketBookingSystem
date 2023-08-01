package com.example.demo;

import java.sql.Date;
import java.sql.Time;

public class Flight {

	private int flightid;
	private String airlinesname;
	public Flight(int flightid, String airlinesname, String splace, String dplace, Time atime, Time dtime,
			int availableseats, Date journeydate) {
		super();
		this.flightid = flightid;
		this.airlinesname = airlinesname;
		this.splace = splace;
		this.dplace = dplace;
		this.atime = atime;
		this.dtime = dtime;
		this.availableseats = availableseats;
		this.journeydate = journeydate;
	}
	@Override
	public String toString() {
		return "Flight [flightid=" + flightid + ", airlinesname=" + airlinesname + ", splace=" + splace + ", dplace="
				+ dplace + ", atime=" + atime + ", dtime=" + dtime + ", availableseats=" + availableseats
				+ ", journeydate=" + journeydate + "]";
	}
	public int getFlightid() {
		return flightid;
	}
	public void setFlightid(int flightid) {
		this.flightid = flightid;
	}
	public String getAirlinesname() {
		return airlinesname;
	}
	public void setAirlinesname(String airlinesname) {
		this.airlinesname = airlinesname;
	}
	public String getSplace() {
		return splace;
	}
	public void setSplace(String splace) {
		this.splace = splace;
	}
	public String getDplace() {
		return dplace;
	}
	public void setDplace(String dplace) {
		this.dplace = dplace;
	}
	public Time getAtime() {
		return atime;
	}
	public void setAtime(Time atime) {
		this.atime = atime;
	}
	public Time getDtime() {
		return dtime;
	}
	public void setDtime(Time dtime) {
		this.dtime = dtime;
	}
	public int getAvailableseats() {
		return availableseats;
	}
	public void setAvailableseats(int availableseats) {
		this.availableseats = availableseats;
	}
	public Date getJourneydate() {
		return journeydate;
	}
	public void setJourneydate(Date journeydate) {
		this.journeydate = journeydate;
	}
	private String splace;
	private String dplace;
	private Time atime;
	private Time dtime;
	private int availableseats;
	private Date journeydate;
}
