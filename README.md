#  Temperature Converter

A simple and responsive web application that converts temperatures between **Celsius**, **Fahrenheit**, and **Kelvin**. This project was built as part of my **Web Development and Designing internship at Oasis Infobyte**.


##  Project Overview

The Temperature Converter is a lightweight, browser-based tool that allows users to instantly convert temperature values between different units. It demonstrates core front-end development concepts including DOM manipulation, event handling, and responsive UI design.



##  Features

- Convert temperature between **Celsius, Fahrenheit, and Kelvin**
- Real-time, instant conversion on user input
- Clean, minimal, and responsive user interface
- Input validation to handle invalid or empty entries
- Works seamlessly across desktop and mobile devices

---

##  How It Works

The converter takes a numeric input value along with the selected unit and applies the standard temperature conversion formulas:

| Conversion | Formula |
|---|---|
| Celsius → Fahrenheit | `(C × 9/5) + 32` |
| Fahrenheit → Celsius | `(F − 32) × 5/9` |
| Celsius → Kelvin | `C + 273.15` |
| Kelvin → Celsius | `K − 273.15` |
| Fahrenheit → Kelvin | `(F − 32) × 5/9 + 273.15` |
| Kelvin → Fahrenheit | `(K − 273.15) × 9/5 + 32` |

JavaScript's `addEventListener()` is used to detect user input or button clicks, after which the appropriate formula is applied and the result is dynamically displayed on the page using DOM manipulation (`innerHTML` / `textContent`).

---

##  Technologies Used

- **HTML5** – Page structure and content
- **CSS3** – Styling and responsive layout
- **JavaScript** – Conversion logic and DOM interaction

---

##  How to Run the Project

1. Clone or download this repository
   ```bash
   git clone https://github.com/k-Rahul-ux/temperature-converter.git
   ```
2. Navigate to the project folder
   ```bash
   cd temperature-converter
   ```
3. Open `index.html` in your preferred web browser

No additional installations or dependencies are required — it runs entirely on client-side code.

---

## Project Structure

```
temperature-converter/
│
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the application
├── script.js       # JavaScript logic for conversions
└── README.md       # Project documentation
```





## Future Enhancements

- Add support for additional units like Rankine and Réaumur
- Include a dark/light theme toggle
- Add unit-conversion history using local storage
- Animate result transitions for a smoother user experience
- Make the converter available as a downloadable PWA



##  Challenges Faced

- **Handling invalid inputs:** Resolved by adding input validation checks to prevent errors with empty or non-numeric values.
- **Maintaining accuracy:** Ensured precise floating-point conversions by rounding results to a fixed number of decimal places.
- **Responsive design:** Used CSS Flexbox/Grid and media queries to ensure the layout adapts smoothly across screen sizes.



## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request


##  Learning Outcomes

Through this project, I gained hands-on experience with:

- Writing clean and semantic HTML markup
- Designing responsive layouts using CSS
- Implementing interactive logic using JavaScript
- Handling user input and performing real-time calculations
- Improving problem-solving and debugging skills



## Acknowledgements

This project was developed as part of the **Web Development and Designing Internship** at **[Oasis Infobyte](https://oasisinfobyte.com/)**, an organization that provides students and aspiring developers with practical, real-world project experience. I am grateful for the opportunity, guidance, and mentorship provided throughout this internship, which helped me strengthen my front-end development fundamentals and build a stronger portfolio.

#OasisInfobyte #InternshipProject #WebDevelopment #JavaScript #FrontendDevelopment



##  Author

**[K Rahul]**
- LinkedIn: [www.linkedin.com/in/rahul-radhika-189072278]
- GitHub: [https://github.com/k-Rahul-ux/OIBSIP]



