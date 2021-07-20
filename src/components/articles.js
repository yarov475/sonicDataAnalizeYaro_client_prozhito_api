import React from "react";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        // Only change code below this line
        this.state =
            {
                loading: false,
                texts: []
            }
    }

    componentDidMount() {
        const date = '1941-07-22'

        this.setState({loading: true}, () => {
            fetch(`https://prozhito.org/api/notes/search?search_type=diaries&date=${date}`)
                .then(response => response.json())
                .then(j => {
                    this.setState({loading: false, texts: j.data.notes})
                })
        })
    }

    render() {
        const {texts} = this.state;
        return (
            <div>
                {texts.map(post => (
                    <div key={post.id} className='container'>
                        <div className="card mb-10">
                            <div className="card_title">
                                {post.id}
                            </div>
                            <div className="card-body">
                                {post.text}
                            </div>

                        </div>


                    </div>
                ))}
            </div>
        )

    }
}

export default Articles