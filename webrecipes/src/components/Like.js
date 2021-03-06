import React from 'react'

class Like extends React.Component {
    constructor(props) {
        super(props)

        this.user = props.user;
        this.item = props.item;
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);

        this.state = {
            isLiked: props.item.isLiked,
            isRunning: false
        };
    }

    like(id) {
        let url = `http://localhost:5000/api/user/${this.user.info.unique_name}/like?id=${id}`;

        this.setState({
            isRunning: true
        });

        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${this.user.token}`
                }
            }).then(x => {
                this.setState({
                    isLiked: true,
                    isRunning: false
                });
            })
        }
        catch {

        };
    }

    unlike(id) {
        let url = `http://localhost:5000/api/user/${this.user.info.unique_name}/unlike?id=${id}`;

        this.setState({
            isRunning: true
        });

        try {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `bearer ${this.user.token}`,
                }
            }).then(x => {
                this.setState({
                    isLiked: false,
                    isRunning: false
                });
            })
        }
        catch {

        };
    }

    render() {
        return (
            <div>
                {this.state.isLiked ?
                    <div className="recipeLikeBlock recipeLiked" data-id={this.item.id}
                        disabled={this.state.isRunning}
                        id={`like${this.item.id}`}
                        onClick={() => this.unlike(this.item.id)}></div> :
                    <div className="recipeLikeBlock" data-id={this.item.id}
                        id={`like${this.item.id}`}
                        disabled={this.state.isRunning}
                        onClick={() => this.like(this.item.id)}></div>
                }
            </div>

        )
    }
}

export default Like;