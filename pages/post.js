import React from 'react'
import Butter from 'buttercms'

const butter = Butter('de55d3f93789d4c5c26fb07445b680e8bca843bd')

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.slug);  
    return resp.data;
  }
  render() {
    const post = this.props.data;

    return (
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.body}} />
      </div>
    )
  }
}