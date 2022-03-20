import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import List from './components/List';
// import List2 from './components/vishvastutorial/generics/List';
import AddData from './components/AddData';
import NewTask from './components/NewTask';
import Greet from './components/vishvastutorial/Greet';
import Person from './components/vishvastutorial/Person';
import PersonList from './components/vishvastutorial/PersonList';
import Status from './components/vishvastutorial/Status';
import Heading from './components/vishvastutorial/Heading';
import Oscar from './components/vishvastutorial/Oscar';
import Button from './components/vishvastutorial/Button';
import AnotherComponent from './components/vishvastutorial/AnotherComponent';
import Input from './components/vishvastutorial/Input';
import Container from './components/vishvastutorial/Container';
import LoggedIn from './components/vishvastutorial/state/LoggedIn';
import User from './components/vishvastutorial/state/User';
import FocusInput from './components/vishvastutorial/ref/FocusInput';

interface IState {
  data: {
    name: string;
    id: number;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }[];
  postData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  }[];
}

function App() {
  const [data, setData] = useState<IState['data']>([]);
  const [postData, setPostData] = useState<IState['postData']>([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      setPostData([response.data]);
    });
  }, []);

  let a: number | undefined;
  const calcData = (params: number): number => {
    return (a = 2 + params);
  };

  const personName = {
    first: 'peter',
    last: 'derick',
  };

  const anotherObj = [
    {
      name: 'peter sadasd',
      id: 1,
      sdsadsadadsas: 2323,
    },
    {
      name: 'lkjlkjjkljkl kjljkljkl',
      id: 2,
      rd: 'pedal',
    },
    {
      name: 'vrvrvvvrvrvrv gsgsgsgsgsgsg',
      id: 3,
      sdfsdf: 'sdfsdfs',
    },
  ];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('click button', event, id);
  };

  const addNumbers = (a: number, b: number) => {
    let number = a + b;
    return console.log(number);
  };

  const [arrList, setArrList] = React.useState(['ssdfsdfsfs', 'sadasdasdad']);

  const add = (value: string) => {
    setArrList([...arrList, value]);
  };

  return (
    <div className='App'>
      <h1>TS Crash corse</h1>
      {/* <List data={data} /> */}
      {/* <AddData data={data} setData={setData} /> */}
      {/* <NewTask postData={postData} setPostData={setPostData} calcData={calcData} /> */}
      {/* <Greet number={10} message='message' isLogedIn={true} /> */}
      {/* <Person personName={personName} /> */}
      {/* <PersonList anotherObj={anotherObj} /> */}
      {/* <Status status="success" /> */}
      {/* <Heading>
        <Oscar />
      </Heading> */}
      {/* <Button handleClick={handleClick} /> */}
      {/* <AnotherComponent addNumbers={addNumbers}></AnotherComponent> */}
      {/* <Input /> */}
      {/* <Container styles={{ border: '1px solid red', padding: '1rem' }} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <FocusInput /> */}
      {/* <List2 arrList={arrList} add={add} /> */}
      {/* <List2 arrList={[1, 2]} add={add} /> */}
      {/* <List2 arrList={[{name: 'John',age: 12}, {name: 'Doe',age: 12}]} add={add} /> */}
    </div>
  );
}

export default App;
