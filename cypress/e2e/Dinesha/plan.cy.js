describe('Authentication Tests', () => {
  beforeEach(() => {
    // Clear state before each test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('http://localhost:5173');
  // Set viewport to full screen (maximum browser window size)
  cy.viewport('macbook-16'); // or use specific dimensions: cy.viewport(1920, 1080)
  });

  it('REG: Register', { priority: 1 }, () => {
    // Handle any overlays
    cy.get('button').contains('Close').click();
    cy.get('button').contains('Sign Up').click();

    // Fill registration form
    cy.get('input[name="name"]').type('Yashini');
    cy.get('input[name="email"]').type('yashini@gmail.com');
    cy.get('input[name="password"]').type('Yashini125');
    cy.get('input[name="city"]').type('Colombo');
    cy.get('input[name="phone"]').type('9477840876');
    cy.get('button').contains('Submit').click();

  });

  it('Plan: Plan Display', { priority: 2 }, () => {
    // Navigate to login page
    cy.get('button').contains('Close').click();
    cy.get('button').contains('Login').click();

    // Fill login form
    cy.get('input[name="email"]').type('yashini@gmail.com');
    cy.get('input[name="password"]').type('Yashini125');
    cy.get('button').contains('Submit').click();
    cy.wait(8000);
    cy.get('.hidden > .font-semibold').click();
    cy.get('[href="/dashboard/user/plan-detail"] > .text-white').should('be.visible');

  });

  //Plan Fill
  it('Plan: Choose a Plan', { priority: 3 }, () => {
    // Navigate to login page
    cy.get('button').contains('Close').click();
    cy.get('button').contains('Login').click();

    // Fill login form
    cy.get('input[name="email"]').type('yashini@gmail.com');
    cy.get('input[name="password"]').type('Yashini125');
    cy.get('button').contains('Submit').click();
    cy.wait(4000);
    cy.get('.bg-gradient-to-r > .container').click();
    cy.wait(4000);
    cy.get(':nth-child(1) > .text-black > .inline-block').click();
    cy.get('.mt-8').click();
    cy.get('select.w-full').select('1 Month');
    cy.get('button').contains('Submit').click();
  });

  it('Plan:Plan Create', { priority: 4 }, () => {
    // Navigate to login page
    cy.get('button').contains('Close').click();
    cy.get('button').contains('Login').click();
    cy.get('.underline').click();
    cy.wait(4000);

    // Fill login form
    cy.get('input[name="email"]').type('admin@gmail.com');
    cy.get('[type="password"]').type('Admin125');
    cy.wait(4000);
    cy.get('.btn').contains('Reset').click();

    cy.url().should('contain', '/login');
    cy.get('input[name="email"]').type('admin@gmail.com');
    cy.get('[type="password"]').type('Admin125');
    cy.wait(4000);

    cy.get('.btn').contains('Submit').click();
    cy.get('.flex > :nth-child(4) > .text-white').click();
    cy.get('[placeholder="Plan Name"]').type('New Premium Plan');
    cy.get('[placeholder="Monthly Amount"]').type('10000');
    cy.get('[placeholder="Yearly Amount"]').type('100000');
    cy.get('.btn').contains('Submit').click();
    cy.url().should('contain','/admin/plans');





});





});