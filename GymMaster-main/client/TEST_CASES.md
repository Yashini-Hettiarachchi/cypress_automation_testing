# GymMaster Test Cases

This document provides a summary of all the test cases implemented for the GymMaster application.

## Authentication Flow Tests

We've created a comprehensive authentication test file (`authentication.cy.js`) that tests the complete user authentication flow, including:

1. Registration with valid and invalid data
2. Login with valid and invalid credentials
3. Password reset functionality
4. Full end-to-end authentication flow (register → login → logout)

This approach ensures that the authentication tests are connected and can properly test the entire user authentication journey.

## Plan Management Tests

We've created a plan management test file (`plan-management.cy.js`) that tests the plan-related functionality, including:

1. Plan package details display
2. Plan selection with valid duration
3. Plan selection with transaction ID
4. Current plan details display
5. Price information for different durations

These tests ensure that users can view plan details, select plans, and see their current plan information correctly.

## Admin Plan Management Tests

We've created an admin plan management test file (`admin-plan-management.cy.js`) that tests the admin functionality for managing plans, including:

1. Creating new plans with valid data
2. Creating plans with numeric amounts
3. Verifying facility availability options
4. Updating existing plans
5. Deleting plans
6. Verifying plan display in the admin dashboard
7. Checking admin account membership plan status

These tests ensure that administrators can properly manage the gym membership plans in the system.

## Registration Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| REG-001 | User registration with valid data | 1. Navigate to Register page<br>2. Enter valid name "Tharindu"<br>3. Enter valid email tharindumeegoda@gmail.com<br>4. Enter valid password<br>5. Enter valid city "Kalutara"<br>6. Enter valid phone "94778408764"<br>7. Click Submit button | User should be registered successfully and redirected to login page | Pass |
| REG-002 | User registration with empty fields | 1. Navigate to Register page<br>2. Leave all fields empty<br>3. Click Submit button | System should display error messages for all required fields | Pass |
| REG-003 | User registration with invalid email format | 1. Navigate to Register page<br>2. Enter valid name<br>3. Enter invalid email (e.g., "invalidemail")<br>4. Complete other fields<br>5. Click Submit button | System should display an error message for invalid email format | Pass |
| REG-004 | User registration with invalid phone number | 1. Navigate to Register page<br>2. Enter valid information except phone<br>3. Enter invalid phone (e.g., "abc12345")<br>4. Click Submit button | System should display an error message for invalid phone format | Fail |

## Login Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| LOG-001 | Login with valid credentials | 1. Navigate to Login page<br>2. Enter valid email tharindumeegoda@gmail.com<br>3. Enter correct password<br>4. Click Submit button | User should be logged in successfully and redirected to dashboard | Pass |
| LOG-002 | Login with invalid credentials | 1. Navigate to Login page<br>2. Enter valid email<br>3. Enter incorrect password<br>4. Click Submit button | System should display an error message indicating invalid credentials | Pass |
| LOG-003 | Login with empty fields | 1. Navigate to Login page<br>2. Leave email and password fields empty<br>3. Click Submit button | System should display error messages for required fields | Pass |

## Password Reset Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| RESET-002 | Password reset with empty fields | 1. Navigate to Reset Password page<br>2. Leave email and new password fields empty<br>3. Click Reset button | System should display error messages for required fields | Pass |

## Profile Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| PROF-001 | User profile information display | 1. Login with valid credentials<br>2. Navigate to Profile page from Dashboard | Profile page should display correct user information | Pass |

## Dashboard Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| DASH-001 | Dashboard page loads correctly | 1. Login with valid credentials<br>2. Observe dashboard page | Dashboard should display user name and all menu options | Pass |
| DASH-003 | Logout functionality | 1. Login with valid credentials<br>2. Click on Logout link | User should be logged out and redirected to login page | Pass |

