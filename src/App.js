import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from  "./components/TodoForm"

const activities = [
  {
    name: "Go to the Beach",
    id: 1000,
    completed: false
  },
  {
    name: "Buy groceries",
    id: 1001,
    completed: false
  },
  {
    name: "Go to the gym",
    id: 1002,
    completed: false
  },
  {
    name: "Wash the car",
    id: 1003,
    completed: false
  },
  {
    name: "Do your laundry",
    id: 1004,
    completed: false
  },
  {
    name: "Pray 5 times a day",
    id: 1005,
    completed: false
  },
  {
    name: "Go to work",
    id: 1006,
    completed: false
  }



]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      activities
    }
  }

  toggleCompleted = itemId => {
    console.log("fg: App.js: App: toggleCompleted: itemId: ", itemId );
    this.setState({
      activities: this.state.activities.map(activity => {
        if(itemId === activity.id) {
          return {
            ...activity,
            completed: !activity.completed
          };
        }
        return activity;
      })
    })
  }
    addNewActivity = activityName => {
      console.log("fg: index.js: addNewItem: itemName: ", activityName);
      this.setState({
        activities: [
          ...this.state.activities,
          {name: activityName, purchased: false, id: Date.now()}
        ]
      });
    };

    clearActivities = () => {
      console.log("fg: index.js: clearPurchased");
      this.setState({
        activities: this.state.activities.filter(activity => {
          return !activity.completed;
        })
      });
    }


  render() {
    return (
      <div>
        <div>
          <h2>Fady's daily to-do list</h2>
          <TodoForm addNewActivity={this.addNewActivity} />
        </div>
        <TodoList toggleCompleted={this.toggleCompleted} activities={this.state.activities} clearActivities={this.clearActivities} />
      </div>
      
    );
  }
}

export default App;
