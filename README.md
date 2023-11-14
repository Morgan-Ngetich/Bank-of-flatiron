# Bank of Flatiron - React App

Bank of Flatiron is a simple React application for managing transactions. It allows users to add new transactions, view a list of transactions, and delete transactions.
- [Click here](https://morgan-ngetich.github.io/Bank-of-flatiron/) to visit the website.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Morgan-Ngetich/Bank-of-flatiron.git
    ```

2. **Move to the project directory:**

    ```bash
    cd Bank-of-flatiron
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.**

## Features

- **Add Transaction:** Enter details such as date, description, category, and amount to add a new transaction.

- **View Transactions:** See a list of transactions with details like ID, date, description, category, and amount.

- **Delete Transaction:** Remove a transaction by clicking the delete button.

- **Sort and Search:** Sort transactions by ID, date, description, category, or amount. Search transactions by description.

## How It Works

1. **Adding Transactions:**
   - Click on the "Add new Transaction" section.
   - Enter the transaction details: date, description, category, and amount.
   - Click the "Add Transaction" button.

2. **Viewing Transactions:**
   - Transactions are displayed in a table with columns for ID, date, description, category, and amount.

3. **Deleting Transactions:**
   - Each transaction has a "Remove" button. Clicking it will delete the corresponding transaction.

4. **Sorting and Searching:**
   - Use the dropdown to select a sorting option (ID, date, description, category, amount).
   - Use the search box to filter transactions based on description.

## Project Structure

- **`src/App.js`:** Main component containing the overall structure of the app.

- **`src/TransactionForm.js`:** Form component for adding new transactions.

- **`src/TransactionTable.js`:** Table component for displaying transactions.

- **`src/TransactionItem.js`:** Component representing a single transaction in the table.

## Author

- ([Morgan-Ngetich](https://github.com/Morgan-Ngetich)/)
- [Email](ngetichmorgan6@gmail.com)

## Contributing

Feel free to contribute to the project. Create a fork, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Morgan-Ngetich/Bank-of-flatiron/blob/main/LICENSE) file for details.
