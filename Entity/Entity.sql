create database testdb;
use testdb;
desc Address;
truncate Demo;
desc Hello;
desc FDetails;
desc Employee;
desc q3Model;
desc Address;
desc Department;
drop table Employee;
create database testdb2;
use testdb2;
desc Student;
desc Donor;
desc Appointment;
truncate table Appointment;
drop table Appointment;
select * from Appointment;
delete from appointment where id=4;
drop table Student;
desc Travel;
create database TrainTicketBooking;
use TrainTicketBooking;
create table User(
First_Name varchar(100),
Last_Name varchar(100),
Email varchar(100),
Password_user varchar(100),
City varchar(100),
Mobile_number varchar(10)
);
INSERT INTO User
VALUES("Sri","Mayuri","srimayuri@gmail.com","Sri@162003","Tanjore","9994398459"),
("Sri","Dharshini","sridharshini@gmail.com","Notnow@1617","Tirupur","9342874729"),
("Tharakeshwari","Sankaran","tharakeshwari@gmail.com","Thara@19","Nammakal","9677778459");
create table Train(
Train_no int,
Train_name varchar(100),
Source_place varchar(100),
Dest_place varchar(100),
Arrival_time time,
Depature_time time,
Date_of_journey date);
INSERT INTO Train
VALUES(22640,"Chennai Express","Mumbai","Chennai","02:00:00","12:00:00","2023-06-23"),
(12637,"Pandian Express","Chennai","Madurai","21:20:00","06:45:00","2023-07-21"),
(02084,"Shatabdi Express","Coimbatore","Mayiladuthurai","07:50:00","01:30:00","2023-08-08");

create table Ticket(
Train_no int,
PNR int,
Source_place varchar(100),
Dest_place varchar(100),
Arrival_time time,
Depature_time time,
Distance int,
Class varchar(50),
Fare int);
INSERT INTO Ticket
VALUES(22640,123456789,"Mumbai","Chennai","02:00:00","12:00:00",1099,"Sleeper",1500),
(12637,234567891,"Chennai","Madurai","21:20:00","06:45:00",873,"1 AC",780),
(02084,891234567,"Coimbatore","Mayiladuthurai","07:50:00","01:30:00",580,"General",680);

create table Payment(
User_Name varchar(100),
Recipt_no int,
PaymentType varchar(100),
Bank varchar(100),
Pin int
);
INSERT INTO Payment
VALUES("Sri Mayuri",123,"UPI","SBI Bank",2830),
("Sri Dharshini",234,"Debit","HDFC Bank",2323),
("Tharakeshwari",235,"Credit","IOB Bank",1912);

create table Class(
Train_no int,
Class_Type varchar(100),
Fare int);
INSERT INTO Class
VALUES(22640,"Sleeper",1500),
(22640,"General",340),
(22640,"1 AC",620);
drop database TrainTicketBooking;
create database spring_jwt_security;
use spring_jwt_security;
desc Admin;
desc Payment;
desc hibernate_sequence;
show tables;
drop table Admin;