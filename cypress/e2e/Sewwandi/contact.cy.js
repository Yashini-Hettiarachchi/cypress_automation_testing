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
  
    it('Contact: Contact Form Display', { priority: 2 }, () => {
      // Navigate to login page
      cy.get('button').contains('Close').click();
      cy.get('button').contains('Login').click();
  
      // Fill login form
      cy.get('input[name="email"]').type('yashini@gmail.com');
      cy.get('input[name="password"]').type('Yashini125');
      cy.get('button').contains('Submit').click();
      cy.wait(4000);
      cy.get(':nth-child(5) > .w-full').should('be.visible');

  
    });

  
    it('Contact: Contact Form Fill', { priority: 3 }, () => {
      // Navigate to login page
      cy.get('button').contains('Close').click();
      cy.get('button').contains('Login').click();
  
      // Fill login form
      cy.get('input[name="email"]').type('yashini@gmail.com');
      cy.get('input[name="password"]').type('Yashini125');
      cy.get('button').contains('Submit').click();
      cy.wait(4000);
      cy.get('.flex > :nth-child(1) > .w-full').type('Yashini');
      cy.get('[data-aos-delay="100"] > .w-full').type('yashini@gmail.com');
      cy.get('[data-aos-delay="200"] > .w-full').type('Colombo');
      cy.get(':nth-child(4) > .w-full').type('9477840876');
      cy.get(':nth-child(5) > .w-full').type('This is a test feedback message for testing purposes');
      cy.wait(4000);
      cy.get('[data-aos="zoom-in"] > .w-full').click();


  
    });

    it('Contact: Invalid Contact Form Fill', { priority: 4 }, () => {
        // Navigate to login page
        cy.get('button').contains('Close').click();
        cy.get('button').contains('Login').click();
    
        // Fill login form
        cy.get('input[name="email"]').type('yashini@gmail.com');
        cy.get('input[name="password"]').type('Yashini125');
        cy.get('button').contains('Submit').click();
        cy.wait(4000);
        cy.get('.flex > :nth-child(1) > .w-full').type('Yashini');
        cy.get('[data-aos-delay="100"] > .w-full').type('yashini@gmail.com');
        cy.get('[data-aos-delay="200"] > .w-full').type('Colombo');
        cy.get(':nth-child(4) > .w-full').type('77840876');
        cy.get(':nth-child(5) > .w-full').type('This is a test feedback message for testing purposes');
        cy.wait(4000);
        cy.get('[data-aos="zoom-in"] > .w-full').click();
        cy.url().should('include', 'http://localhost:5173/?name=Yashini&email=yashini%40gmail.com&city=Colombo&phone=77840876&message=This+is+a+test+feedback+message+for+testing+purposes');


  
  
    
      });
      it('Contact:Contact View', { priority: 5 }, () => {
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
        cy.get('[data-aos-delay="300"] > .text-white').click();
        cy.get('.grid > .flex').should('be.visible');
    
    
    
    
    
    });
        
  
  
  
  
  });