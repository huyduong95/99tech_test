# 99tech_test

This is an end-to-end test automation framework built with Playwright for both UI and API testing.

## Features

- Page Object Model (POM) design pattern
- API testing with schema validation (not complete due to missing authentication information)
- Cross-browser testing (Chrome, Safari)
- Environment configuration with dotenv
- HTML reporting
- TypeScript support
- Test Cases Link: https://docs.google.com/spreadsheets/d/19R0tCyWne9g0_jVeeCWRLR5B-7L3NC2fTZYMu5Aa2B4/edit?usp=sharing

## Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-repo-directory>

# Install dependencies using Yarn
yarn install

# Install Playwright browsers
yarn test

## Project Structure
├── apis/ # API client classes │ 
  ├── apiFactory.ts # Factory for API clients │ 
  ├── baseAPI.ts # Base API client with common methods │ 
  ├── dashboardApi.ts # Dashboard API client │ 
  └── dashboardSubunitApi.ts # Dashboard Subunit API client 
├── models/ # Data models │ 
  ├── schemes/ # JSON schemas for API validation │ │ 
    └── dashboardSubunitSchema.ts │ 
  ├── testData.ts # Test data interfaces │ 
    └── userModel.ts # User model interfaces 
├── pages/ # Page objects │ 
  ├── components/ # Reusable page components │ │ 
    └── navBar.ts # Navigation bar component │ 
  ├── adminPage.ts # Admin page object │ 
  ├── basePage.ts # Base page object │ 
  ├── loginPage.ts # Login page object │ 
  ├── mainPage.ts # Main page object │ 
  └── pageFactory.ts # Factory for page objects 
├── tests/ # Test cases │ 
  ├── admin/ # Admin tests │ 
  ├── api/ # API tests │ 
  ├── login/ # Login tests │ 
  └── search/ # Search tests 
├── utils/ # Utility functions │ 
  ├── DataLoader.ts # Data loader utility │ 
  └── chemaValidator.ts # Schema validation utility 
├── resources/ # Test resources │ 
  └── test_data.json # Test data 
├── .env # Environment variables 
├── playwright.config.ts # Playwright configuration 
└── package.json


## Configuration
The project uses `.env` file for environment configuration:
BASE_URL=https://opensource-demo.orangehrmlive.com 
API_URL=https://opensource-demo.orangehrmlive.com/web/index.php/api 
TIME_OUT=15000

## Running Tests

```bash
# Run all tests in Chrome
yarn test

# Run login tests
yarn test:login

# Run tests in Safari
yarn test:safari

# Run API tests
yarn test:api

# Generate and open HTML report
yarn report
