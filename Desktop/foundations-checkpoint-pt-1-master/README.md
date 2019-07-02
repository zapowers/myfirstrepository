## Foundations Checkpoint 1

### Getting Started:

1. **Clone** the Checkpoint and `cd` (change directories) so you are in the Checkpoint's directory in your terminal.

2. Before solving a problem, read the `README.md` file located in the problem's directory (folder). The `README.md` file provides a general overview of the problem and will give you additional context when reading the Test Specs.

3. Write your solution code in the `solution_${problem-name}.js` file.

4. Run the test specs to test your code. Prior to starting the checkpoint, it was instructed that you are are responsible for your development environment. Follow the instructions below to run the test specs:

#### Option 1 - testem is globally installed

- If you have been running `testem` by running the `testem` command in your terminal, you are ready to go. Run `testem` to run the test specs. If you receive any errors or you don't have `testem` globally installed, refer to option 2.

```sh
  $ cd ${name-of-the-checkpoint-repository}
  $ testem
  TEST'EM 'SCRIPTS!
  Open the URL below in a browser to connect.
  http://localhost:7357/
```

<hr>

#### Option 2 - Install Testem Locally

If you don't have `testem` installed globally on your machine, complete the following steps:

1. Run the command:

```sh
$ npm install
```

Note: the command **needs to be executed inside of the foundations-checkpoint-pt-1 directory**.

2. After the installation is complete, when you want to run `testem` run the command:

```sh
npm run test
```

3. Here are all of the steps:

```sh
$ cd ${name-of-the-checkpoint-repository}
$ npm install
$ npm run test
TEST'EM 'SCRIPTS!
Open the URL below in a browser to connect.
http://localhost:7357/
```

<hr>

### Point Distribution Overview:

The total amount of points for each problem are listed below. Keep in mind, each test spec has a different "weight" or amount of points it is worth. In addition, you can receive partial credit even if your code isn't passing!

- 00 Find Object Properties: 5.00
- 01 Create a Multiplication Table: 4.00
- 02 Create Book: 7.00
- 03 Browser Window: 8.00
- 04 Right Triangle: 5.00

<hr>
<br>

### Submission

When your time limit expires, **commit your changes and push them to your repository on GitHub to be graded in Learndot**.

Make sure you press **Done** on the Checkpoint Page to finalize your Checkpoint submission when you are finished!

**Example**

```
$ git add -A
$ git commit -m 'completed exercises'
$ git push origin master
```

Good luck!
