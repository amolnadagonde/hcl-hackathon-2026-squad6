HCL Hackathon 2026 - Squad 6
Credit Card Application

Steps:

- The user will land to login page by default
- If existing user the User will login using pancard number and pasword
- User will select role like User or Admin and login accordingly
- If new User, the he should go to Registration Page

JSON Structure for Registration
{
id: number,
pancard: string,
name: string,
password: string,
dob: date,
email: string,
mobile: number,
creditScore: number,
annualIncome: number (dropdown with range as decided)
creditCardStatus: NA, InProgress, Approved, Reject, Dispatched
}

After Registration, User will redirect to login form,
After login User will see Dashboard Page

Applicant Dashboard:
Page showing the user info and credit card score, card status, credit limit

Approver Page:
Table format
List of all the users with below content:
Name(User)
Credit Score
Status
Action - Approve / Decline

Security
Authentication will be JWT token and access to dashboard will be role based.
