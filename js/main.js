import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Microservices Architecture",
    'image': {
      'desc':"Example 1",
      'src':"images/example1.png",
      'comment':""
    }
  },
  {
    'title': "AWS Cloud",
    'image': {
      'desc':"Example 2",
      'src':"images/example2.png",
      'comment':""
    }
  },
  {
    'title': "CI and CD deliver",
    'image': {
      'desc':"Example 3",
      'src':"images/example3.png",
      'comment':""
    }
  }
]


ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
