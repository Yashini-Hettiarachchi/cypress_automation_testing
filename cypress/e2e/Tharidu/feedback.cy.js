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
  
    it('Feedback: Feedback Display', { priority: 2 }, () => {
      // Navigate to login page
      cy.get('button').contains('Close').click();
      cy.get('button').contains('Login').click();
  
      // Fill login form
      cy.get('input[name="email"]').type('yashini@gmail.com');
      cy.get('input[name="password"]').type('Yashini125');
      cy.get('button').contains('Submit').click();
      cy.wait(8000);
      cy.get('.hidden > .font-semibold').click();
      cy.get('[href="/dashboard/user/feedbacks"] > .text-white').should('be.visible');
  
    });
    it('Feedback: Create Feedback', { priority: 3 }, () => {
        // Navigate to login page
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Login').click();
    
        // Fill login form
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('input[name="password"]').type('Yashini125');
        cy.get('button').contains('Submit').click();
        cy.wait(8000);
        cy.get('.hidden > .flex > :nth-child(3) > .text-white').click();
        cy.get('#message').type('This is a test feedback message for testing purposes');
        cy.get('#rating').select('4 - Very Good');
        cy.get('.bg-blue-500').click();

        
    
      //   cy.get('textarea[name="message"]').type('This is a test feedback message for testing purposes');
      //   cy.get('select[name="rating"]').select('4 - Very Good');  
      //   cy.get('button').contains('Submit').click();
      //   cy.wait(4000);
      //   cy.get('.hidden > .font-semibold').click();
      //   cy.get('[href="/dashboard/user/feedbacks"] > .text-white').click();
      //   cy.get('textarea[name="message"]').should('be.visible');
    
      });
  
    it('Feedback: Edit Feedback', { priority: 4 }, () => {
      // Navigate to login page
      cy.get('button').contains('Close').click();
      cy.get('button').contains('Login').click();
  
      // Fill login form
      cy.get('input[name="email"]').type('yashini@gmail.com');
      cy.get('input[name="password"]').type('Yashini125');
      cy.get('button').contains('Submit').click();
      cy.wait(8000);
      cy.get('.hidden > .font-semibold').click();
      cy.get('[href="/dashboard/user/feedbacks"] > .text-white').click();
      cy.wait(4000);
      cy.get('.bg-gray-300').click();
      cy.get('textarea.w-full').type('This is a test feedback edit message for testing purposes');
      cy.get('.bg-blue-500').click();
      cy.url().should('include', '/dashboard/user/feedbacks');
  
    //   cy.get('textarea[name="message"]').type('This is a test feedback message for testing purposes');
    //   cy.get('select[name="rating"]').select('4 - Very Good');  
    //   cy.get('button').contains('Submit').click();
    //   cy.wait(4000);
    //   cy.get('.hidden > .font-semibold').click();
    //   cy.get('[href="/dashboard/user/feedbacks"] > .text-white').click();
    //   cy.get('textarea[name="message"]').should('be.visible');
  
    });

    it('Feedback: Delete Feedback', { priority: 5 }, () => {
        // Navigate to login page
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Login').click();
    
        // Fill login form
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('input[name="password"]').type('Yashini125');
        cy.get('button').contains('Submit').click();
        cy.wait(8000);
        cy.get('.hidden > .font-semibold').click();
        cy.get('[href="/dashboard/user/feedbacks"] > .text-white').click();
        cy.wait(4000);
        cy.get('.bg-red-500').click();
    
      //   cy.get('textarea[name="message"]').type('This is a test feedback message for testing purposes');
      //   cy.get('select[name="rating"]').select('4 - Very Good');  
      //   cy.get('button').contains('Submit').click();
      //   cy.wait(4000);
      //   cy.get('.hidden > .font-semibold').click();
      //   cy.get('[href="/dashboard/user/feedbacks"] > .text-white').click();
      //   cy.get('textarea[name="message"]').should('be.visible');
    
      });
  


  
  
  
  
  
  
  });