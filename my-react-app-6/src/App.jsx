import './App.css'
import UserProfile from './component/UserProfile.jsx'

function App() {
  return (
    <div className="app-layout">
      <aside className="profile-column">
        <h2>User Profiles</h2>

        <UserProfile
          name="Abdul Moiz Ahmed"
          role="Computer Science Student"
          age={21}
          isOnline={true}
          bio="I like to build different projects that allow me to challenge myself and include aspects of web development."
          socials={{ github: 'AbdulMoizAhmd', instagram: '@abdulxmoiz' }}
        />

        <UserProfile
          name="Abia Shoaib"
          role="Events and Marketing Enthusiast"
          age={20}
          isOnline={true}
          bio="I like to explore my creative and social skills and actively partake in events and management/marketing campaigns."
          socials={{ github: 'abiashoaib', instagram: '@abiashoaibb' }}
        />

        <UserProfile
          name="Aaliyan Irfan"
          role="Finance Enthusiast"
          age={22}
          isOnline={false}
          bio="I love working in finance and am pursuing my dream of becoming an investment banker. Confident, stylish and good-looking."
          socials={{ github: 'aaliyanirfan', instagram: '@aaliyan_irfan' }}
        />

      </aside>
    </div>
  );
}

export default App