# Cypress Automation Testing

This repository contains automated tests for the GymMaster application using Cypress.

## Test Overview

The test suite covers various functionalities of the GymMaster application:

### Authentication Tests
- User registration
- Login functionality
- Password reset
- Logout process

### Admin Functionality Tests
- User list view
- Plan management
- Feedback management

### User Functionality Tests
- Profile management
- Plan subscription

## Test Structure

Tests are organized in the `cypress/e2e` directory:

- `cypress/e2e/Yashini/` - Authentication tests
- `cypress/e2e/Dinesha/` - Plan management tests
- `cypress/e2e/Sewwandi/` - Contact functionality tests
- `cypress/e2e/Tharidu/` - Feedback functionality tests

All tests were developed and contributed by Yashini.

## Running the Tests

To run the tests locally:

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application locally
4. Run Cypress tests:
   ```
   npx cypress open
   ```
   or run in headless mode:
   ```
   npx cypress run
   ```

## Test Priorities

Tests are tagged with priorities to indicate their importance:
- Priority 1: Critical functionality (e.g., Registration)
- Priority 2: High importance (e.g., Password Reset)
- Priority 3: Medium importance (e.g., Profile checks)
- Priority 4: Lower importance (e.g., Logout)
- Priority 5+: Additional functionality tests

## Contributor

All tests in this repository were developed and contributed by Yashini Hettiarachchi.
