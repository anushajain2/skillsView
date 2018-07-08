import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChop } from '../actions';
import { Link } from 'react-router-dom';
import '../styles/skillnew.css';

class SkillNew extends Component {
    componentDidMount() {
        // this.props.fetchSkill();
        this.props.fetchChop();
    };

    renderSkills() {
        return this.props.skill.map(skill => {
            return (
                <div key={skill._id}>
                    <div>
                        <span>{skill.title}</span>
                        <p> {skill.details} </p>
                    </div>
                </div>
            );
        });
    }

    renderChops() { 
        return this.props.chop.map(chop => {
            return (
                <div key={chop._id} className="boxdetails">
                    {/* <div className="skill"> {chop.title} </div> */}
                    <div className="div1"> 
                    <table className="table1">
                        <tr></tr>
                        <tr></tr>
                        <tr><td>{this.props.zipcode}</td></tr>
                        <tr><td>{chop.C4}</td></tr>
                        <tr><td>{chop.C7}</td></tr>
                        <tr><td>{chop.C10}</td></tr>
                        <tr><td>{chop.C13}</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                    <div className="div2">
                    <table className="table2">
                        <tr></tr>
                        <tr></tr>
                        <tr><td>{chop.C2}</td></tr>
                        <tr><td>{chop.C5}</td></tr>
                        <tr><td>{chop.C8}</td></tr>
                        <tr><td>{chop.C11}</td></tr>
                        <tr><td>{chop.C14}</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                    <div className="div3">
                    <table className="table3">
                        <tr></tr>
                        <tr></tr>
                        <tr><td>{chop.C3}</td></tr>
                        <tr><td>{chop.C6}</td></tr>
                        <tr><td>{chop.C9}</td></tr>
                        <tr><td>{chop.C12}</td></tr>
                        <tr><td>{chop.C15}</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="chopsview">
              
                {/* {this.renderSkills()} */}
                <div className="boxes">
                    <div className="chop1"> JavaScript </div>
                    <div className="chop2"> React.js </div>
                    <div className="chop3"> Node.js </div> 
                </div>
                <div className="mastery">On the Way to Mastery</div>
                {this.renderChops()}
                {/* <div className="boxdetails">
                    <div className="div1">
                    <table className="table1">
                        <tr><td>Knows how to program using promises</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                    <div className="div2">
                    <table className="table2">
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td></td></tr>
                        <tr><td>Knows how modules ork</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                    <div className="div3">
                    <table className="table3">
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr><td>Knows how modules work</td></tr>
                        <tr></tr>
                    </table>
                    </div>
                </div> */}
               
            </div>
        );
    }
}

function mapStatetoProps({ skill, chop }) {
    return { skill, chop };
}

export default connect(mapStatetoProps, { fetchChop })(SkillNew);
