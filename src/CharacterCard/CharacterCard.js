import React, {Component} from 'react';
import './CharacterCard.css'

class CharacterCard extends Component {
    render(){
      
        return(
            <div className="character-card">
                <h2>{this.props.name}</h2>
                <p>Role: {!this.props.role ? 'N/A' : this.props.role}</p>
                <p>Blood Status: {!this.props.bloodStatus ? 'N/A' : this.props.role}</p>
                <p>House: {!this.props.house ? 'N/A' : this.props.house}</p>
            </div>
        )
    }
}

export default CharacterCard;