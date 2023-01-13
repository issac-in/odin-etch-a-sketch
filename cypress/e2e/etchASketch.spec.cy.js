const grid = "[data-cy='grid']";
const gridItem = "[data-cy='grid-item']";

describe('Etch-a-Sketch page', () => {
  beforeEach(() => { cy.visit("/"); }); 

  it.only("1. initializes a webpage with a 16x16 grid of square divs", () => {
    const squares = "38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px";
    
    cy.get(grid).should("be.visible")
      .should("have.css", "grid-template-columns", squares)
      .and("have.css", "grid-template-rows", squares)
      .children().should("have.length", 256);
  });
  
  it("2. has its grid divs change color when the pointer passes over them in default mode", () => {
    // Grab the current color of the grid divs on initialization (white)
    // Set the pointer pass color to (black)
    // Check to see that the divs that have been passed over are no longer white, but black.
    // Have a border of the grid devs parent change color to grey pattern
  });

  it("\u30002A. has its grid devs change color when pointer passes over them in RGB mode", () => {
    // RGB mode will have a constraint that prevents the new color being identical to the original Canvas element
    // Have a border of the grid devs parent change color to a RGB pattern
  });

  it("\u30002B. has its grid devs change color when pointer passes over them in black fade mode", () => {
    // This will only allow users to have black as the fade option to do 10% at a time
    // Have a border of the grid devs parent change color to have a black fade pattern
  });

  it("\u30002C. has its grid devs change color when pointer passes over them in custom pointer mode", () => {
    // User can set the pointer to color to whatever they wish - like red for example
    // Then it actually appears as red on the screen accordingly.
    // Have a border of the grid devs parent change color to whatever custom pointer mode is selected on the sides.
  });

  it("3. gives the user the ability to change the number of squares per side for the new grid", () => {
    // The new grid should be the overall same dimensions, just having a higher div : pixel ratio
    // After going through the process to change the number of squares, then ensure that new X by X dimension amount of squares is applied
    // There will be a hard constraint of only a square canvas, in spirit of the requirements given of us, and only max of 100 width or length
  });
  
  it("4. gives user the ability to change pointer color & background color freely", () => {});

  it("5. gives user the ability to have an eraser pointer", () => {});

  it("6. lets user toggle grid lines", () => {});

  it("7. lets user clear the drawings", () => {});

  it("8. let user have a relative darken to pointer color", () => {});

  it("9. let user have a relative lighten to pointer color", () => {});

  it("10. let use select a new color for pointer color or background color based on an eyedropper", () => {});

  it("11. on mousedown, trigger pointer color application, on mouseup stopit", () => {});

  it("12. have a link to my github in the footer", () => {
    // no header needed
  });

  it("13. have the display overall resize based on viewport widths", () => {});

  it("14. have the option maybe of the side bar for long form options or maybe an icon top bar for options", () => {});
})