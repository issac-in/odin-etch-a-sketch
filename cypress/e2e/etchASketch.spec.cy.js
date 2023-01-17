const grid = "[data-cy='grid']";
const gridItem = "[data-cy='grid-item']";

describe('Etch-a-Sketch page', () => {
  beforeEach(() => { cy.visit("/"); }); 

  it("1. initializes a webpage with a 16x16 grid of square divs", () => {
    const squares = "38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px 38px";
    
    cy.get(grid)
      .should("be.visible")
      .and("have.css", "grid-template-columns", squares)
      .and("have.css", "grid-template-rows", squares)
      .children()
      .should("have.length", 256);
  });
  
  it("2. has its grid divs change color when the pointer passes over them in default mode", () => {
    cy.get(gridItem)
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .each(($item) => {
        cy.wrap($item).trigger("mouseenter", { buttons: 1} );
      });

    cy.get(gridItem)
      .should("have.css", "background-color", "rgb(0, 0, 0)");
  });

  it.skip("\u30002A. has its grid devs change color when pointer passes over them in RGB mode", () => {
    // RGB mode will have a constraint that prevents the new color being identical to the original Canvas element
    // Have a border of the grid devs parent change color to a RGB pattern
  });

  it.skip("\u30002B. has its grid devs change color when pointer passes over them in black fade mode", () => {
    // This will only allow users to have black as the fade option to do 10% at a time
    // Have a border of the grid devs parent change color to have a black fade pattern
  });

  it.skip("\u30002C. has its grid devs change color when pointer passes over them in custom pointer mode", () => {
    // User can set the pointer to color to whatever they wish - like red for example
    // Then it actually appears as red on the screen accordingly.
    // Have a border of the grid devs parent change color to whatever custom pointer mode is selected on the sides.
  });

  it.skip("3. gives the user the ability to change the number of squares per side for the new grid", () => {
    // The new grid should be the overall same dimensions, just having a higher div : pixel ratio
    // After going through the process to change the number of squares, then ensure that new X by X dimension amount of squares is applied
    // There will be a hard constraint of only a square canvas, in spirit of the requirements given of us, and only max of 100 width or length
  });
  
  it.skip("4. gives user the ability to change pointer color & background color freely", () => {});

  it.skip("5. gives user the ability to have an eraser pointer", () => {});

  it.skip("6. lets user toggle grid lines", () => {});

  it.skip("7. lets user clear the drawings", () => {});

  it.skip("8. let user have a relative darken to pointer color", () => {});

  it.skip("9. let user have a relative lighten to pointer color", () => {});

  it.skip("10. let use select a new color for pointer color or background color based on an eyedropper", () => {});

  it.skip("11. on mousedown, trigger pointer color application, on mouseup stopit", () => {});

  it.skip("12. have a link to my github in the footer", () => {
    // no header needed
  });

  it.skip("13. have the display overall resize based on viewport widths", () => {});

  it.skip("14. have the option maybe of the side bar for long form options or maybe an icon top bar for options", () => {});
})