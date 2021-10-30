# Work Day Planner

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
The dynamic clock element at the top of the page uses Moment.js.
To create the hour block elements in the list, I created an array of business hours and ran a for loop using jQuery to create elements from the array.
Then I used conditional statements to compare the current hour in moment.js to the the hours set in my array.
Then I used a series of functions to add event listeners to each line's respective save buttons with functions that save the text content from the text areas on each line to local storage, and I used the getItem method to retrieve local storage on the page load. 

### Planned Features:

* Set local storage without creating a separate function for each line.
* Clean up UI.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Usage

* This application has not yet been incorporated into a node dev environment. Planned features include refactoring to a React frontend.

* [Deployed Application](https://ntjohns1.github.io/Work-Day-Planner/)

## License  


      Copyright 2021 Nelson Johns

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        [http://www.apache.org/licenses/LICENSE-2.0]
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Questions
For questions, please open an issue in the GitHub repo: [https://github.com/ntjohns1]
