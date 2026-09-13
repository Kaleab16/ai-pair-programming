# Task 1: AI Implementation & Quality

## Overview

This project demonstrates the use of an AI pair programmer for three software
engineering workflows:

1. Intent-to-Code Implementation
2. Quality Assurance through JSDoc documentation
3. Quality Assurance through unit test generation

The goal was to define the requirements first, use AI as a pair-programming
assistant, and then review and test the generated output.

---

## 1. Intent-to-Code Implementation

### Function

`logWithTimestamp(message, level)`

### Contract

The function must:

1. Get the current date and time.
2. Format the timestamp as `YYYY-MM-DD HH:MM:SS`.
3. Convert the log level to uppercase.
4. Log the timestamp, uppercase level, and message to the console.

### AI Implementation

The implementation was generated using Gemini based on the existing function
contract and JSDoc.

The generated implementation was reviewed against the original requirements
to verify that the function signature remained unchanged and that the
timestamp, log level, and message were formatted correctly.

### Example

```javascript
logWithTimestamp('Server started', 'info');
