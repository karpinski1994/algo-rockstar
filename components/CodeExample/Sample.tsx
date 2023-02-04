
export default {
    erlang: `
-module(hello).
-export([hello/0]).
hello() ->
io:format("Hello World!~n", []).
`,
    fsharp: `printf "Hello World!\n"`,
    graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
      }
    }
}
`,
    go: `package main
import "fmt"
func main() {
  fmt.Printf("Hello World\n")
}
`,
    groovy: `println "Hello World"`,
    haskell: `main = putStrLn "Hello World"`,
    html: `<html>
<!-- Hello World in HTML -->
<head>
<title>Hello World!</title>
</head>
<body>
Hello World!
</body>
</html>
`,
    java: `class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}`,
    javascript: `class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
      
      class LinkedList {
        constructor() {
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
      
        // add a new node to the end of the list
        push(value) {
          const newNode = new Node(value);
          if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            this.tail.next = newNode;
            this.tail = newNode;
          }
          this.length++;
          return this;
        }
      
        // remove the last node from the list
        pop() {
          if (!this.head) return undefined;
          let current = this.head;
          let newTail = current;
          while (current.next) {
            newTail = current;
            current = current.next;
          }
          this.tail = newTail;
          this.tail.next = null;
          this.length--;
          if (this.length === 0) {
            this.head = null;
            this.tail = null;
          }
          return current;
        }
      
        // add a new node to the beginning of the list
        unshift(value) {
          const newNode = new Node(value);
          if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            newNode.next = this.head;
            this.head = newNode;
          }
          this.length++;
          return this;
        }
    }
`,
    jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
    julia: `println("Hello, World!")`,
    kotlin: `fun main(args : Array<String>) {
  println("Hello, world!")
}
`,
    lisp: `(defun hello-world()
"Display the string hello world."
  (interactive)
  (message "hello world"))
`,
    makefile: `all:
  @echo "Hello world!"
`,
    matlab: `disp("Hello World");`,
    objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
    ocaml: `print_string "Hello World!\n";;`,
    php: `<?php
  echo "Hello World!";
?>
`,
    python: `# Hello world in Python 2
print "Hello World"

# Hello world in Python 3 (aka Python 3000)
print("Hello World")
`,
    r: `cat("Hello world\n")`,
    ruby: `puts "Hello World!"`,
    rust: `fn main() {
  println!("Hello World!");
}
`,
    scala: `object HelloWorld extends App {
  println("Hello world!")
}
`,
    sql: `SELECT "Hello World";`,
    swift: `println("Hello, world!")`,
    tsx: `import * as React from "react";

export class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello world!It's from Helloword Component.</div>;
    }
}`,
    typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`
};
