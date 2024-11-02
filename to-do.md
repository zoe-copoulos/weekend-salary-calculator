create an application that records employee salaries and adds salaries up to report monthly costs.


✅Create Assignment folder

    ✅Create CSS file

        -CSS class for footer element if over-budget (RED)

    ✅Create Javascript file

✅Create a form 
   ✅ -Five Inputs
     ✅   -First name
     ✅   -Last name
     ✅   -ID number
     ✅   -Job title
     ✅   -Annual salary
    
   ✅ FOR TESTS
       ✅ * Your form's inputs must have these exact attributes:
    ✅* `data-testid="firstNameInput"`
    ✅* `data-testid="lastNameInput"`
    ✅* `data-testid="idInput"`
    ✅* `data-testid="titleInput"`
    ✅* `data-testid="annualSalaryInput"`

    ✅-Form input goes into a <table>
       ✅ -each employee representing by a single  table row <tr>

        ✅FOR TESTS
            ✅* You must use a `<table>` element, where each employee is represented by a single `<tr>`.
    


    ✅-Footer
        -Monthly cost calculated
        FOR TESTS
            * The *total monthly* cost must be rendered somewhere inside the `<footer>` element.
    

✅Create "Submit" button
    ✅when clicked (onClick) (event)
        -New employee row added to table
        -Footer's total (monthly cost) updated
        -Form inputs cleared
    ✅FOR TESTS
        ✅* Your form's submit button **must** have a `data-testid="submitButton"` attribute. Like so:
  * ```html
    <button data-testid="submitButton">
      Submit
    </button>
    ```

If over budget (>20,000$), apply CSS class to footer element
    FOR TESTS
        * The `over-budget` CSS class must be applied to the `<footer>` element when the total monthly salary exceeds $20,000.

Create "Delete" button that removed employee from DOM
    -(monthly cost does not need to update for this)




Run tests.  A lot.