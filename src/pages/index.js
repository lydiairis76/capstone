import React from "react"
import ItemList from "../components/itemlist"
import AddItemForm from '../components/additemform'
import "../style/list.css"
import Running from "../components/running"
import DateTime from "../components/date"
import Water from "../components/watercount"
import Weather from "../components/weatherdisplay"
import TaskList from "../components/goallist"
import AddGoalForm from "../components/addgoals"
import Weatherdoodle from "../components/weathericon"
import MonthIcon from "../components/monthicon"


export default () => {

  
  
  return (
    <div class="columns">
      <ul>
        <li>
            <div class="innergrid">
                    <div class="date">
                    <h2>Today's Date</h2>
                    <div class="graytext"><DateTime /></div>
                    <MonthIcon />
                    </div>
                    <div class="habit1">
                      <Running />
                      </div>
            
                    <div class="habit2">
                      < Water />
                    </div>
                  
                 
            </div>
        </li>
        <li>
            <div class="innergrid">
                <div class="listheading">
                  <h2>To Do List</h2>
                  <img src="pencil.png" height="30px"/>
                  <div>
                  <AddItemForm />
                  <ItemList />
                  </div>
                  <img src="pen2.png" height="30px"/>
                </div>
              </div>
        </li>
        <li>
            <div class="innergrid">
              <div class="goal"><h2>Today's Focus</h2>
              < AddGoalForm />
            < TaskList />
            <img src="encouraging_doggos.png" height="150px"/>
              </div>
             
              <div class="weatherheading"><h2>Weather</h2>
               <h2> <Weather /> </h2>
              < Weatherdoodle />
              </div>
            </div>
        </li>
      </ul>

  </div>
  )
}