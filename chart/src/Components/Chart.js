import React from 'react'
import PropTypes from 'prop-types'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(){
    super()
    this.state = {
      chardata : {
        labels : ['Boston','Worcestor','Springfield','Lowell','Cambridge','New Bedford'],
        datasets :[
          {
            label : 'Population',
            data : [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor: [ 'blue','green','red','yellow','orange','pink' ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    title : true,
    legend : true,
    position : 'right'
  }

  render () {
     return(
       <Bar
          data={this.state.chardata}
          options={ {
            maintainAspectRatio: false ,
            title : {display:this.props.title, text:'Largest Cities In Massachusettes',fontSize:25}, legend : { display : this.props.legend, position : this.props.position}
        } }
        />
     )
  }
}

export default Chart;
