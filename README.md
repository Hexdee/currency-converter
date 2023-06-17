# Currency Converter

The Currency Converter is a web application that allows users to convert between different currencies. It provides a simple and intuitive interface for selecting the currencies and entering the amount to be converted. The application fetches real-time exchange rate data from an open-source API to ensure accurate currency conversion.

## Features

- Currency Selection: Users can select the currency they want to convert from and to from a dropdown menu. The available currencies include US Dollars, Euros, British Pounds, Japanese Yen, and Naira.

- Real-Time Conversion: The application fetches the latest exchange rates from the API to perform accurate currency conversions. The rates are updated automatically, providing users with up-to-date conversion results.

- Conversion Details: After submitting the conversion request, the application displays the conversion rate between the selected currencies, allowing users to see the exchange rate used for the conversion. The converted amount is also shown, providing users with the result of the conversion.

- Error Handling: The application handles errors such as selecting the same currency for both conversion options. It displays user-friendly error messages to guide users in making the necessary corrections.

- Styling: The application utilizes the ngx-semantic library for styling, providing a visually appealing and responsive user interface. The design is clean and intuitive, enhancing the user experience.

## Getting Started

1. Clone the repository: `git clone https://github.com/hexdee/currency-converter`
2. Navigate to the project directory: `cd currency-converter`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:4200`

## Dependencies

The Currency Converter project relies on the following dependencies:

- Angular: A JavaScript framework for building web applications.
- ngx-semantic: A library that provides Angular components with Semantic UI styling.

## API Integration

The Currency Converter uses the open-source API provided by [exchangerate-api.com](https://www.exchangerate-api.com/) to fetch exchange rate data. The API offers real-time rates and supports multiple currencies. To use the API, sign up for a free account and obtain an API key. 

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the Currency Converter, feel free to open a pull request. Please ensure that you follow the existing coding style and provide clear commit messages.
