import logo from './logo.svg';
import './App.css';
import MyList from './components/MyList';
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//   { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ];


function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>
      안녕, {name} {i}호
    </h1>
  ));

  return (
    <div>
      {numComponentsArray}
    </div>
  )
}

function One() {
  return <p>one</p>
}

function Two() {
  return <p>two</p>
}

function Three() {
  return <p>three</p>
}


function App() {
  return (
    <div>

      hello world
      {/* <Blog posts={posts} /> */}
      <Hello name="재현" />

      <MyList />
    </div>
  );
}
export default App;
