package com.example.demo;

import java.util.Scanner;


public class FlightManagementSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        FlightController flightController = new FlightController();

        int choice;
        do {
            displayMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume the remaining newline character

            switch (choice) {
                case 1:
                    flightController.displayAvailableFlights();
                    break;
                case 2:
                    flightController.bookTicket(scanner);
                    break;
                case 3:
                    flightController.displayBookedTickets(scanner);
                    break;
                case 4:
                	flightController.cancelTicketByPassengerName(scanner);
                	break;
                case 5:
                    System.out.println("Thank you for using the Flight Management System. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);

        scanner.close();
    }

    private static void displayMenu() {
        System.out.println("Flight Management System");
        System.out.println("1. View Available Flights");
        System.out.println("2. Book a Ticket");
        System.out.println("3. Display Booked Tickets");
        System.out.println("4. Cancel Ticket");
        System.out.println("5. Exit");
        System.out.print("Enter your choice: ");
    }
}