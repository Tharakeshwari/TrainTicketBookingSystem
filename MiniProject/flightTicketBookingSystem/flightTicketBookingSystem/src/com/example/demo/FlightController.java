package com.example.demo;

import java.sql.*;

import java.util.Scanner;
abstract class FlightEntity {
    protected int id;
    protected String passengerName;

    public FlightEntity(int id, String passengerName) {
        this.id = id;
        this.passengerName = passengerName;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }
    public abstract void displayInfo();
    public abstract double calculateTicketPrice();
}

class Flightt extends FlightEntity {
    private String airlinesName;
    private String sourcePlace;
    private String destinationPlace;
    private String arrivalTime;
    private String departureTime;
    private String journeyDate;
    private int availableSeats;

    public int getAvailableSeats() {
        return availableSeats;
    }
    public Flightt(int id, String passengerName, String airlinesName, String sourcePlace, String destinationPlace,
                  String arrivalTime, String departureTime, String journeyDate, int availableSeats) {
        super(id, passengerName);
        this.airlinesName = airlinesName;
        this.sourcePlace = sourcePlace;
        this.destinationPlace = destinationPlace;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.journeyDate = journeyDate;
        this.availableSeats = availableSeats;
    }
    @Override
    public double calculateTicketPrice() {
      
        double basePrice = 10000.0;
        double surcharge = (1000.0 - availableSeats) * 4.0; 
        return basePrice + surcharge;
    }
    @Override
    public void displayInfo() {
        System.out.println("Flight ID: " + id);
        System.out.println("Airlines Name: " + airlinesName);
        System.out.println("Source Place: " + sourcePlace);
        System.out.println("Destination Place: " + destinationPlace);
        System.out.println("Arrival Time: " + arrivalTime);
        System.out.println("Departure Time: " + departureTime);
        System.out.println("Journey Date: " + journeyDate);
        System.out.println("Available Seats: " + availableSeats);


        System.out.println("-----------------------------------");
    }
}

class Tickett extends FlightEntity {
    private String email;
    private int age;
    
    private int availableSeats;

    public int getAvailableSeats() {
        return availableSeats;
    }
    public Tickett(int id, String passengerName, String email, int age) {
        super(id, passengerName);
        this.email = email;
        this.age = age;
    }
    @Override
    public void displayInfo() {
        System.out.println("Ticket ID: " + id);
        System.out.println("Passenger Name: " + passengerName);
        System.out.println("Email: " + email);
        System.out.println("Age: " + age);
        
        
        System.out.println("-----------------------------------");
    }
    @Override
    public double calculateTicketPrice() {
       
        double basePrice = 10000.0;
        double surcharge = (1000.0 - availableSeats) * 4.0; 
        return basePrice + surcharge;
    }
}

public class FlightController {
    private Connection connection;

