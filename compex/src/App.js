    
import React from 'react';
import Ex1 from './Ex1';
import Counter from './Counter';
import Todo from './Todo'

function App() {

  const arr1 = 
    [
      {pcode:1, pname:'연필', price:300, selected:false},
      {pcode:2, pname:'노트', price:800, selected:false},
      {pcode:3, pname:'샤프', price:2000, selected:false},
      {pcode:4, pname:'축구공', price:13000, selected:false}
  ]
  const arr2 = 
  [
    {pcode:1, pname:'반바지', price:3100, selected:false},
    {pcode:2, pname:'티셔츠', price:8000, selected:false},
    {pcode:3, pname:'양말', price:20000, selected:false},
    {pcode:4, pname:'모자', price:5000, selected:false}
]
  
   

  return (
    <div>
      <Todo></Todo>
      <Counter></Counter>
    </div>
  )
}

export default App;