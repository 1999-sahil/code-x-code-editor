let initialHTML = `
	<!-- Hey, I am HTML! -->
	<!-- I provide structure to the web pages -->

	<!doctype html>
	<html lang="en">

		<head>
    		<!-- Required meta tags -->
    		<meta charset="utf-8">
    		<meta name="viewport" content="width=device-width, initial-scale=1">
    		<title>Code-X Coderoom</title>
		</head>

		<body>
    		<button>Welcome to Code-X Coderoom!</button>
		</body>

	</html>
`;

let initialCSS = `
	/* Hey! what's up */
	/* I am CSS, I make web pages look good*/

	button {
		animation: wiggle 2s linear infinite;
	}
	  
	/* Keyframes */
	@keyframes wiggle {
		0%, 7% {
		  transform: rotateZ(0);
		}
		15% {
		  transform: rotateZ(-15deg);
		}
		20% {
		  transform: rotateZ(10deg);
		}
		25% {
		  transform: rotateZ(-10deg);
		}
		30% {
		  transform: rotateZ(6deg);
		}
		35% {
		  transform: rotateZ(-4deg);
		}
		40%, 100% {
		  transform: rotateZ(0);
		}
	}
	  
	body {
		background: #96DEAE;
		color : white;
    }
	  
	button {
		position: absolute;
		
		left : 22vw;
		top : 35%;
		
		height: 5em;
		width: 15em;
		
		background: #38B261;
		border: none;
		border-top: 3px solid white;
		border-radius: 0 0 2em 2em;
		color: #fff;
		font-family: Helvetica, Arial, Sans-serif;
		font-size: 1em;
		transform-origin: 50% 5em;
	}
  
`;

let initialJS = `
  // Javascript here!
  // I control the behaviour of Web Pages!
`;

export { initialHTML, initialCSS, initialJS };