    public FlightController() {
        try {
            connection = DatabaseConnector.getConnection();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private FlightEntity[] fetchAvailableFlights() throws SQLException {
        String sql = "SELECT * FROM flight WHERE availableseats > 0";

        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery(sql);

        int rowCount = 0;
        while (resultSet.next()) {
            rowCount++;
        }

        resultSet.beforeFirst();

        FlightEntity[] flights = new FlightEntity[rowCount];
        int index = 0;
        while (resultSet.next()) {
            int flightId = resultSet.getInt("flightid");
            String airlinesName = resultSet.getString("airlinesname");
            String sourcePlace = resultSet.getString("splace");
            String destinationPlace = resultSet.getString("dplace");
            String arrivalTime = resultSet.getString("atime");
            String departureTime = resultSet.getString("dtime");
            String journeyDate = resultSet.getString("journeydate");
            int availableSeats = resultSet.getInt("availableseats");

            flights[index] = new Flightt(flightId, airlinesName, sourcePlace, destinationPlace,
                    arrivalTime, departureTime, journeyDate, journeyDate, availableSeats);
            index++;
        }

        resultSet.close();
        statement.close();

        return flights;
    }
    public void displayAvailableFlights() {
        try {
            FlightEntity[] flights = fetchAvailableFlights();

            System.out.println("Available Flights:");
            for (FlightEntity flight : flights) {
                flight.displayInfo();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void bookTicket(Scanner scanner) {
        try {
            displayAvailableFlights(); 

            System.out.print("Enter Flight ID to book a ticket: ");
            int flightId = scanner.nextInt();
            scanner.nextLine(); 

            String checkFlightQuery = "SELECT COUNT(*) FROM flight WHERE flightid = ? AND availableseats > 0";
            PreparedStatement checkFlightStatement = connection.prepareStatement(checkFlightQuery);
            checkFlightStatement.setInt(1, flightId);
            ResultSet resultSet = checkFlightStatement.executeQuery();

            int countAvailableFlights = resultSet.next() ? resultSet.getInt(1) : 0;

            if (countAvailableFlights == 1) {
               
                System.out.print("Enter Passenger Name: ");
                String passengerName = scanner.nextLine();

                System.out.print("Enter Passenger Age: ");
                int age = scanner.nextInt();
                scanner.nextLine();

                System.out.print("Enter Passenger Email: ");
                String email = scanner.nextLine();

              
                String insertTicketQuery = "INSERT INTO ticket (passengername, email, flightid, age) VALUES (?, ?, ?, ?)";
                PreparedStatement insertTicketStatement = connection.prepareStatement(insertTicketQuery);
                insertTicketStatement.setString(1, passengerName);
                insertTicketStatement.setString(2, email);
                insertTicketStatement.setInt(3, flightId);
                insertTicketStatement.setInt(4, age);
                insertTicketStatement.executeUpdate();

               
                String updateFlightQuery = "UPDATE flight SET availableseats = availableseats - 1 WHERE flightid = ?";
                PreparedStatement updateFlightStatement = connection.prepareStatement(updateFlightQuery);
                updateFlightStatement.setInt(1, flightId);
                updateFlightStatement.executeUpdate();

                System.out.println("Ticket booked successfully!");
            } else {
                System.out.println("Flight does not exist or has no available seats.");
            }

            checkFlightStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public void cancelTicketByPassengerName(Scanner scanner) {
        try {
            System.out.print("Enter Passenger Name to cancel ticket: ");
            String passengerName = scanner.nextLine();

           
            String checkTicketQuery = "SELECT COUNT(*) FROM ticket WHERE passengername = ?";
            PreparedStatement checkTicketStatement = connection.prepareStatement(checkTicketQuery);
            checkTicketStatement.setString(1, passengerName);
            ResultSet resultSet = checkTicketStatement.executeQuery();

            int countTickets = resultSet.next() ? resultSet.getInt(1) : 0;

            if (countTickets > 0) {
               
                String getFlightIdQuery = "SELECT flightid FROM ticket WHERE passengername = ?";
                PreparedStatement getFlightIdStatement = connection.prepareStatement(getFlightIdQuery);
                getFlightIdStatement.setString(1, passengerName);
                ResultSet flightIdResult = getFlightIdStatement.executeQuery();

                String deleteTicketQuery = "DELETE FROM ticket WHERE passengername = ?";
                PreparedStatement deleteTicketStatement = connection.prepareStatement(deleteTicketQuery);

                String updateFlightQuery = "UPDATE flight SET availableseats = availableseats + 1 WHERE flightid = ?";
                PreparedStatement updateFlightStatement = connection.prepareStatement(updateFlightQuery);

                while (flightIdResult.next()) {
                    int flightId = flightIdResult.getInt("flightid");
                    deleteTicketStatement.setString(1, passengerName);
                    deleteTicketStatement.executeUpdate();

                    updateFlightStatement.setInt(1, flightId);
                    updateFlightStatement.executeUpdate();
                }

                System.out.println("Tickets for passenger " + passengerName + " canceled successfully!");
            } else {
                System.out.println("No tickets found for passenger " + passengerName + ".");
            }

            checkTicketStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public void displayBookedTickets(Scanner scanner) {
        System.out.print("Enter Passenger Name to view booked tickets: ");
        String passengerName = scanner.nextLine();
        
        try {
            String sql = "SELECT t.ticketid, t.passengername, t.email, t.age, t.flightid, f.airlinesname, f.splace, f.dplace, f.atime, f.dtime, f.journeydate " +
                    "FROM ticket t " +
                    "INNER JOIN flight f ON t.flightid = f.flightid " +
                    "WHERE t.passengername = ? AND t.flightid IN (SELECT flightid FROM flight WHERE availableseats > 0)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, passengerName);
            ResultSet resultSet = statement.executeQuery();

            System.out.println("Booked Tickets for " + passengerName + ":");
            boolean find=false;
            while (resultSet.next()) {
            	find=true;
                int ticketId = resultSet.getInt("ticketid");
                String passenger = resultSet.getString("passengername");
                String email = resultSet.getString("email");
                int flightId = resultSet.getInt("flightid");
                int age = resultSet.getInt("age");

                System.out.println("Ticket ID: " + ticketId);
                System.out.println("Passenger Name: " + passenger);
                System.out.println("Email: " + email);
                System.out.println("Flight ID: " + flightId);
                System.out.println("Age: " + age);

                String airlinesName = resultSet.getString("airlinesname");
                String sourcePlace = resultSet.getString("splace");
                String destinationPlace = resultSet.getString("dplace");
                String arrivalTime = resultSet.getString("atime");
                String departureTime = resultSet.getString("dtime");
                String journeyDate = resultSet.getString("journeydate");

                System.out.println("Flight Details:");
                System.out.println("Airlines Name: " + airlinesName);
                System.out.println("Source Place: " + sourcePlace);
                System.out.println("Destination Place: " + destinationPlace);
                System.out.println("Arrival Time: " + arrivalTime);
                System.out.println("Departure Time: " + departureTime);
                System.out.println("Journey Date: " + journeyDate);

                Tickett ticket = new Tickett(ticketId, passenger, email, age);
                double ticketPrice = ticket.calculateTicketPrice();
                System.out.println("Ticket Price: $" + ticketPrice);

                System.out.println("-----------------------------------");
            }

            statement.close();
            if(find==false) {
            	System.out.println("No tickets found for passenger name "+passengerName);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    }
