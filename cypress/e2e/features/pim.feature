Feature: PIM - Add, Search and Delete Employee

    @smoke
    Scenario: Verify the New Employee is created successfully
        When I navigate to the 'PIM' page
        Then I should be on the 'PIM' page
            | title |
            | PIM   |
        And I click on the 'Add Employee' tab
        And I enter employee details
            | FirstName | MiddleName | LastName | EmployeeId |
            | Testfn    | TestMn     | Testln   | TestEI     |
        And I click on the Save button
        Then I should see the Successful toast message "Successfully Saved"

    @smoke
    Scenario Outline: Verify the New Employee is created successfully
        When I navigate to the 'PIM' page
        Then I should be on the 'PIM' page
            | title |
            | PIM   |
        And I click on the 'Add Employee' tab
        When I enter employee details
            | FirstName   | MiddleName   | LastName   | EmployeeId   |
            | <FirstName> | <MiddleName> | <LastName> | <EmployeeId> |
        And I click on the Save button
        Then I should see the Successful toast message "Successfully Saved"

        Examples:
            | FirstName | MiddleName | LastName | EmployeeId |
            | Testfn    | TestMn     | Testln   | TestEI     |
            | CBfn      | CBMn       | CBln     | CBEI       |