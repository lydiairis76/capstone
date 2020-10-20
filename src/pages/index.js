import React from "react"
import ItemList from "../components/itemlist"
import AddItemForm from '../components/additemform'
import "../style/list.css"
import Counter from "../components/running"
import DateTime from "../components/date"
import Water from "../components/watercount"
import Weather from "../components/weatherdisplay"
import App from "../components/gratitude"
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
                    </div>
                    <div class ="datedisplay">
                    <DateTime />

                    <MonthIcon />
                    </div>
                    <div class="gratitude"><h2>What Are You Grateful For Today?</h2></div>
                    <div class="grattitudedisplay"><ul></ul><App /><ul/></div>
                    <div class="habit1">
                      <Counter />
                      </div>
                    <div class="habit2">
                      < Water />
                    </div>
                    <div class="spacer"></div>
            </div>
        </li>
        <li>
            <div class="innergrid">
                <div class="listheading">
                  <h2>To Do List</h2>
                </div>
                <div class="eight">
                  <AddItemForm />
                  <ItemList />
                </div>
                
              </div>
        </li>
        <li>
            <div class="innergrid">
              <div class="dailytask"><h2>Tuesday Tasks:</h2></div>
              <div class="weatherheading"><h2>Weather</h2></div>
              <div class="forecast">
               <h2> <Weather /> </h2>
              </div>
              <div class="weathericon"><span>< Weatherdoodle /></span></div>
              <div class="weathermessage"><h3>bring an umbrella!!!</h3></div>
            </div>
        </li>
      </ul>

  </div>
  )
}