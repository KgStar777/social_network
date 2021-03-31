import React from 'react';
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={classes.Status}>
                        <span onClick={ this.activateEditMode.bind(this)} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;