## Plan Management Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| PLAN-004 | Plan package details display | 1. Navigate to plan details page ("What You Will Get In This Pack?")<br>2. Check facilities included/excluded | Included facilities (Water Stations, Locker Rooms) should be marked with green check marks, excluded facilities (Special Events, Wifi Service, etc.) with red X marks | Pass |
| PLAN-005 | Plan selection with valid duration | 1. Navigate to Choose Plan page<br>2. Select "Standard Plan"<br>3. Select duration from dropdown (options from 1 month to 12 months)<br>4. Enter valid amount field<br>5. Click Submit | System should process the selection with valid duration/amount | Pass |
| PLAN-006 | Plan selection with transaction ID | 1. Navigate to Choose Plan page<br>2. Enter username "Tharindu"<br>3. Select "Standard Plan"<br>4. Select duration from dropdown<br>5. Enter amount<br>6. Enter transaction ID "666d7b1ebcb60dae51034d82"<br>7. Click Submit | System should process plan selection and confirm purchase | Pass |
| PLAN-007 | Current plan details display | 1. Login to user account<br>2. Navigate to Current User Plan page | User should see correct plan details (name, amount, type, date) | Pass |
| PLAN-012 | Price information for different durations | 1. Navigate to Choose Plan page<br>2. Select different durations from dropdown (options from 1 month to 12 months)<br>3. Verify price information | Price information should be available for different durations | Pass |

## Admin Plan Management Tests

| Test Case ID | Test Scenario | Test Steps | Expected Results | Status |
|-------------|---------------|------------|------------------|--------|
| ADMIN-001 | Create new plan with valid data | 1. Login as admin<br>2. Navigate to "Create Plan" page<br>3. Enter plan name (e.g., "Premium Plan")<br>4. Enter monthly amount (e.g., "2500")<br>5. Enter yearly amount (e.g., "25000")<br>6. Set facility availabilities using dropdowns (Available/Not Available)<br>7. Click Submit button | New plan should be created and admin redirected to plan list page | Pass |
| ADMIN-003 | Create plan with numeric amounts | 1. Login as admin<br>2. Navigate to "Create Plan" page<br>3. Enter plan name<br>4. Enter valid monthly amount (e.g., "1200")<br>5. Enter valid yearly amount (e.g., "12000")<br>6. Click Submit button | System should accept valid numeric values for amounts | Pass |
| ADMIN-004 | Facility availability options | 1. Login as admin<br>2. Navigate to "Create Plan" page<br>3. Check dropdown options for each facility | Each facility dropdown should have "Available" and "Not Available" options | Pass |
| ADMIN-006 | Plan update functionality | 1. Login as admin<br>2. Navigate to Plans List<br>3. Select a plan to update<br>4. Modify plan name, amounts, and facility settings<br>5. Click Update button | All plan details should update successfully | Pass |
| ADMIN-009 | Delete existing plan | 1. Login as admin<br>2. Navigate to "Plans List" page<br>3. Click on a plan to update<br>4. Click Delete button | Plan should be deleted and removed from plans list | Pass |
| ADMIN-013 | Verify plan display in list | 1. Login as admin<br>2. Navigate to "Plans List" page<br>3. Verify all plans appear in list | Plans list should display all created plans | Pass |
| ADMIN-016 | Admin account with membership plan | 1. Login as admin<br>2. Navigate to "Current User Plan" page<br>3. Observe if admin has a membership plan | Admin accounts should not have membership plans since they are not customers | Fail |

## Running the Tests

To run these tests:

1. Make sure the application is running on http://localhost:5173
2. Run the tests using one of the following commands:
   - `npm run cypress:open` - Opens the Cypress Test Runner UI
   - `npm run cypress:run` - Runs the tests in headless mode
   - `npm run test:e2e` - Starts the application and opens Cypress

## Notes

- The test for invalid phone number validation (REG-004) is expected to fail as the application does not currently validate phone number formats.
- All tests use the test user "tharindumeegoda@gmail.com" which should be created in the system before running the tests.
- Some tests may need to be updated if the UI or functionality changes.
