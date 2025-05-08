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
      cy.get('input[name="password"]').type('Yashini123');
      cy.get('input[name="city"]').type('Colombo');
      cy.get('input[name="phone"]').type('9477840876');
      cy.get('button').contains('Submit').click();
  
      // Verify navigation to login page
      cy.url().should('contain', '/login');
    });
  
    it('LOGIN: Profile Name Check', { priority: 3 }, () => {
      // Navigate to login page
      cy.get('button').contains('Close').click();
      cy.get('button').contains('Login').click();
  
      // Fill login form
      cy.get('input[name="email"]').type('yashini@gmail.com');
      cy.get('input[name="password"]').type('Yashini125');
      cy.get('button').contains('Submit').click();
  
      cy.get('.bg-gradient-to-r > .container').click();
      cy.wait(4000);
      cy.get('.hidden > .font-semibold').should('contain','Yashini');
    });

    it('LOGOUT: Logout', { priority: 4 }, () => {
        // Navigate to login page
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Login').click();
    
        // Fill login form
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('input[name="password"]').type('Yashini125');
        cy.get('button').contains('Submit').click();
    
        cy.get('.bg-gradient-to-r > .container').click();
        cy.wait(4000);
        cy.get('.hidden > button.text-white').click();
        cy.wait(4000);
        cy.get('.hidden > .font-semibold').should('not.contain','Yashini');

    });

    it('RESET:Reset Password', { priority: 2 }, () => {
        // Navigate to login page
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Login').click();
        cy.get('.underline').click();
        cy.wait(4000);

        // Fill login form
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('[type="password"]').type('Yashini125');
        cy.wait(4000);
        cy.get('.btn').contains('Reset').click();

        cy.url().should('contain', '/login');


    

    });
  
  
    it('Profile:User List View', { priority: 5 }, () => {
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
        cy.get('.hidden > .font-semibold').click();
        cy.get('[href="/dashboard/admin/user-list"] > .text-white').click();
        cy.get('.grid > .flex').should('be.visible');
    
    
    
    
    
    });
      it('REG: Empty Register', { priority: 6 }, () => {
        // Handle any overlays
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Sign Up').click();
    
        // Fill registration form
        cy.get('input[name="name"]').type('');
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('input[name="password"]').type('Yashini123');
        cy.get('input[name="city"]').type('Colombo');
        cy.get('input[name="phone"]').type('9477840876');
        cy.get('button').contains('Submit').click();
    
        // Verify navigation to login page
        cy.url().should('contain', '/login');
              });
  
  });