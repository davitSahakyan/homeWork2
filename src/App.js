import React from "react";

import './App.css';
import List from "./components/list/List";
import Loading from "./components/loading/Loading";
import DailyList from "./components/dailyList/DailyList";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            daylyData: [],
            isLoading: false,
        }
        this.initData = this.initData.bind(this);
        this.getDataForDirectState = this.getDataForDirectState.bind(this);
        this.onStateClick = this.onStateClick.bind(this);
    }

    componentDidMount() {
        this.initData()
    }

    initData() {
        this.setState({isLoading: true})
        fetch("https://api.covidtracking.com/v1/states/daily.json")
            .then(resp => resp.json())
            .then(json => {
                const slicedData = json.slice(0,600)
                this.setState({isLoading: false})
                return this.setState({data: [...slicedData], daylyData: []})
            })
    }

    getDataForDirectState(param) {
        this.setState({isLoading: true})
        fetch(`https://api.covidtracking.com/v1/states/${param}/daily.json`)
            .then(resp => resp.json())
            .then(json => {
                const slicedData = json.slice(0,600)
                this.setState({isLoading: false})
                return this.setState({daylyData: [...slicedData], data: []})
            })
    }

    onStateClick(stateName) {
        const lowerCaseStateName = stateName.toLowerCase();
        this.getDataForDirectState(lowerCaseStateName)
    }

    render() {
       return (
           <div>
               <div className="list-wrapper">
                   <div className="list">
                       { this.state.isLoading ? <Loading/> : null }
                       { this.state.data.length && !this.state.isLoading ? <List data={this.state.data} onStateClick={this.onStateClick}/> : null}
                       { this.state.daylyData.length && !this.state.isLoading ?  <DailyList data={this.state.daylyData}/> : null}
                   </div>
               </div>
           </div>
       )
    }
}

export default App