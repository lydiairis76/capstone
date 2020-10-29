import React from "react"
import ItemList from "../components/itemlist"
import AddItemForm from '../components/additemform'
import "../style/list.css"
import Counter from "../components/counterdisplay"
import DateTime from "../components/date"
//import Counter from "../components/watercount"
import Weather from "../components/weatherdisplay"
import TaskList from "../components/goallist"
import AddGoalForm from "../components/addgoals"
import Weatherdoodle from "../components/weathericon"
import MonthIcon from "../components/monthicon"
import RunCounter from "../components/runcount"
import DogMessage from "../components/dogmessage"
import { Helmet } from "react-helmet"


export default () => {

  
  
  return (
    <layout>
    <Helmet>
        <title>Personal Productivity Portal</title>
        <meta name="description" content="personal todo list and goal tracking with weather display" />
      </Helmet>
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
                    <Counter / >
                      </div>
            
                    <div class="habit2">
                      < RunCounter />
                    </div>
                  
                 
            </div>
        </li>
        <li>
            <div class="innergrid">
              <div class="banner">
                <span><img src="banner.png" alt="" height="100px" /></span>
              </div>
                <div class="listheading">
                  <h2>To Do List</h2>
                  <img src="pencil.png" height="30px"/>
                  <div>
                  <AddItemForm />
                  <ItemList />
                  </div>
                  <img src="pen2.png" height="30px"/>
                </div>
               <div class="doggo">
                 < DogMessage />
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
  </layout>
  )
}