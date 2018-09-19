import { connect } from 'react-redux'
import React from 'react';

const Messages = messages => {
  console.log(messages);
  return(
    <ul>
      {messages.text}
    </ul>
  )
}

const mapStateToProps = state => ({
  messages: Messages(state.messages)
})

export default connect(
  mapStateToProps,
)(Messages) 