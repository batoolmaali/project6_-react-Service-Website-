import React, { Component } from 'react';
import '../assest/Css/team.css';


class Team extends Component{
  state = {
    ourTeam : [ 
      {name : 'Firas' , job : 'Scrum Master' , image : 'https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/51960796_2203895879671248_1013313884708143104_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=QqxCl0TX-C4AX8IG9Q3&_nc_ht=scontent.famm10-1.fna&oh=1cca34c81370459d42805114d853f17f&oe=60447169'},
      {name : 'Batool' , job : 'Product Owner' , image : '../Images/batool.jpg'},
      {name : 'Laith' , job : 'Web Developer' , image : 'https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/121006590_175679957485188_2787551705850175421_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHOd__1OuhauxjLTgLlOmCBO78MwmLyPvw7vwzCYvI-_DSwBWz-Db3vQPX07j-xUW6Su-iIMJcQwtr5dA3D246P&_nc_ohc=WWjaXHVjvXAAX_uiPpo&_nc_ht=scontent.famm10-1.fna&oh=4f08a9ec12cedb2bf280b66ca1ceece7&oe=603F0EF1'},
      {name : 'Sara' , job : 'Web Developer' , image : 'https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/46432670_1102813726553776_9116549165046824960_o.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_eui2=AeFYwiDB58ZeammThO-kmMZKFejFHfUk0o4V6MUd9STSjgw_n1n8CRnTBW-f-yWckJfNPNsGD3jTJK3Z-Gkp1Uor&_nc_ohc=oQJA3mEMW78AX_FityG&_nc_ht=scontent.famm10-1.fna&oh=ad0e58ac358dacffe5ad16e1d63efa3f&oe=60425C92'}
    
    ]
  }
    render() {
      return (
        <div>
        <h2 style={{ textAlign: 'center', paddingTop: '3rem' , color: '#f05f7b' , marginBottom: '1.5%'}}>
            Our Team
          </h2>
        <div className="box">
          {this.state.ourTeam.map( (team , index) => {
            return(
          <div className="card" key={index}>
             <div className="imgBx">
                <img
                     src={team.image}
                     alt="Web Developer Images"
                />
             </div>
                <div className="details">
                    <h2>{team.name}<br /><span>{team.job}</span></h2>
                </div>
          </div>
            );
          })}
</div>
</div>
      ) 
      }
    }
    export default Team;